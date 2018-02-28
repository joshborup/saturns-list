import React, { Component } from 'react';
import Header from '../shared/Header';
import axios from 'axios';
import AddPost from './AddPost';
import {Link} from 'react-router-dom';
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
                {this.props.user ? <AddPost/> : <h1>You Must <Link to='/login'>Login</Link> or <Link to='/login'>Register</Link> for an account</h1>}
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