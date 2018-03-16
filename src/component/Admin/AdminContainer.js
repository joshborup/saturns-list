import React, { Component } from 'react';
import Admin from './Admin';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchUserData } from '../../redux/reducer';
import Header from '../shared/Header';
import './Admin.css';

class AdminContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            user:'',
            posts: '',
            headerStyle: 'orange',
            activePosts:'',
            inactivePosts:''
        }
        this.approvePost = this.approvePost.bind(this);
        this.disapproveAndDelete = this.disapproveAndDelete.bind(this);
    }

   
    componentDidMount(){

        function getUserData(){
            return axios.get('/api/user-data');
        }
        function getAllPosts(){
            return axios.get('/api/get_unapproved_posts');
        }
        function getActiveInactive(){
            return axios.get('/api/active_inactive_count');
        }


        axios.all([getUserData(), getAllPosts(), getActiveInactive()]).then(axios.spread((user, posts, activeInactive)=> {
            
            this.props.fetchUserData(user.data);
            this.setState({
                posts: posts.data,
                activePosts: activeInactive.data[0].count,
                inactivePosts: activeInactive.data[1].count
            })
        }))
    
    }

    approvePost(itemId, email, name, username){
        
        axios.put(`/api/approve_post`, {itemId: itemId, email: email, name: name, username: username}).then(posts => {
            this.setState({
                posts: posts.data,
            })
        })
    }

    disapproveAndDelete(itemId){
        
        if(window.confirm('are you sure you want to delete this post, this is irreversable')){
        axios.delete(`/api/disapprove_delete?itemId=${itemId}`).then(posts => {
            this.setState({
                posts: posts.data,
            })
        })
        }else {
            console.log('you clicked no');
        }
    }
   

    render() {
        
        return (
            <div>
                <Header
                color4={this.state.headerStyle}
                />
                {this.props.user.Admin ? 
                <Admin
                posts={this.state.posts}
                admin={this.props.user.Admin}
                approvePost={this.approvePost}
                disapproveAndDelete={this.disapproveAndDelete}
                activePosts={this.state.activePosts}
                inactivePosts={this.state.inactivePosts}
                /> 
                :
                 'You are not authorized to be here!'}
            </div>    
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    fetchUserData:fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminContainer)