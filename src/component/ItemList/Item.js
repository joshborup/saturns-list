import React from 'react';
import axios from 'axios';
import telescope from '../../media/telescope.jpg'

const Item = (props) => {
    const {markAsSold} = props

    const cutOffDesc = props.description.split(' ').splice(props.description.split(' ').length - 15).join(' ') + '...'
    console.log(cutOffDesc)

    const flex = {
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItem: 'center',
    }

    return (
        <div className='item'>
            <div>
                {props.image ? <img src={props.image.replace(/\{/g, '').replace(/\}/g, '').split(',').shift()}/> : <img src={telescope}/>}
                
            </div>
            <div>
                <span className='item-name'>{props.name}</span>
                <span className='item-description'>{cutOffDesc}</span>
            </div>
            <div>
                <span className='itemPrice'>Price: ${props.price} </span>
                <span className='date-posted'>Date Posted: {props.time}</span>
            </div>
            <div style={flex}>
                {props.isActive ? <button onClick={()=> props.markAsSold(props.itemId)} className='soldButton'>mark as sold</button> : props.notActive ? <button onClick={()=> props.reactivate(props.itemId)} className='reactivateButton'>re-list</button> : null}
                
            </div>
        </div>
    );
};

export default Item