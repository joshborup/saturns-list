import React, { Component } from 'react';
import ResetPassword from './ResetPassword'
import axios from 'axios';
import './resetPassword.css';

export default class ResetPasswordContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            newPassword: '',
            re_enterPassword: '',
            email: '',
            reset_key: '',
            message:''
        }
        this.enterNewPassword = this.enterNewPassword.bind(this);
        this.reEnterNewPassword = this.reEnterNewPassword.bind(this);
        this.resetPass = this.resetPass.bind(this);
        this.resetKeyPress = this.resetKeyPress.bind(this);
    }

    componentDidMount(){
        const reset_key = window.location.href.split('=').pop()
        this.setState({
            reset_key: reset_key
        })
    }

    enterNewPassword(password){
        this.setState({
            newPassword: password
        })
    }
    reEnterNewPassword(password){
        this.setState({
            re_enterPassword: password
        })
    }

    resetKeyPress(e){
        if(e.key == 'Enter'){
            if(this.state.newPassword == this.state.re_enterPassword){
                axios.put('/api/reset_password', {password: this.state.newPassword , reset_key: this.state.reset_key}).then(response => {
                    this.setState({
                        message: response.data.message
                    })
                    setTimeout(function() {
                        window.location.href = '/account_login';
                      }, 3000);
                })
            } else {
                this.setState({
                    message: 'Your passwords do not match'
                })
            }
        }
    }


    resetPass(){
        if(this.state.newPassword == this.state.re_enterPassword){
            axios.put('/api/reset_password', {password: this.state.newPassword , reset_key: this.state.reset_key}).then(response => {
                this.setState({
                    message: response.data.message
                })
                setTimeout(function() {
                    window.location.href = '/account_login';
                  }, 3000);
            })
        } else {
            this.setState({
                message: 'Your passwords do not match'
            })
        }
        
    }

    render() {
        return (
            <ResetPassword 
            enterNewPassword={this.enterNewPassword}
            reEnterNewPassword={this.reEnterNewPassword}
            newPassword={this.state.newPassword}
            re_enterPassword={this.state.re_enterPassword}
            email={this.state.email}
            message={this.state.message}
            resetPass={this.resetPass}
            resetKeyPress={this.resetKeyPress}
            />
        );
    }
}