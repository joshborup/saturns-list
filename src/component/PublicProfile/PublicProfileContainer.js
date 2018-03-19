import React, { Component } from 'react';
import axios from 'axios';
import PublicProfile from './PublicProfile';
import { connect } from 'react-redux';
import { fetchUserData } from '../../redux/reducer';

class PublicProfileContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            sellerInfo: '',
            seller: '',
            posts: '',
            userReviews:[],
            review: '',
            hideSeller: true,
            userRating:'',
            headerStyle: 'orange'
        }
        this.handleChange = this.handleChange.bind(this);
        this.rating = this.rating.bind(this);
        this.submitReview= this.submitReview.bind(this);
        this.handleSlideChange = this.handleSlideChange.bind(this);
    }

    componentDidMount(){
        const id = window.location.href.split('/').pop();
        function getUserReviews(){
            return axios.get(`/api/user-reviews?seller_id=${id}`)
        }

        function getUserData(){
            return axios.get('/api/user-data');
        }

        function getPostByUser(){
            return axios.get(`/api/get_user_posts_public/${id}`)
        }

        function getProfileInfo(){
            return axios.get(`/api/profile/${id}`)
        }
        
        axios.all([getPostByUser(), getProfileInfo(), getUserData(), getUserReviews()]).then(axios.spread((posts, profile, user, userReviews) => {
            this.setState({
                sellerInfo: profile.data[0],
                posts: posts.data,
                userReviews: userReviews.data
                
            })
            this.props.fetchUserData(user.data);
            axios.get(`/api/get_seller_by_id?seller_id=${id}`).then(seller => {
                
                this.setState({
                    seller: seller.data[0]
                })
            })
        }))
    }

    
    rating(userRating){
        this.setState({
            userRating:userRating
        })
    }

    handleSlideChange = (value) => {
        this.setState({
          slideIndex: value,
        });
      };

    handleChange(value) {
        this.setState({ review: value })
    }

    submitReview(){
        const id = window.location.href.split('').pop();
        axios.post('/api/leave_review', {user: id, rating: this.state.userRating, review: this.state.review}).then(userReviews => {
            this.setState({
                userReviews: userReviews.data
            })
        })
    }

    render() {
        
        return (
            <PublicProfile 
            sellerInfo={this.state.sellerInfo} 
            seller={this.state.seller}
            posts={this.state.posts}
            hideSeller={this.state.hideSeller}
            user={this.props.user}
            review={this.state.review}
            userReviews={this.state.userReviews}
            handleChange={this.handleChange}
            userRating={this.state.userRating}
            rating={this.rating}
            submitReview={this.submitReview}
            handleSlideChange={this.handleSlideChange}
            slideIndex={this.state.slideIndex}
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(PublicProfileContainer)