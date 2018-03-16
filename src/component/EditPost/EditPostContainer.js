import React, { Component } from 'react';
import axios from 'axios';
import Header from '../shared/Header'
import EditPost from './EditPost';
import Footer from '../shared/Footer';
import { connect } from 'react-redux';

class EditPostContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            editablePost: '',
            authorizedUser:'',
            requestingUser:'',
            category: '',
            itemName: '',
            itemDescription:'',
            itemPrice: '',
            itemCondition:'',
            images:[],
            upload: 'item',
            catId:'',
            itemId: ''
            
        }
        this.getCategory = this.getCategory.bind(this);
        this.getItemDescription = this.getItemDescription.bind(this);
        this.getItemName = this.getItemName.bind(this);
        this.getItemPrice = this.getItemPrice.bind(this);
        this.getItemCondition = this.getItemCondition.bind(this);
        this.getImage = this.getImage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.cancel = this.cancel.bind(this);
        this.delete = this.delete.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount(){
        const id = window.location.href.split('/').pop();
        function getListing(){
            return axios.get(`/api/listing/${id}`);
        }

        function getUser(){
            return axios.get('/api/user-data');
        }
        axios.all([getListing(), getUser()]).then(axios.spread((post, user)=>{
           const images = post.data[0].image_path ? post.data[0].image_path.replace(/\{/g, '').replace(/\}/g, '').split(',') : null
            this.setState({
                editablePost: post.data[0],
                itemId: post.data[0].id,
                catId: post.data[0].catergory_id,
                category: post.data[0].cat_name,
                itemName: post.data[0].name,
                itemDescription: post.data[0].description,
                itemPrice: post.data[0].price,
                itemCondition:post.data[0].condition,
                images: images,
                requestingUser: user.data.id
            })
        }))
    }

    handleChange(value) {
        this.setState({ itemDescription: value })
    }
 

    getCategory(catId){
        this.setState({
            catId: catId
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

    delete(index){
           const images = [...this.state.images];
           images.splice(index,1);
           this.setState({
               images: images
           })
    }

    update(){
        axios.put('/api/update_listing', {
            seller_id: this.state.editablePost.seller_id,
            condition: this.state.itemCondition,
            cat_id:this.state.catId,
            price: this.state.itemPrice,
            itemName: this.state.itemName,
            description: this.state.itemDescription,
            image_path: this.state.images,
            item_id: this.state.itemId 
        }).then(response => {
            window.location.href = response.data;
        })
    }
    
    cancel(){
        this.props.history.goBack()
    }

    render() {
        
        return (
            <div>
                <Header/>
                {this.state.requestingUser == this.state.editablePost.seller_id ?
                <div> 
                <EditPost
                postInfo={this.state.editablePost}
                category={this.state.category}
                name={this.state.itemName}
                price={this.state.itemPrice}
                description={this.state.itemDescription}
                categories={this.props.categories}
                condition={this.state.itemCondition}
                handleChange={this.handleChange}
                getCategory={this.getCategory}
                getItemName={this.getItemName}
                getItemDescription={this.getItemDescription}
                getItemPrice={this.getItemPrice}
                getItemCondition={this.getItemCondition}
                cancel={this.cancel}
                getImage={this.getImage}
                upload={this.state.upload}
                images={this.state.images}
                delete={this.delete}
                catId={this.state.catId}
                update={this.update}
                /> 
                <Footer/>
                </div>
                : 'You are not authorized to edit this listing'}
           </div>   
        );
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(EditPostContainer)