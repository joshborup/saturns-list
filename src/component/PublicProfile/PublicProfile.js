import React from 'react';
import Header from '../shared/Header';
import Item from '../ItemList/Item';
import { Link } from 'react-router-dom';
import './profile.css'

const PublicProfile = (props) => {

    const userPosts = props.posts ? props.posts.map((e, i) =>{
        return (
        <Link to={`/listing/id=${e.id}`}>
            <Item
            key={i}
            name={e.name}
            image={e.image_path}
            description={e.description}
            time={e.time_posted}
            price={e.price}
            condition={e.condition}
            seller_id={e.seller_id}
            hideSeller={props.hideSeller}
            />
        </Link>
        )
    }) : 'Loading'
    console.log(props.seller);
    return (
        <div>
            <Header />
            <div className='profile-container'>
                <div>
                    <h1>{props.seller.username}</h1>
                </div>
                <div className='user-info-container'>
                    <div>
                        <div className='image-container'>
                            <img src={props.sellerInfo.profile_image}/>
                        </div>
                        <div>
                            <span>Member since:</span>
                            <span>
                            {props.seller.member_since}
                            </span>
                        </div>
                        <div>
                            <span className='public-email'>Email:</span>
                            {props.user ? <span>{props.seller.email}</span> : <span>Please <Link to='/account_login'>Login</Link> to see user emails</span>}
                        </div>
                        <div>
                            <span className='public-website'>website:</span>
                            {props.seller.website !== 'No Info' ? <a href={'https://' + props.seller.website}>{props.seller.website}</a> : props.seller.website }
                        </div>
                    </div>
                    <div>
                    <div className='profile-info'>
                        <span>About:</span>
                        <div>{props.sellerInfo.description}</div>
                        <div></div>
                    </div>
                    <div className='active-posts'>
                            <span>Active Posts</span>
                            {userPosts}
                    </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default PublicProfile;