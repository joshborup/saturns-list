import React from 'react';
import Item from '../ItemList/Item';

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
            />
        )
    }) : 'Loading'

    return (
        <div className='admin-container'>
            <div>
                <h1>Admin view</h1>
                <div className='awaiting-approval'>
                    {posts}
                </div>
            </div>
        </div>
    );
};

export default Admin;