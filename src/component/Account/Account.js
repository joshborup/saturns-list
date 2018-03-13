import React from 'react';
import selfie from '../../media/aztronomy.jpg';
import Item from '../ItemList/Item';
import {Link} from 'react-router-dom';
import saturn from '../../media/saturn.svg';
import facebook from '../../media/facebook.svg';
import instagram from '../../media/instagram.svg';
import astrobin from '../../media/astrobin.png';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import Reviews from '../shared/Reviews';

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


const Account = (props) => {

    const reveiwList = props.userReviews.length > 0 ? props.userReviews.map((e, i) => {
        return (
           <Reviews 
           rating={e.rating}
           review={e.review}
           username={e.username}
           />
        )
    }) : props.user ? 'You have not been reviewed yet' : ''

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
                        {props.profile.astrobin ? <a href={props.profile.astrobin}><img src={astrobin} /> </a>: ''}
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
                {/* <div className='account-posts'> */}
                    {/* <div className='active-posts'>
                        <span>
                            Active Posts
                        </span>
                        <div>
                            {posts}
                        </div>
                    </div> */}
                    {/* <div className='inactive-posts'>
                        <span>
                            Inactive Posts
                        </span>
                        <div>
                            {inactive}
                        </div>
                    </div> */}



                         <div className='myTabs'>
                            <Tabs
                            onChange={props.handleChange}
                            value={props.slideIndex}
                            style={tabStyle.main}
                            >
                            <Tab style={tabStyle.active} label="Active Posts" value={0} />
                            <Tab style={tabStyle.inactive} label="Inactive Posts" value={1} />
                            <Tab style={tabStyle.reviews} label="User Reviews" value={2} />
                            </Tabs>
                            <SwipeableViews
                            index={props.slideIndex}
                            onChangeIndex={props.handleChange}
                            style={tabStyle.main}
                            >
                            <div style={styles.slide}>
                            <div className='active-posts'>
                                <div>
                                    {posts}
                                </div>
                            </div>
                                
                            </div>
                            <div style={styles.slide}>
                                <div className='inactive-posts'>
                                    <div>
                                        {inactive}
                                    </div>
                                </div>
                            </div>
                            <div style={styles.slide}>
                                <div className='inactive-posts'>
                                    <div>
                                        {reveiwList}
                                    </div>
                                </div>
                            </div>
                            </SwipeableViews>
                        </div>



                
            </div>

        </div>
    );
};

export default Account;