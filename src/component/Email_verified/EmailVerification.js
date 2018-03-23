import React, { Component } from 'react';
import axios from 'axios';
import './email.css'

export default class EmailVerification extends Component {
    constructor(props){
        super(props)
        this.state = {
            message: ''
        }
    }
    componentDidMount(){
        const key = window.location.href.split('=').pop();
        
        axios.put(`/email_verification`, {verification_key: key}).then(response => {
            this.setState({
                message: 'Thank you your email has been verified, you can now post'
            })
            setTimeout(()=> {
                window.location.href = '/';
            },2000)
        })
    }
    render() {
        return (
            <div className='email-verification-container'>
                <div>
                    <div>
                        <h1>{this.state.message}</h1>
                    </div>
                </div>
            </div>
        );
    }
}