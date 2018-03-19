import React, { Component } from 'react';
import UserCard from './UserCard';
import {Link} from 'react-router-dom';

export default class UserSearch extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        console.log(this.props.usersSearch)
        const userSearch = this.props.usersSearch ? this.props.usersSearch.map((e,i) => {
            return(<Link to={`/profile/${e.id}`}>
                <UserCard 
                username={e.username}
                joined={e.member_since}
                profileImg={e.profile_image}
                count={e.count}
                />
            </Link>)
        }): 'Loading'
        return (
            <div>
                <div className='search-bar-users' onKeyPress={(e) => this.props.submitSearchOnEnter(e)}>
                <span>Search Users</span>
                <input  onChange={(e) => this.props.userSearchBar(e.target.value)} value={this.props.userNameSearch} />
                <button onClick={()=> this.props.submitSearch()}>Search</button>
                </div>
                <div className='wrapped-user-card-container'>
                    {userSearch}
                </div>
            </div>
        );
    }
}