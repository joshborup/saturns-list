import React from 'react';
import Header from '../shared/Header';
import Item from '../ItemList/Item';
import { Link } from 'react-router-dom';
import facebook from '../../media/facebook.svg';
import instagram from '../../media/instagram.svg';
import astrobin from '../../media/astrobin.png';
import Reviews from '../shared/Reviews'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './profile.css'

const PublicProfile = (props) => {

    const hasReviewed = props.userReviews.filter(e => { 
        if(e.reviewer_id == props.user.id){
        return true;
        }
    })

    const reveiwList = props.userReviews.length > 0 ? props.userReviews.map((e, i) => {
        return (
           <Reviews 
           rating={e.rating}
           review={e.review}
           username={e.username}
           />
        )
    }) : props.user ? 'There are no reviews yet for this user, be the first to leave a review' : ''

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
                        <div className='social-media'>
                            {props.sellerInfo.facebook ? <a href={props.sellerInfo.facebook}><img src={facebook} /></a>: ''}
                            {props.sellerInfo.instagram ? <a href={props.sellerInfo.instagram}><img src={instagram} /> </a>: ''}
                            {props.sellerInfo.astrobin ? <a href={props.sellerInfo.astrobin}><img src={astrobin} /> </a>: ''}
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
                        <div dangerouslySetInnerHTML={{__html: props.sellerInfo.description}}>
                                
                        </div>
                        <div></div>
                    </div>
                    <div className='active-posts'>
                            <span>Active Posts</span>
                            {userPosts}
                    </div>
                    <div className='reviews'>
                        <span>
                            User Reviews
                        </span>
                        {reveiwList}
                    </div>
                    <div>
                        {
                        props.user && props.user.id != props.sellerInfo.id 
                        ?
                         hasReviewed.length == 0
                        ? 
                        <div className='write-review'>
                            <span>Write Review</span>
                            <div>
                                <div>
                                    <span>Rate User</span>
                                    <input onChange={(e) => props.rating(e.target.value)} value={props.userRating}/>
                                </div>
                                <div>
                                    <ReactQuill value={props.review}
                                    onChange={props.handleChange} />
                                </div>
                            </div>
                            <button onClick={()=> props.submitReview()}>Submit</button>
                        </div>
                        
                        : 
                        'You have already reviewed this user'
                        : 
                        props.user.id == props.sellerInfo.id 
                        ?
                        'You cant review youself'
                        :
                        'You must log in to leave a review'
                        }
                    </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    );
};

export default PublicProfile;