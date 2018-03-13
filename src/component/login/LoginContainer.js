import React, { Component } from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import Register from './Register';
import ForgotPassword from './ForgotPassword';
import { fetchUserData, enterUserName, enterPassword, enterFirstName, enterLastName, enterEmail, enterPhone, enterCity, enterState, enterZip, enterCountry} from '../../redux/reducer';
import axios from 'axios';

class LoginContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            register: false,
            message:'',
            forgotPassword: false,
            emailForForgotten: ''
        }
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.registrationSubmit = this.registrationSubmit.bind(this);
        this.loginKeyPress = this.loginKeyPress.bind(this);
        this.forgot = this.forgot.bind(this);
        this.enterEmailForReset = this.enterEmailForReset.bind(this);
        this.resetPasswordButton = this.resetPasswordButton.bind(this);
    }

    

    loginKeyPress(e){
        if(e.key == 'Enter'){
            axios.post('/login', {username: this.props.username, password: this.props.password}).then((response)=>{
                
                fetchUserData(response)
                if(!response.data.message){
                    window.location.href = response.request.responseURL;
                    }else{
                        this.setState({
                            message: response.data.message
                        })
                    }
            })
        }
    }


    login(){
        axios.post('/login', {username: this.props.username, password: this.props.password}).then((response)=>{
            fetchUserData(response)
            if(!response.data.message){
            window.location.href = response.request.responseURL;
            }else{
                this.setState({
                    message: response.data.message
                })
            }
        }).catch(error => console.log(error));
    }

    registrationSubmit(){
        
        if(this.props.username.length >= 4 && this.props.password.length >= 7 && this.props.firstName && this.props.lastName && this.props.email && this.props.state && this.props.city && this.props.zip && this.props.country){
            axios.post('/register', {
                username: this.props.username,
                password: this.props.password,
                first_name: this.props.firstName,
                last_name: this.props.lastName,
                email: this.props.email,
                state: this.props.state,
                city: this.props.city,
                phone: this.props.phone,
                zip: this.props.zip,
                country: this.props.country
            }).then((response)=>{
                fetchUserData(response)
                window.location.href = response.request.responseURL;
            })
        }else if(this.props.username.length < 4){
            this.setState({
                message: 'username must be atleast 4 characters'
            })
        }else if(this.props.password.length < 7){
            this.setState({
                message: 'password must be atlease 7 characters'
            })
        }else{

            this.setState({
                message: 'please fill out all required fields'
            })
        }

    }

    forgot(){
        if(!this.state.forgotPassword){
        this.setState({
            forgotPassword: true,
            message: ''
        })
        }else {
            this.setState({
                forgotPassword: false,
                message: ''
            })
        }
    }

    resetPasswordButton(){
        axios.put('/api/forgot_password', {email: this.state.emailForForgotten}).then(response => {
            this.setState({
                message: response.data.message
            })
        })
    }

    enterEmailForReset(email){
        this.setState({
            emailForForgotten: email
        })
    }

    register(){
        if(!this.state.register){
        this.setState({
            register: true,
            message: ''
        })
        }else {
            this.setState({
                register:false,
                message: ''
            })
        }
    }

    render() {
        const { username, password, firstName, lastName, email, phone, city, state, zip, country } = this.props
        return (
            <div>
                {this.state.register 
                ? 
                <Register
                register={this.register}
                enterUserName={this.props.enterUserName}
                enterPassword={this.props.enterPassword}
                enterFirst={this.props.enterFirstName}
                enterLast={this.props.enterLastName}
                enterEmail={this.props.enterEmail}
                enterPhone={this.props.enterPhone}
                enterCity={this.props.enterCity}
                enterState={this.props.enterState}
                enterZip={this.props.enterZip}
                enterCountry={this.props.enterCountry}
                username={username}
                password={password}
                firstName={firstName}
                lastName={lastName}
                email={email}
                phone={phone}
                city={city}
                state={state}
                zip={zip}
                country={country}
                submit={this.registrationSubmit}
                register={this.register}
                message={this.state.message}
                />
                :
                this.state.forgotPassword
                ?
                <ForgotPassword
                forgot={this.forgot}
                enterEmailForReset={this.enterEmailForReset}
                emailForForgotten={this.state.emailForForgotten}
                message={this.state.message}
                resetPasswordButton={this.resetPasswordButton}
                />
                :
                <Login
                enterPassword={this.props.enterPassword}
                enterUserName={this.props.enterUserName}
                username={username}
                password={password}
                login={this.login}
                register={this.register}
                loginKeyPress={this.loginKeyPress}
                message={this.state.message}
                forgot={this.forgot}
                />}
            </div>     
        );
    }
}
const mapStateToProps = (state) => {
    return {
        password: state.password,
        username: state.username,
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        phone: state.phone,
        city: state.city,
        state: state.state,
        zip: state.zip,
        country: state.country
    }
}

const mapDispatchToProps = {
    enterUserName: enterUserName,
    enterPassword: enterPassword,
    enterFirstName: enterFirstName,
    enterLastName: enterLastName,
    enterEmail: enterEmail,
    enterPhone: enterPhone,
    enterCity: enterCity,
    enterState: enterState,
    enterZip: enterZip,
    enterCountry: enterCountry,
    fetchUserData: fetchUserData

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
