import React, { Component } from 'react';
import axios from 'axios';
import '../shared/shared.css';

export default class AdminMessage extends Component {
    constructor(props){
        super(props)
        this.state={
            message: ''
        }
    }

    componentDidMount(){
        axios.get('/api/admin_message').then(response => {
            console.log(response)
            this.setState({
                message: response.data[0].message
            })
        })
    }

    render() {
        return (
            <div className='admin-message'>
                <div dangerouslySetInnerHTML={{__html: this.state.message}}>
                </div>
                <div onClick={this.props.closeMessage} className='close-message'>
                    X
                </div>
            </div>
        );
    }
}