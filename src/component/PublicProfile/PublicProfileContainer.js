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
            hideSeller: true
        }
    }

    componentDidMount(){
        const id = window.location.href.split('').pop();

        function getUserData(){
            return axios.get('/api/user-data');
        }

        function getPostByUser(){
            return axios.get(`/api/get_user_posts_public/${id}`)
        }

        function getProfileInfo(){
            return axios.get(`/api/profile/${id}`)
        }
        
        axios.all([getPostByUser(), getProfileInfo(), getUserData()]).then(axios.spread((posts, profile, user) => {
            
            this.setState({
                sellerInfo: profile.data[0],
                posts: posts.data
            })
            this.props.fetchUserData(user.data);
            axios.get(`/api/get_seller_by_id?seller_id=${profile.data[0].id}`).then(seller => {
                this.setState({
                    seller: seller.data[0]
                })
            })
        }))
    }


    render() {
        return (
            <PublicProfile 
            sellerInfo={this.state.sellerInfo} 
            seller={this.state.seller}
            posts={this.state.posts}
            hideSeller={this.state.hideSeller}
            user={this.props.user}
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