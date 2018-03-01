import React from 'react';
import axios from 'axios';
import telescope from '../../media/telescope.jpg'

const Item = (props) => {
    const {markAsSold} = props
    return (
        <div className='item'>
            <div>
                <img src={telescope}/>
            </div>
            <div>
                <span className='item-name'>{props.name}</span>
                <span className='item-description'>{props.description}</span>
            </div>
            <div>
                <span className='itemPrice'>Price: ${props.price} </span>
                <span className='date-posted'>Date Posted: {props.time}</span>
            </div>
            {props.user ? <button onClick={()=> props.markAsSold(props.itemId)} className='soldButton'>mark as sold</button>:null}
        </div>
    );
};

export default Item