import React from 'react';

const UserCard = (props) => {
    return (
        <div className='user-cards'>
            <div>
                {props.profileImg == 'No Info' ? <img src='https://res.cloudinary.com/saturnslist/image/upload/v1520883790/tarae1i8srjcnx7fvgbw.png'/> : <img src={props.profileImg}/>}
        
            </div>
            <span className='user-search-username'>{props.username}</span>
            <div className='joined'>Joined: <span>{props.joined}</span></div>
            <div className='active-posts-search'>Active Posts: <span>{props.count}</span></div>
        </div>
    );
};

export default UserCard;