import React from 'react';
import telescope from '../../media/telescope.jpg'

const Item = () => {
    return (
        <div className='item'>
            <div>
                <img src={telescope}/>
            </div>
            <div>
                <span className='item-name'>Item Name</span>
                <span className='item-description'>This is a short description of the item to be sold</span>
            </div>
            <div>
                <span className='itemPrice'>Price: $45 </span>
                <span className='date-posted'>Date Posted: 4/12/2018</span>
            </div>
        </div>
    );
};

export default Item