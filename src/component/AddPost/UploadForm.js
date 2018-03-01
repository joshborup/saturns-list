import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
const CLOUDINARY_UPLOAD_PRESET = 'ahhubrf1';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/saturnslist/upload';

export default class UploadForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            uploadedFile:'',
            uploadedFileCloudinaryUrl: ''
        }
        this.onImageDrop = this.onImageDrop.bind(this);
        
    }

    onImageDrop(files) {
        this.setState({
          uploadedFile: files[0]
        });
    
        this.handleImageUpload(files[0]);
      }

      handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
                            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                            .field('file', file);
    
        upload.end((err, response) => {
          if (err) {
            console.error(err);
          }
    
          if (response.body.secure_url !== '') {
            this.props.getImage(response.body.secure_url)
              response.body.secure_url
          }
        });
      }

    render() {
        return (
            <div className='upload-form'>
            <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop}>
                <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
            </div>
        );
    }
}