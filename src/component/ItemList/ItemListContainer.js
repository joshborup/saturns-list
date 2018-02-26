import React, { Component } from 'react';
import ListView from './ListView';
import './listView.css';


export default class  extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            
                <div>
                    <ListView/>
                </div>
            
        );
    }
}