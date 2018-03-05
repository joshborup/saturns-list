import React from 'react';
import Header from '../shared/Header';
import saturn from '../../media/saturn.svg';

import './posting.css'

const Posts = (props) => {

    const postInfo = props.postInfo ? props.postInfo  :'loading'

    const images = postInfo.image_path ? postInfo.image_path.replace(/\{/g, '').replace(/\}/g, '').split(',') : console.log('no images to display')


  
    console.log(images)
    return (



        <div>
            <Header />
            <div className='posts'>
                <div>
                    <div className='name-time'>
                        <div>
                        </div>
                        <div>
                            <span>
                                {postInfo.name}
                            </span>
                        </div>
                        <div>
                                Posted: {postInfo.time_posted}
                        </div>
                    </div>
                    <div className='pic-description'>
                        <div className='pic'>
                            {postInfo.image_path ? <img src={images[0]}/> : <img src={saturn}/>}
                            <div className='thumbnails'>
                                {postInfo.image_path ? <img src={images[1]}/> : <img src={saturn}/>}
                                {postInfo.image_path ? <img src={images[2]}/> : <img src={saturn}/>}
                                {postInfo.image_path ? <img src={images[3]}/> : <img src={saturn}/>}
                            </div>
                        </div>
                        <div className='description'>
                            <span>Item Description</span>
                            <div className='item-description-info'>
                                <div>
                                    {postInfo.description}
                                </div>
                                <div className='posting-price'>
                                    $ {postInfo.price}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Posts;