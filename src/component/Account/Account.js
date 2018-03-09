import React from 'react';
import selfie from '../../media/aztronomy.jpg';
import Item from '../ItemList/Item';
import {Link} from 'react-router-dom';
import saturn from '../../media/saturn.svg';
import facebook from '../../media/facebook.svg'
import instagram from '../../media/instagram.svg'

const Account = (props) => {
    const posts = props.posts ? props.posts.map((e, i) =>{
        return (
            
                <Item
                key={i}
                image={e.image_path}
                name={e.name}
                itemId={e.id}
                description={e.description}
                time={e.time_posted}
                price={e.price}
                condition={e.condition}
                user={props.user}
                markAsSold={props.markAsSold}
                isActive={props.isActive}
                />
           
        )
    }) : 'Loading'

    const inactive = props.inactive ? props.inactive.map((e, i) =>{
        return (
        
            <Item
            image={e.image_path}
            key={i}
            name={e.name}
            itemId={e.id}
            description={e.description}
            time={e.time_posted}
            price={e.price}
            condition={e.condition}
            notActive={props.notActive}
            reactivate={props.reactivate}
            deletePost={props.deletePost}
            seller_id={props.user.id}
            />
       
        )
    }) : 'Loading';
    console.log(props.profile);
    return (
        <div className='account'>
            
            <div className='profile-layout'>
                <div className='profile-contact'>
                <h1>{props.user.username}</h1>
                    <div className='image-container'>
                        {props.profile.profile_image !== 'No Info' ? <img src={props.profile.profile_image} /> : <img src={saturn}/>}
                    </div>
                    <div>
                        <Link to='/edit_account'><button className='edit-profile'>Edit Profile</button></Link>
                    </div>
                    <div>
                        <span>
                        About:
                        </span>
                        <div dangerouslySetInnerHTML={{__html: props.profile.description}}>
                                
                        </div>
                    </div>
                    <div className='social-media'>
                        {props.profile.facebook ? <a href={props.profile.facebook}><img src={facebook} /></a>: ''}
                        {props.profile.instagram ? <a href={props.profile.instagram}><img src={instagram} /> </a>: ''}
                    </div>
                    <div>
                        <span>
                            Website: {props.profile.website}
                        </span>
                    </div>
                    <div>
                        <span>
                            Location: {props.user.location}
                        </span>
                    </div>
                    <div>
                        <span>
                            Member Since: {props.user.memberSince}
                        </span>
                    </div>
                </div>
                <div className='account-posts'>
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