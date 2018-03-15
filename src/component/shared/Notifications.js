import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import {red500, yellow500, blue500} from 'material-ui/styles/colors';
import axios from 'axios';
import PostApproval from './PostApproval';
import NewReview from './NewReview';
import './shared.css';

export default class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
          open: false,
          notification: 'testing!',
          

        };
      }
    
      handleClick = (event) => {
        // This prevents ghost click.
        event.preventDefault();
    
        this.setState({
          open: true,
          anchorEl: event.currentTarget,
        });
      };
    
      handleRequestClose = () => {
        this.setState({
          open: false,
        });
      };
    render() {

        const notification_messages = this.props.approvalPost ? this.props.approvalPost.map((e, i) => {
            return (<MenuItem key={i} primaryText={<PostApproval id={e.id} message={e.name} dismissNotification={this.props.dismissNotification}/>} />)
        }): 'loading'
        

        const new_reviews = this.props.newReviews ? this.props.newReviews.map((e, i) => {
            return (<MenuItem key={i} primaryText={<NewReview id={e.id} reviewer={e.username} dismissReviewNotifications={this.props.dismissReviewNotifications} />} />)
        }): 'loading'

        return (
            <div className='notification-alert system'>
                
                    {<span  onClick={this.handleClick}>
                        <NotificationsIcon color='#FF3776'/>
                        <Badge
                            badgeContent={this.props.notifCount}
                            secondary={true}
                            badgeStyle={{top: 0, right: 0}}
                        /> 
                    </span>}
                
                <Popover
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                targetOrigin={{horizontal: 'left', vertical: 'top'}}
                onRequestClose={this.handleRequestClose}
                animation={PopoverAnimationVertical}
                >
                <Menu>
                    {notification_messages}
                    {new_reviews}
                </Menu>
                </Popover>
            </div>
        );
    }
}