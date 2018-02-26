import React from 'react';
import telescope from '../../media/telescope.jpg'

const Item = () => {
    return (
        <div className='item'>
            <div>
                <img src={telescope}/>
            </div>
            <div>
                item Name
            </div>

        </div>
    );
};

export default Item