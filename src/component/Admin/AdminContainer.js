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
   

    render() {
        return (
            <div>
                <Header/>
                {this.props.user.Admin ? 
                <Admin
                posts={this.state.posts}
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