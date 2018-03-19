import React, {Component}from 'react';
import ReactStars from 'react-stars';
import {Link} from 'react-router-dom';
import './shared.css';

export default class Reviews extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
    return (
        <div className='user-reviews'>
                <div>
                    
                    <span><ReactStars
                                    count={5}
                                    size={24}
                                    edit={false}
                                    color2={'#ffd700'}
                                    value={this.props.rating} 
                                    half={false}
                                    /></span>
                    <span>Review by: {this.props.username}</span>
                </div>
                <div dangerouslySetInnerHTML={{__html: this.props.review}}>
                                
                </div>
                <div>
                </div>

            </div>
    );
    }
}

