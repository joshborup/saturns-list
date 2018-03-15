import React from 'react';
import Header from '../shared/Header';
import saturn from '../../media/saturn.svg';
import ImageGallery from 'react-image-gallery';
import { Link } from 'react-router-dom';
import '../../../node_modules/react-image-gallery/styles/css/image-gallery.css'
import './posting.css'

const Posts = (props) => {

    const postInfo = props.postInfo ? props.postInfo  :'loading'

    const images = postInfo.image_path ? postInfo.image_path.replace(/\{/g, '').replace(/\}/g, '').split(',') : ''
    
    const dynamObj = images ? images.map((e,i) => {
        return ({
            original: e,
            thumbnail: e,
          })
    }) : null
    

     const showGal = dynamObj != null ? 
     <ImageGallery 
        showPlayButton={false}
        items={dynamObj}
     /> : 'loading'
    return (



        <div>
            <Header 
            />
            <div className='posts'>
                <div>
                    <div className='name-time'>
                        <div>
                            <span className='postedby'>
                               Posted By: </span>
                            <Link to={`/profile/${postInfo.seller_id}`}><span className='username'>{props.seller.username}</span></Link>
                            
                        </div>
                        <div>
                            <span className='item-name'>
                                {postInfo.name}
                            </span>
                        </div>
                        <div>
                            <div className='title-posting-price'>
                                    $ {postInfo.price}
                            </div>
                            <div className='date-posted'>
                               Date Posted: {postInfo.time_posted}
                            </div>
                        </div>
                    </div>
                    <div className='pic-description'>
                        <div className='pic'>
                            {showGal}
                        </div>
                        <div className='description'>
                            <span>Item Description</span>
                            <div className='item-description-info'>
                                <div>
                                   Condition: <span>{postInfo.condition}</span>
                                </div>
                                <div dangerouslySetInnerHTML={{__html: postInfo.description}}>
                                
                                </div>
                                <div className='posting-price'>
                                    $ {postInfo.price}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {props.user ? <a href={`mailto:${props.seller.email}`}><button className='contact-button'>Contact Seller</button> </a>: 'Please Login or Create an Account to Contact the seller'}
            </div>
        </div>
    );
};

export default Posts;