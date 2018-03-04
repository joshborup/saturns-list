import React, { Component } from 'react';
import EditAccount from './EditAccount';
import axios from 'axios';
import {fetchProfileInfo, updateProfile, fetchUserData} from '../../redux/reducer';
import {connect} from 'react-redux';

class EditAccountContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            image: '',
            description:'',
            website:'',
            email: ''
        }
        this.getImage = this.getImage.bind(this);
        this.submitUpdate = this.submitUpdate.bind(this);
        this.cancel = this.cancel.bind(this);
        this.updateDescription = this.updateDescription.bind(this);
        this.updateWebsite = this.updateWebsite.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
    }

    componentDidMount(){
        const user = this.props.user;
        const profile = this.props.profile;
        this.setState({
            image: profile.profile_image,
            description: profile.description,
            website: profile.website,
            email: user.email
        })
    }

    updateDescription(description){
        this.setState({
            description: description
        })
    }

    updateWebsite(website){
        this.setState({
            website: website
        })
    }

    updateEmail(email){
        this.setState({
            email: email
        })
    }

    getImage(image){
        this.setState({
            image: image
        })
        
    }

    

    submitUpdate(){

         axios.put('/api/update_user_data', {email: this.state.email}).then(user => {
            console.log('update email:', user.data.email)
            this.props.fetchUserData(user.data);
         })
        

        axios.put('/api/update_profile_data', {image: this.state.image, description: this.state.description, website: this.state.website}).then(response => {
            
            this.props.fetchProfileInfo(response.data[0])
            this.props.history.goBack()
        })
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
                    description={this.state.description}
                    website={this.state.website}
                    getImage={this.getImage}
                    image={this.state.image}
                    submitUpdate={this.submitUpdate}
                    cancel={this.cancel}
                    updateWebsite={this.updateWebsite}
                    updateDescription={this.updateDescription}
                    email={this.state.email}
                    updateEmail={this.updateEmail}
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

    fetchProfileInfo: fetchProfileInfo,
    fetchUserData: fetchUserData
}


export default connect(mapStateToProps, mapDispatchToProps)(EditAccountContainer)
