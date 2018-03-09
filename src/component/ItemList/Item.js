import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import telescope from '../../media/telescope.jpg';

export default class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            seller_id:'',
            seller: ''
        }
        
    }

   

render(){
    const { markAsSold } = this.props

    var stripedHtml = this.props.description.replace(/<[^>]+>/g, '');

    const cutOffDesc = stripedHtml.split(' ').splice(stripedHtml.split(' ').length - 15).join(' ') + '...'
    console.log(this.props.seller_id, this.props.itemId);

    

    const flex = {
        display:'flex',
        flexDirection:'column',
        justifyContent: 'center',
        alignItem: 'center',
    }

    return (
        <div className='item'>
            <div>
                {this.props.image ? <img src={this.props.image.replace(/\{/g, '').replace(/\}/g, '').split(',').shift()}/> : <img src={telescope}/>}
                
            </div>
            <div>
                <span className='item-name'>{this.props.name}</span>
                <span className='item-description'>{cutOffDesc}</span>

                {this.props.hideSeller ? '' : this.props.username ? <span className='item-posted-by'>sold by: {this.props.username}</span> : ''}
            </div>
            <div>
                <span className='itemPrice'>Price: <span>${this.props.price} </span></span>
                <span className='date-posted'>Date Posted: {this.props.time}</span>
            </div>
            <div style={flex}>
                {this.props.isActive ? <button onClick={()=> this.props.markAsSold(this.props.itemId)} className='soldButton'>mark as sold</button> : this.props.notActive ? <button onClick={()=> this.props.reactivate(this.props.itemId)} className='reactivateButton'>re-list</button> : null}
                
                {this.props.isActive ? <Link to={`/edit_post/${this.props.itemId}`}><button className='reactivateButton'>Edit Listing</button></Link> : this.props.notActive ? <button onClick={()=> this.props.deletePost(this.props.itemId, this.props.seller_id)} className='soldButton'>Delete</button> : null}
            </div>
        </div>
    );
}
};

