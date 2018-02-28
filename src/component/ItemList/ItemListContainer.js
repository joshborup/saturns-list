import React, { Component } from 'react';
import ListView from './ListView';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchUserData } from '../../redux/reducer';
import './listView.css';


class ItemListContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            headerStyle: 'red'
        }
    }

    componentDidMount(){
        axios.get('/api/user-data').then(user => {
            this.setState({
                user: user.data
            })
            this.props.fetchUserData(user.data);
        })
        
    }
    render() {
        return (
            
                <div>
                    <ListView headerStyle={this.state.headerStyle}/>
                </div>
            
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    fetchUserData: fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemListContainer)