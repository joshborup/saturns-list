import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts';


export default class PostsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            individualPost: '',
            file: '',
            seller:''
        }
    }

    componentDidMount(){
        const id = window.location.href.split('=').pop();
        axios.get(`/api/listing/${id}`).then(response => {
            this.setState({
                individualPost: response.data[0]
            })

            axios.get(`/api/get_seller_by_id?seller_id=${response.data[0].seller_id}`).then(seller => {
                this.setState({
                    seller: seller.data[0]
                })
            })

        })
        
    }

    
    render() {
        
        return (
            <Posts 
                postInfo={this.state.individualPost} 
                upload={this.fileUpload} 
                file={this.state.file}
                seller={this.state.seller}
                />
        );
    }
}