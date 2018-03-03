import React, { Component } from 'react';
import EditAccount from './EditAccount';
import axios from 'axios';
import {fetchProfileInfo, updateProfile} from '../../redux/reducer';
import {connect} from 'react-redux';

class EditAccountContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            image: ''
        }
        this.getImage = this.getImage.bind(this);
        this.submitUpdate = this.submitUpdate.bind(this);
        this.cancel = this.cancel.bind(this);
    }

    getImage(image){
        this.setState({
            image: image
        })
        console.log(image);
    }

    submitUpdate(){
        if(this.state.image){
        axios.put('/api/update_profile_data', {image: this.state.image}).then(response => {
            console.log(response.data[0])
            this.props.fetchProfileInfo(response.data[0])
            this.props.history.goBack()
        })
        }
    }

    cancel(){
        this.props.history.goBack()
    }
    
    render() {
        return (
            <div>
                <EditAccount 
                    user={this.props.user}
                    profile={this.props.profile}
                    getImage={this.getImage}
                    image={this.state.image}
                    submitUpdate={this.submitUpdate}
                    cancel={this.cancel}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        profile: state.profileInfo
    }
}

const mapDispatchToProps = {

    fetchProfileInfo: fetchProfileInfo
}


export default connect(mapStateToProps, mapDispatchToProps)(EditAccountContainer)
