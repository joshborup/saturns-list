import React, { Component } from 'react';
import { connect } from 'react-redux';
import Account from './Account';
import Header from '../shared/Header';
import {Link} from 'react-router-dom';
import './account.css'

class AccountContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            headerStyle:'black'
        }
    }
    render() {
        return (
            <div className='account-container'>
                <Header color2={this.state.headerStyle} />
                {
                this.props.user ?  
                <Account
                user={this.props.user}
                color={this.state.headerStyle}
                /> 
                : 
                <h1>You Must <Link to='/login'>Login</Link> or <Link to='/login'>Register</Link> for an account</h1>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(AccountContainer)