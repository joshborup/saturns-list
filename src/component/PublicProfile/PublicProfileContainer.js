import React, { Component } from 'react';
import axios from 'axios';
import PublicProfile from './PublicProfile';

export default class PublicProfileContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            sellerInfo: '',
            seller: ''
        }
    }

    componentDidMount(){
        const id = window.location.href.split('').pop();
        axios.get(`/api/profile/${id}`).then(response => {
            this.setState({
                sellerInfo: response.data[0]
            })
            axios.get(`/api/get_seller_by_id?seller_id=${response.data[0].id}`).then(seller => {
                this.setState({
                    seller: seller.data[0].username
                })
            })
        })
    }


    render() {
        console.log(this.state.seller);
        return (
            <PublicProfile sellerInfo={this.state.sellerInfo} seller={this.state.seller}/>
        );
    }
}