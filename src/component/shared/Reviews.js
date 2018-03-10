import React from 'react';
import './shared.css';

const Reviews = (props) => {
    return (
        <div className='user-reviews'>
                <div>
                    <span>{props.rating}/5</span>
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