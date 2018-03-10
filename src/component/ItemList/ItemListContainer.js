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
            isAnimating: true,
            pageCount: 0,
            itemCount: '',
            catId: '',
            priceOrder:true,
            timeOrder: true,
            dateArrange: '',
            priceArrange: ''
        }
       this.toggleAnimation = this.toggleAnimation.bind(this);
       this.selectCategory = this.selectCategory.bind(this);
       this.showAll = this.showAll.bind(this);
       this.nextPage = this.nextPage.bind(this);
       this.prevPage = this.prevPage.bind(this);
       this.reversePosts = this.reversePosts.bind(this);
       this.reversePrice = this.reversePrice.bind(this);
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
        function getItemCount(){
            return axios.get('/api/get_item_count');
        }


        axios.all([getUserData(), getCategories(), getAllPosts(), getItemCount()]).then(axios.spread((user, categories, posts, itemCount)=> {
            
            this.props.fetchCategories(categories.data);
            this.props.fetchUserData(user.data);
            this.setState({
                posts: posts.data,
                itemCount: itemCount.data[0].count
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

      reversePrice(){
        if(this.state.priceOrder){
        var priceLow = [...this.state.posts].sort(function(a, b){
            return a.price - b.price;
        });
           this.setState({
               posts: priceLow,
               priceOrder: false,
               priceArrange: ' Price: Lowest to Highest',
               dateArrange: ''
           })
        }else {
            var priceLow = [...this.state.posts].sort(function(a, b){
                return b.price - a.price;
            });
               this.setState({
                   posts: priceLow,
                   priceOrder: true,
                   priceArrange: ' Price: Highest to Lowest',
                   dateArrange: ''
               })
        }
        console.log(this.state.priceArrange);
      }

      reversePosts(){ 
          console.log()
        if(this.state.timeOrder){
            var time = [...this.state.posts].sort(function(a, b){
                let time1 = new Date(a.time_posted)
                let time2 = new Date(b.time_posted)
                return time1.getTime() - time2.getTime();
            });
               this.setState({
                   posts: time,
                   timeOrder: false,
                   dateArrange: ' Date: Oldest to Newest',
                   priceArrange: ''
               })
            }else {
                var time = [...this.state.posts].sort(function(a, b){
                    let time1 = new Date(a.time_posted)
                    let time2 = new Date(b.time_posted)
                    return time2.getTime() - time1.getTime();
                });
                   this.setState({
                       posts: time,
                       timeOrder: true,
                       dateArrange: ' Date: Newest to Oldest',
                       priceArrange: ''
                   })
            }
        //   this.setState({
        //       posts: this.state.posts.reverse()
        //   })
      }

      selectCategory(num){
        
        function getCatItemCount(){
            return axios.get(`/api/get_cat_item_count?cat_id=${num}`)
        }
        function getPostsByCat(){
            return axios.get(`/api/item_list_by_cat?num=${num}`)
        }
        axios.all([getCatItemCount(), getPostsByCat()]).then(axios.spread((itemCount, posts) => {
            this.setState({
                posts: posts.data,
                isAnimating:true,
                catId: num,
                pageCount:0,
                itemCount: itemCount.data[0].count
            })
            
        })
    
        )}

      nextPage(){
        if(this.state.catId){
            if(this.state.itemCount > this.state.pageCount){
                const page = this.state.pageCount + 10
                this.setState({
                        pageCount: page
                })
                axios.get(`/api/get_all_cats_by_page?pageCount=${page}&cat_id=${this.state.catId}`).then(posts=> {
                    this.setState({
                        posts: posts.data,
                        
                    })
                })
            }   
            
        }   else {
            if(this.state.itemCount > this.state.pageCount){
                const page = this.state.pageCount + 10
                this.setState({
                        pageCount: page
                })
                axios.get(`/api/get_all_posts_by_page?pageCount=${page}`).then(posts => {
                    this.setState({
                        posts: posts.data,
                    })
                })
                
            } 
        }
    }

    prevPage(){
        if(this.state.catId){
            if(this.state.pageCount > 0){
                const page = this.state.pageCount - 10
                this.setState({
                        pageCount: page
                })
                axios.get(`/api/get_all_cats_by_page?pageCount=${page}&cat_id=${this.state.catId}`).then(posts => {
                    this.setState({
                        posts: posts.data,
                        
                    })
                })
                console.log(this.state.pageCount);
            }   
            
        }   else { 
            if(this.state.pageCount > 0) {
                const page = this.state.pageCount - 10
            this.setState({
                    pageCount: page
            })
            axios.get(`/api/get_all_posts_by_page?pageCount=${page}`).then(posts=> {
                this.setState({
                    posts: posts.data,
                    
                })
            })
            }
        }
        
    }

      showAll(){
        axios.get('/api/get_all_posts').then(posts => {
            this.setState({
                posts: posts.data,
                isAnimating:true,
                catId: '',
                pageCount:0
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
                    nextPage={this.nextPage}
                    prevPage={this.prevPage}
                    reversePosts={this.reversePosts}
                    reversePrice={this.reversePrice}
                    dateArrange={this.state.dateArrange}
                    priceArrange={this.state.priceArrange}
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