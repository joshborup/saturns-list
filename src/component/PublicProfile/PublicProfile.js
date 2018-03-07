import React from 'react';
import Header from '../shared/Header';
import './profile.css'

const PublicProfile = (props) => {
    return (
        <div>
            <Header />
            <div className='profile-container'>
                <h1>{props.seller}</h1>
                <div className='user-info-container'>
                    <div className='profle-image'>
                        <img src={props.sellerInfo.profile_image}/>
                    </div>
                    <div className='profile-info'>
                        <h1>hello</h1>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default PublicProfile;