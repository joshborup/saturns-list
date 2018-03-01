import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts';


export default class PostsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            individualPost: ''
        }
    }

    componentDidMount(){
        const id = window.location.href.split('=').pop();
        axios.get(`/api/listing/${id}`).then(response => {
            this.setState({
                individualPost: response.data[0]})
        })


    }
    
    render() {
        console.log(this.state.individualPost);
        return (
            <Posts postInfo={this.state.individualPost} />
        );
    }
}