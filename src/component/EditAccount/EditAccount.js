import React, { Component } from 'react';
import Header from '../shared/Header';
import saturn from '../../media/saturn.svg';
import selfie from '../../media/aztronomy.jpg';
import UploadForm from '../AddPost/UploadForm'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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
        const newImage = this.state.newImage ? <img src={this.state.newImage} /> : this.props.profile.profile_image !== 'No Info' ? <img src={this.props.profile.profile_image}/> : <img src={saturn}/>
    return (
        <div>
            <Header />
            <div className='edit-account'>
                <h1>
                    Edit Account Page
                </h1>
                <div className='username'>
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
                        {/* <textarea onChange={(e) => this.props.updateDescription(e.target.value)} value={this.props.description}></textarea> */}
                        <ReactQuill value={this.props.description}
                            onChange={this.props.updateDescription} />
                    </div>
                    <div className='change-other-info'>
                        <h1>other</h1>
                        <div>
                            <span>Website</span>
                            <input onChange={(e) => this.props.updateWebsite(e.target.value)} value={this.props.website}/>
                        </div>
                        <div>
                            <span>Email</span>
                            <input onChange={(e) => this.props.updateEmail(e.target.value)} value={this.props.email}/>
                        </div>
                        <div>
                            <span>Instagram</span>
                            <div className='enter-social-media'>
                            https://www.instagram.com/<input onChange={(e) => this.props.updateInstagram(e.target.value)} value={this.props.instagram}/>
                            </div>
                        </div>
                        <div>
                            <span>Facebook</span>
                            <div className='enter-social-media'>
                            https://www.facebook.com/<input onChange={(e) => this.props.updateFacebook(e.target.value)} value={this.props.facebook}/>
                            </div>
                        </div>
                        <div>
                            <span>Astrobin</span>
                            <div className='enter-social-media'>
                            https://www.astrobin.com/users/<input onChange={(e) => this.props.updateAstrobin(e.target.value)} value={this.props.astrobin}/>
                            </div>
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