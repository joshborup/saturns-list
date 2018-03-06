import React, { Component } from 'react';
import ListView from './ListView';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchUserData, fetchCategories, fetchProfileInfo } from '../../redux/reducer';
import './listView.css';
import Categories from './Categories';


class ItemListContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            headerStyle: 'orange',
            posts:'',
            isAnimating: true
        }
       this.toggleAnimation = this.toggleAnimation.bind(this);
       this.selectCategory = this.selectCategory.bind(this);
       this.showAll = this.showAll.bind(this);
    }

    componentDidMount(){
        function getUserData(){
            return axios.get('/api/user-data');
        }
        function getCategories(){
            return axios.get('/api/categories');
        }

        function getAllPosts(){
            return axios.get('/api/get_all_posts');
        }
        

        axios.all([getUserData(), getCategories(), getAllPosts()]).then(axios.spread((user, categories, posts)=> {
            
            this.props.fetchCategories(categories.data);
            this.props.fetchUserData(user.data);
            this.setState({
                posts: posts.data
            })
        }))
        axios.get('/api/get_profile_data').then(profile => {
            this.props.fetchProfileInfo(profile.data[0])
        });
        
    }

    toggleAnimation(){
            if(!this.state.isAnimating){
            this.setState({
                isAnimating: true
            })
        }else{
            this.setState({
            isAnimating: false
            })
        }
        
      }

      selectCategory(num){
        
        axios.get(`/api/item_list_by_cat?num=${num}`).then(posts=> {
            
            this.setState({
                posts: posts.data,
                isAnimating:true
            })
        })

    
      }

      showAll(){
        axios.get('/api/get_all_posts').then(posts => {
            this.setState({
                posts: posts.data,
                isAnimating:true
            })
        })
      }


    render() {
        return (
            
                <div>
                    <ListView 
                    headerStyle={this.state.headerStyle}
                    categories={this.props.categories}
                    posts={this.state.posts}
                    toggleAnimation={this.toggleAnimation}
                    isAnimated={this.state.isAnimating}
                    selectCategory={this.selectCategory}
                    showAll={this.showAll}
                    />
                </div>
            
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user,
        categories: state.categories,
        profile: state.profileInfo
    }
}

const mapDispatchToProps = {
    fetchUserData: fetchUserData,
    fetchCategories: fetchCategories,
    fetchProfileInfo: fetchProfileInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListContainer)