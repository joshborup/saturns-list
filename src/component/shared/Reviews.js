import React from 'react';
import ReactStars from 'react-stars'
import './shared.css';

const Reviews = (props) => {
    return (
        <div className='user-reviews'>
                <div>
                    
                    <span><ReactStars
                                    count={5}
                                    size={24}
                                    edit={false}
                                    color2={'#ffd700'}
                                    value={props.rating} 
                                    half={false}
                                    /></span>
                    <span>Review by: {props.username}</span>
                </div>
                <div dangerouslySetInnerHTML={{__html: props.review}}>
                                
                </div>
                <div>
                </div>

            </div>
    );
};

export default Reviews;