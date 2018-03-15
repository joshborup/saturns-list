import React, { Component } from 'react';
import axios from 'axios';
import Posts from './Posts';
import { connect } from 'react-redux';
import { fetchUserData } from '../../redux/reducer';


class PostsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            individualPost: '',
            file: '',
            seller:'',
            headerStyle: 'orange'
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
        axios.get('/api/user-data').then(user => {
            this.props.fetchUserData(user.data);
        })
        
    }

    
    render() {
        
        return (
            <Posts 
                postInfo={this.state.individualPost} 
                upload={this.fileUpload} 
                file={this.state.file}
                seller={this.state.seller}
                user={this.props.user}
                color={this.state.headerStyle}
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

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)