import React, { Component } from 'react';
import Login from './Login';
import { connect } from 'react-redux';
import Register from './Register'
import { fetchUserData, enterUserName, enterPassword, enterFirstName, enterLastName, enterEmail, enterPhone, enterCity, enterState, enterZip, enterCountry} from '../../redux/reducer';
import axios from 'axios';

class LoginContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            register: false,
            message:null
        }
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.registrationSubmit = this.registrationSubmit.bind(this);
        this.loginKeyPress = this.loginKeyPress.bind(this);
    }

    loginKeyPress(e){
        if(e.key == 'Enter'){
            axios.post('/login', {username: this.props.username, password: this.props.password}).then((response)=>{
                console.log(response)
                fetchUserData(response)
                window.location.href = response.request.responseURL;
            })
        }
    }


    login(){
        axios.post('/login', {username: this.props.username, password: this.props.password}).then((response)=>{
            console.log(response)
            fetchUserData(response)
            window.location.href = response.request.responseURL;
        })
    }

    registrationSubmit(){
        console.log(this.props.password, this.props.username, this.props.firstName, this.props.lastName, this.props.email, this.props.state, this.props.city, this.state.zip, this.state.country);
        if(this.props.username && this.props.password && this.props.firstName && this.props.lastName && this.props.email && this.props.state && this.props.city && this.props.zip && this.props.country){
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
                console.log(response)
                fetchUserData(response)
                window.location.href = response.request.responseURL;
            })
        }else(
            this.setState({message: 'please fill out all required fields'})
        )
    }

    register(){
        if(!this.state.register){
        this.setState({
            register: true
        })
        }else {
            this.setState({
                register:false
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
                <Login
                enterPassword={this.props.enterPassword}
                enterUserName={this.props.enterUserName}
                username={username}
                password={password}
                login={this.login}
                register={this.register}
                loginKeyPress={this.loginKeyPress}
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
