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
            posts: ''
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


        axios.all([getUserData(), getAllPosts()]).then(axios.spread((user, posts)=> {
            
            this.props.fetchUserData(user.data);
            this.setState({
                posts: posts.data,
            })
        }))
    
    }

    approvePost(itemId){
        console.log(itemId);
        axios.put(`/api/approve_post`, {itemId: itemId}).then(posts => {
            this.setState({
                posts: posts.data,
            })
        })
    }

    disapproveAndDelete(itemId){
        console.log(itemId);
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
        console.log(this.state.posts);
        return (
            <div>
                <Header/>
                {this.props.user.Admin ? 
                <Admin
                posts={this.state.posts}
                admin={this.props.user.Admin}
                approvePost={this.approvePost}
                disapproveAndDelete={this.disapproveAndDelete}
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