import React, { Component } from 'react';
import Header from '../shared/Header';
import axios from 'axios';
import AddPost from './AddPost';
import { connect } from 'react-redux';

class AddPostToContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            headerStyle: 'black',
        }
    }

    
    render() {
        return (
            <div className='add-post-container'>
                <Header color1={this.state.headerStyle}/>
                {this.props.user ? <AddPost/> : <h1>You Must Log In To Post</h1>}
                {/* <AddPost/> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(AddPostToContainer)