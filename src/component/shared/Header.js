import React, { Component } from 'react';
import saturn from '../../media/saturn.svg';
import {Link} from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchUserData } from '../../redux/reducer';
import Notifications from './Notifications';
import './shared.css';


class Header extends Component {
    constructor(props){
        super(props)
        this.state = {
            isAnimating: false,
            user: '',
            notifCount:0,
            approvalPost:'',
            newReviews: ''
          }
          this.toggleAnimation = this.toggleAnimation.bind(this);
          this.logout = this.logout.bind(this);
          this.dismissNotification = this.dismissNotification.bind(this);
          this.dismissReviewNotifications = this.dismissReviewNotifications.bind(this);
        }

        componentDidMount(){

            function getCount(){
                return axios.get('/api/notifications_count');
            }

            function getApprovalNotifications(){
                return axios.get('/api/notifications');
            }

            function getUserData(){
                return axios.get('/api/user-data');
            }

            function newReview(){
                return axios.get('/api/notifications_review');
            }

            axios.all([getUserData(), getCount(), getApprovalNotifications(), newReview()]).then(axios.spread((user, count, approvalPost, newReviews)=>{
                this.props.fetchUserData(user.data);
                
                this.setState({
                    notifCount: count.data[0].count,
                    approvalPost: approvalPost.data,
                    newReviews: newReviews.data
                })
            }))

            axios.get('/api/user-data').then(user => {
                this.props.fetchUserData(user.data);
            })
        }

        logout(){
            axios.post('/logout').then((response) => {
                
                window.location.href = '/account_login'
            })

        }
      
        toggleAnimation(){
            if(!this.state.isAnimating){
            this.setState({
                isAnimating: true
            })
            }else{
            this.setState({
                isAnimating: false
            })
            }
        
        }

        dismissNotification(item_id){
            
            axios.put('/api/dismiss_notification', {item_id: item_id}).then(approvalPost => {
                axios.get('/api/notifications_count').then(count => {
                    this.setState({
                        notifCount: count.data[0].count,
                        approvalPost: approvalPost.data
                    })
                    
                })
            })
             
        }

        dismissReviewNotifications(review_id){
            axios.put('/api/dismiss_review', {review_id:review_id}).then(newReviews => {
                axios.get('/api/notifications_count').then(count => {
                    this.setState({
                        notifCount: count.data[0].count,
                        newReviews: newReviews.data
                    })
                    
                })
            })
        }

    render() {
        const boldheader = {
            color: this.props.color
        }
        const boldheader1 = {
            color: this.props.color1
        }
        const boldheader2 = {
            color: this.props.color2
        }
        const boldheader3 = {
            color: this.props.color3
        }
        const boldheader4 = {
            color: this.props.color4
        }

        return (
            <div className={this.state.isAnimating && this.props.user.Admin ? 'header AdminGrow' : this.state.isAnimating ?'header grow' : 'header shrink'} >
                <div>
                    <div>
                        <img src={saturn}/>   
                        <h1>
                            Saturn's List
                        </h1>
                    </div>
                    
                    <div className='button-menu'>
                        {this.props.user && this.state.notifCount != 0 ? <div className='big-hide'>
                            <Notifications 
                            notifCount={this.state.notifCount}
                            approvalPost={this.state.approvalPost}
                            newReviews={this.state.newReviews}
                            dismissNotification={this.dismissNotification}
                            dismissReviewNotifications={this.dismissReviewNotifications}
                            />
                        </div>: ''}
                        <button onClick={this.toggleAnimation}>	&#9776;</button>
                        
                        <ul className={this.state.isAnimating ? 'show-menu' : 'hide-menu'}>
                            <Link to='/'><li style={boldheader}>Home</li></Link>
                            { this.props.user.Admin ? <Link to='/saturn_admin'><li style={boldheader4}>Admin</li></Link> : ''}
                            <Link to='/add_post'><li style={boldheader1}>Post</li></Link>
                            { this.props.user ? <Link to='/account'><li style={boldheader2}>Account</li></Link> : ''}
                            { this.props.user ? <li onClick={()=>this.logout()}>Logout</li> : <Link to='/account_login'><li>Login/Register</li></Link>}
                        </ul>
                        
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header)