import React from 'react';
import selfie from '../../media/aztronomy.jpg';
import Item from '../ItemList/Item';



const Account = (props) => {
    const posts = props.posts ? props.posts.map((e, i) =>{
        return (
            <Item
            key={i}
            name={e.name}
            itemId={e.id}
            description={e.description}
            time={e.time_posted}
            price={e.price}
            condition={e.condition}
            user={props.user}
            markAsSold={props.markAsSold}
            />
        )
    }) : 'Loading'

    const inactive = props.inactive ? props.inactive.map((e, i) =>{
        return (
            <Item
            key={i}
            name={e.name}
            itemId={e.id}
            description={e.description}
            time={e.time_posted}
            price={e.price}
            condition={e.condition}
            />
        )
    }) : 'Loading'

    return (
        <div className='account'>
            
            <div className='profile-layout'>
                <div className='profile-contact'>
                <h1>{props.user.username}</h1>
                    <div>
                        <img src={selfie} />
                    </div>
                    <div>
                        <span>
                            website: www.aztronomy.com
                        </span>
                    </div>
                    <div>
                        <span>
                            Location: {props.user.location}
                        </span>
                    </div>
                    <div>
                        <span>
                            Member since: {props.user.memberSince}
                        </span>
                    </div>
                </div>
                <div>
                    <div className='active-posts'>
                        <span>
                            Active Posts
                        </span>
                        <div>
                            {posts}
                        </div>
                    </div>
                    <div className='inactive-posts'>
                        <span>
                            Inactive Posts
                        </span>
                        <div>
                            {inactive}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Account;