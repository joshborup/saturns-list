import React, { Component } from 'react';
import { connect } from 'react-redux';
import Account from './Account';
import Header from '../shared/Header';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './account.css'

class AccountContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            headerStyle:'orange',
            posts: '',
            inactive:''
            
        }
        this.markAsSold = this.markAsSold.bind(this);
    }

    componentDidMount(){

        function getUserPosts(){
           return axios.get('/api/get_user_posts');
        }

        function getInactivePosts(){
            return axios.get('/api/inactive');
        }

        axios.all([getUserPosts(), getInactivePosts()]).then(axios.spread((posts, inactive)=> {
            this.setState({
                posts: posts.data,
                inactive: inactive.data
            })
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
                /> 
                : 
                <h1>You Must <Link to='/account_login'>Login</Link> or <Link to='/account_login'>Register</Link> for an account</h1>
                }
                
                 {/* <Account
                user={this.props.user}
                
                />  */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(AccountContainer)