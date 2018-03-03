import React, { Component } from 'react';
import Header from '../shared/Header';
import saturn from '../../media/saturn.svg';
import selfie from '../../media/aztronomy.jpg';
import UploadForm from '../AddPost/UploadForm'
import './edit.css';

const CLOUDINARY_UPLOAD_PRESET = 'ahhubrf1';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/saturnslist/upload';

class EditAccount extends Component {
    constructor(props){
        super(props)
        this.state = {
            newImage:'',
            upload: 'profile'
        }
        this.newImage = this.newImage.bind(this);
    }

    newImage(image){
        this.setState({
            newImage: image,
        })
    }

    render(){
        const newImage = this.state.newImage ? <img src={this.state.newImage} /> : this.props.profile.profile_image ? <img src={this.props.profile.profile_image}/> : <img src={saturn}/>
    return (
        <div>
            <Header />
            <div className='edit-account'>
                <h1>
                    Edit Account Page
                </h1>
                <div>
                        {this.props.user.username}
                </div>
                <div className='change-info-container'>
                    <div>
                        <div className='change-image'>
                            <div className='image-container'>
                                {newImage}
                            </div>
                            <UploadForm getImage={this.props.getImage} upload={this.state.upload} newImage={this.newImage}/>
                        </div>
                    </div>
                    <div className='change-description'>
                        <h1>Description</h1>
                        <textarea>{this.props.profile.description}</textarea>
                        
                    </div>
                    <div className='change-other-info'>
                        <h1>other</h1>
                        <div>
                            <span>Website</span>
                            <input value={this.props.profile.website}/>
                        </div>
                        <div>
                            <span>Email</span>
                            <input value={this.props.user.email}/>
                        </div>
                    </div>
                </div>
                <button className='update-submit' onClick={() => this.props.submitUpdate()}>submit</button>
                <button className='update-cancel' onClick={() => this.props.cancel()}>cancel</button>
            </div>
        </div>
    );
    }
};

export default EditAccount;