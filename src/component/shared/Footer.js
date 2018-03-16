import React, { Component } from 'react';
import Contact from './Contact';
import saturn from '../../media/saturn.svg'

export default class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <h1>Saturn's List</h1>
                <div>
                    <Contact/>
                </div>

                <img src={saturn}/>
            </div>
        );
    }
}