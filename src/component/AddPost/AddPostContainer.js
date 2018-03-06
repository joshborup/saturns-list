import React, { Component } from 'react';
import Header from '../shared/Header';
import axios from 'axios';
import AddPost from './AddPost';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUserData } from '../../redux/reducer';
import Categories from '../ItemList/Categories';

class AddPostToContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            headerStyle: 'orange',
            category: '',
            itemName: '',
            itemDescription:'',
            itemPrice: '',
            itemCondition:'',
            images:[],
            upload: 'item'
        }
        this.getCategory = this.getCategory.bind(this);
        this.getItemDescription = this.getItemDescription.bind(this);
        this.getItemName = this.getItemName.bind(this);
        this.getItemPrice = this.getItemPrice.bind(this);
        this.getItemCondition = this.getItemCondition.bind(this);
        this.post = this.post.bind(this);
        this.getImage = this.getImage.bind(this);
    }

    componentDidMount(){
        axios.get('/api/user-data').then(user => {
            this.props.fetchUserData(user.data);
        })
    }

    getCategory(category){
        this.setState({
            category: category
        })
    }

    getItemName(itemName){
        this.setState({
            itemName: itemName
        })
    }

    getItemDescription(description){
        this.setState({
            itemDescription: description
        })
    }

    getItemPrice(price){
        this.setState({
            itemPrice: price
        })
    }

    getItemCondition(condition){
        this.setState({
            itemCondition: condition
        })
    }

    getImage(image){
        this.setState({
            images: [...this.state.images].concat(image)
        })
    }

    post(){
        axios.post('/api/new_item', {cat_id: this.state.category, price: this.state.itemPrice, name:this.state.itemName, condition:this.state.itemCondition, description: this.state.itemDescription, imageArray: this.state.images}).then(response => {
            window.location.href = response.request.responseURL;
        })
    }
    
    render() {
        return (
            <div className='add-post-container'>
                <Header color1={this.state.headerStyle}/>
                {this.props.user ? 
                <AddPost
                    getCategory={this.getCategory}
                    getItemName={this.getItemName}
                    getItemDescription={this.getItemDescription}
                    getItemPrice={this.getItemPrice}
                    getItemCondition={this.getItemCondition}
                    post={this.post}
                    category={this.state.category}
                    itemName={this.state.itemName}
                    itemDescription={this.state.itemDescription}
                    itemPrice={this.state.itemPrice}
                    itemCondition={this.state.itemCondition}
                    categories={this.props.categories}
                    images={this.state.images}
                    getImage={this.getImage}
                    upload={this.state.upload}
                /> : <h1>You Must <Link to='/account_login'>Login</Link> or <Link to='/account_login'>Register</Link> for an account</h1>}
                {/* <AddPost/> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        categories: state.categories
    }
}

const mapDispatchToProps = {
    fetchUserData: fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPostToContainer)