import React, { Component } from 'react';
import Header from '../shared/Header'
import UserSearch from './UserSearch';
import Footer from '../shared/Footer'
import axios from 'axios';
import './userSearch.css';

export default class UserSearchContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            users:'',
            userNameSearch: '',
            headerStyle:'orange'

        }
        this.userSearchBar = this.userSearchBar.bind(this);
        this.submitSearch = this.submitSearch.bind(this);
        this.submitSearchOnEnter = this.submitSearchOnEnter.bind(this);
    }

    componentDidMount(){
        axios.get('/api/get_user_search').then(users => {
            
            this.setState({
                users: users.data
            })
        })
    }

    userSearchBar(value){
        this.setState({
            userNameSearch: value
        })
    }

    submitSearch(){
        
        axios.get(`/api/search_users_by_username?username=${this.state.userNameSearch}`).then(users => {
            
            this.setState({
                users: users.data
            })
        })
    }

    submitSearchOnEnter(e){
        if(e.key == 'Enter'){
            axios.get(`/api/search_users_by_username?username=${this.state.userNameSearch}`).then(users => {
            
                this.setState({
                    users: users.data
                })
            })
        }
    }

    render() {
        return (
            <div>
                <Header color3={this.state.headerStyle}/>
                <div className='user-search-container'>
                    <UserSearch
                    usersSearch={this.state.users}
                    userSearchBar={this.userSearchBar}
                    userNameSearch={this.state.userNameSearch}
                    submitSearch={this.submitSearch}
                    submitSearchOnEnter={this.submitSearchOnEnter}
                    />
                </div>
                <Footer/>
            </div>
        );
    }
}