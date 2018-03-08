import React, { Component } from 'react';
import axios from 'axios';
import telescope from '../../media/telescope.jpg';

export default class Item extends Component {
    constructor(props){
        super(props)
        this.state = {
            seller_id:'',
            seller: ''
        }
    }

    // componentDidMount(){
    //     const seller_id = this.props.seller_id
    //     this.setState({
    //         seller_id: seller_id
    //     })
    //     axios.get(`/api/get_seller_by_id?seller_id=${seller_id}`).then(seller => {
    //         console.log(seller.data[0].username);
    //         this.setState({
    //             seller: seller.data[0].username
    //         })
    //     })
    // }
    

render(){
    const { markAsSold } = this.props

    const cutOffDesc = this.props.description.split(' ').splice(this.props.description.split(' ').length - 15).join(' ') + '...'
    console.log(this.props.description);

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
                <span className='itemPrice'>Price: ${this.props.price} </span>
                <span className='date-posted'>Date Posted: {this.props.time}</span>
            </div>
            <div style={flex}>
                {this.props.isActive ? <button onClick={()=> this.props.markAsSold(this.props.itemId)} className='soldButton'>mark as sold</button> : this.props.notActive ? <button onClick={()=> this.props.reactivate(this.props.itemId)} className='reactivateButton'>re-list</button> : null}
                
            </div>
        </div>
    );
}
};

