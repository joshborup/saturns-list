import React, { Component } from 'react';
import { connect } from 'react-redux';
import Account from './Account';
import Header from '../shared/Header';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { fetchUserData, fetchCategories, fetchProfileInfo } from '../../redux/reducer';
import './account.css'

class AccountContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            headerStyle:'orange',
            posts: '',
            inactive:'',
            isActive: true,
            notActive: true,
            slideIndex: 0,
            userReviews: ''
        }
        this.markAsSold = this.markAsSold.bind(this);
        this.reactivate = this.reactivate.bind(this);
        this.deletePost = this.deletePost.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount(){

        function getUserReviews(){
            return axios.get('/api/my-user-reviews')
        }

        function getUserData(){
            return axios.get('/api/user-data');
        }

        function getUserPosts(){
           return axios.get('/api/get_user_posts');
        }

        function getInactivePosts(){
            return axios.get('/api/inactive');
        }

        axios.all([getUserData(),getUserPosts(), getInactivePosts(), getUserReviews()]).then(axios.spread((user, posts, inactive, userReviews)=> {
            this.setState({
                posts: posts.data,
                inactive: inactive.data,
                userReviews: userReviews.data
            })
            this.props.fetchUserData(user.data);

            axios.get('/api/get_profile_data').then(profile => {
                this.props.fetchProfileInfo(profile.data[0])
            });
        }))
    }

    markAsSold(itemId){

        axios.put('/api/mark_sold', {id: itemId , userId: this.props.user.id}).then((response)=>{
            axios.get('/api/inactive').then(inactive=> {
                this.setState({
                    posts: response.data,
                    inactive: inactive.data
                })
            })
        })
        
    }

    deletePost(item_id, seller_id){
        
        axios.delete(`/api/delete_post_by_id/?item_id=${item_id}&seller_id=${seller_id}`).then((inactive)=>{
                    
                this.setState({
                    inactive: inactive.data
                })
           
        })
    }

    reactivate(itemId){

        axios.put('/api/reactivate', {id: itemId , userId: this.props.user.id}).then((response)=>{
            axios.get('/api/inactive').then(inactive=> {
                this.setState({
                    posts: response.data,
                    inactive: inactive.data
                })
            })
        })
        
    }

    handleChange = (value) => {
        this.setState({
          slideIndex: value,
        });
      };

    render() {
        return (
            <div className='account-container'>
                <Header color2={this.state.headerStyle} />
                {
                this.props.user ?  
                <Account
                user={this.props.user}
                posts={this.state.posts}
                markAsSold={this.markAsSold}
                inactive={this.state.inactive}
                profile={this.props.profile}
                isActive={this.state.isActive}
                notActive={this.state.notActive}
                reactivate={this.reactivate}
                deletePost={this.deletePost}
                handleChange={this.handleChange}
                slideIndex={this.state.slideIndex}
                userReviews={this.state.userReviews}
                /> 
                : 
                <h1>You Must <Link to='/account_login'>Login</Link> or <Link to='/account_login'>Register</Link> for an account</h1>
                }
                
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        profile: state.profileInfo
    }
}

const mapDispatchToProps = {
    fetchUserData: fetchUserData,
    fetchProfileInfo: fetchProfileInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountContainer)