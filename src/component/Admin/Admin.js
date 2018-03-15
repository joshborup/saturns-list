import React from 'react';
import Item from '../ItemList/Item';
import {Link } from 'react-router-dom';
import UserSignUpData from './UserSignUpData';

const Admin = (props) => {

    const posts = props.posts ? props.posts.map((e, i) =>{
        return (
        
            <Item
            key={i}
            name={e.name}
            image={e.image_path}
            description={e.description}
            time={e.time_posted}
            price={e.price}
            condition={e.condition}
            username={e.username}
            itemId={e.id}
            admin={props.admin}
            approvePost={props.approvePost}
            disapproveAndDelete={props.disapproveAndDelete}
            />
        )
    }) : 'Loading'

    return (
        <div className='admin-container'>
            <div>
                <h1>Admin view</h1>
                <div className='awaiting-approval'>
                    <div>
                        <h2>User Stats</h2>
                        <div className='post-count'>
                            <div>
                                <h3>Active Posts</h3>
                                {props.activePosts}
                            </div>
                            <div>
                                <h3>Inactive Posts</h3>
                                {props.inactivePosts}
                            </div>
                        </div>
                        <div className='stats-column'>
                            <UserSignUpData/>
                        </div>
                    </div>
                    <div className='pending-approval-posts'>
                        <h2>Pending posts</h2>
                        {posts}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;