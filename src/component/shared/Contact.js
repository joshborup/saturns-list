import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import ReactQuill from 'react-quill';
import axios from 'axios';
import 'react-quill/dist/quill.snow.css';
import { transparent } from 'material-ui/styles/colors';

export default class Contact extends Component {
    constructor(props){
        super(props)
        this.state = {
            open: false,
            message:'',
            title: 'Question',
            email:'',
            errorMessage:'',
            success:''
          };

          this.updateMessage = this.updateMessage.bind(this);
          this.updateTitle = this.updateTitle.bind(this);
          this.updateEmail = this.updateEmail.bind(this);
          this.submit = this.submit.bind(this)
    }
    
    
      handleOpen = () => {
        this.setState({open: true});
      };
    
      handleClose = () => {
        this.setState({
            open: false,
            errorMessage: '',
            success: ''
        });
      };

      updateMessage(message){
        this.setState({
            message: message
        })
      };

      updateTitle(title){
          this.setState({
              title: title
          })
      }

      updateEmail(email){
        this.setState({
            email: email
        })
    }

    submit(){
        if(this.state.email){
            axios.post('/api/contact_saturn', {title: this.state.title, contact: this.state.email, message: this.state.message}).then((response)=>{
                console.log(response);
                this.setState({
                    success: 'Your message was sent successfully!'
                })
                setTimeout(() => {
                    this.setState({
                        message:'',
                        title: 'Question',
                        email:'',
                        open: false
                    })
                  }, 2000)
            })
        }else{
            this.setState({
                errorMessage: 'You must put a contact email'
            })
        }
    }
    
      render() {
        const actions = [
          <FlatButton
            label="Cancel"
            primary={true}
            onClick={this.handleClose}
          />,
          <FlatButton
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onClick={this.submit}
          />,
        ];

        const style = {
            background: 'rgb(248, 248, 248)',
            borderRadius:'2px'
        }

        const styleButton = {
            background:'transparent',
            color:'white',
            border:'none',
            fontSize: '14px',
            fontFamily:'Raleway'
        }

        const transparent = {
            backgroundColor: 'transparent',
            color: 'white',
            boxShadow:'none'
        }

    
        return (
          <div>
            <RaisedButton style={transparent} buttonStyle={styleButton} labelStyle={transparent} backgroundColor='transparent' label="Contact" onClick={this.handleOpen} />
            <Dialog
              title="Contact Saturn's List"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
              contentClassName="contact-us"
            > 
                <div className='input-title'>
                    <span>Title</span>
                    <input onChange={(e) => this.updateTitle(e.target.value)} value={this.state.title}/>
                </div>
                <div className='input-email'>
                    <div>
                        <span>Contact Email</span>
                        <span>(Required)</span>
                    </div>
                    <input onChange={(e) => this.updateEmail(e.target.value)} value={this.state.email}/>
                </div>
                <div className='input-message'>
                    <ReactQuill
                    value={this.state.message}
                    onChange={this.updateMessage} 
                    style={style}
                    /> 
                </div> 
                <div className='error-message'>
                    {this.state.errorMessage}
                </div>
                <div className='success-message'>
                    {this.state.success}
                </div>

            </Dialog>
          </div>
        );
      }
    }
