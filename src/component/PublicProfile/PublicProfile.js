import React from 'react';
import Header from '../shared/Header';
import Item from '../ItemList/Item';
import { Link } from 'react-router-dom';
import facebook from '../../media/facebook.svg';
import instagram from '../../media/instagram.svg';
import astrobin from '../../media/astrobin.png';
import Reviews from '../shared/Reviews'
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import ReactStars from 'react-stars';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './profile.css'


const styles = {
    headline: {
      fontSize: 24,
      paddingTop: 16,
      marginBottom: 12,
      fontWeight: 400,
    },
    slide: {
      padding: 10,
    },
  };

  const tabStyle={
      main: {
          width: '100%',
          
      },
      active: {
        background: 'linear-gradient( 135deg, #81FBB8 10%, #28C76F 100%)',
        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.445)'
      },
      inactive: {
        background: 'linear-gradient( 135deg, #FFAA85 10%, #B3315F 100%)',
        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.445)'
      },
      reviews: {
          background: 'linear-gradient(135deg, #667db6, #0082c8, #0082c8)',
          boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.445)'
      }
      
      
  }

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


                    {/* <div className='active-posts'>
                            <span>Active Posts</span>
                            {userPosts}
                    </div>
                    <div>
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
                                        <ReactStars
                                        count={5}
                                        onChange={props.rating}
                                        size={24}
                                        color2={'#ffd700'}
                                        value={props.userRating} 
                                        half={false}
                                        />
                                        
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
                    </div> */}




                            <div className='myTabs'>
                            <Tabs
                            onChange={props.handleSlideChange}
                            value={props.slideIndex}
                            style={tabStyle.main}
                            >
                            <Tab style={tabStyle.active} label="Active Posts" value={0} />
                            <Tab style={tabStyle.reviews} label="User Reviews" value={1} />
                            </Tabs>
                            <SwipeableViews
                            index={props.slideIndex}
                            onChangeIndex={props.handleSlideChange}
                            style={tabStyle.main}
                            >
                            <div style={styles.slide}>
                                <div className='active-posts'>
                                    {userPosts}
                                </div>
                            </div>
                            <div style={styles.slide}>
                            <div>
                                <div className='reviews'>
                                    {reveiwList}
                                </div>
                                <div className='write-review-container'>
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
                                                <ReactStars
                                                count={5}
                                                onChange={props.rating}
                                                size={24}
                                                color2={'#ffd700'}
                                                value={props.userRating} 
                                                half={false}
                                                />
                                                
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
                            </SwipeableViews>
                        </div>




                </div>
            </div>
                
        </div>
            
    </div>
    );
};

export default PublicProfile;