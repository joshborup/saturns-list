import React from 'react';
import {Link} from 'react-router-dom';
import StatesDropDown from './StatesDropDown';
import CountryDropDown from './CountryDropDown';

const Register = (props) => {
    const flex = {
        display:'flex',
        justifyContent: 'center',
        alignItems:'center'
    }

    const loginContainer = {
        height: '100vh',
        width: '100vw',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        
        }

    const login = {
        width: '100%',
        padding: '20px',
        maxWidth: '500px',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'column'
    }

    const loginButton = {
        background: 'linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%)',
        color: 'white',
    }

    const registerButton = {
        background: 'linear-gradient( 135deg, #70F570 10%, #49C628 100%)',
        color: 'white',
    }
   

    return (
        <div className='login' style={loginContainer}>
            <div style={flex}>
                <div className='login-content-container'style={login}>
                    <div><h1>Register</h1></div>
                    <div id='registration-container'>
                        <div className='first-last-row'>
                            <div>
                                Username:
                                <input onChange={(e) => props.enterUserName(e.target.value)} type='text' className='register-input' value={props.username}/>
                            </div>
                            <div>
                                Password:
                                <input onChange={(e) => props.enterPassword(e.target.value)} type='password' className='register-input' value={props.password}/>
                            </div>
                        </div>
                        <div className='first-last-row'>
                            <div>
                                First Name:
                                <input onChange={(e) => props.enterFirst(e.target.value)} type='text' className='register-input' value={props.firstName}/>
                            </div>
                            <div>
                                Last Name:
                                <input onChange={(e) => props.enterLast(e.target.value)} type='text' className='register-input' value={props.lastName}/>
                            </div>
                        </div>
                        <div className='email-phone-row'>
                            <div>
                                Email:
                                <input onChange={(e) => props.enterEmail(e.target.value)} type='email' className='register-input' value={props.email}/>
                            </div>
                            <div>
                                Phone:
                                <input onChange={(e) => props.enterPhone(e.target.value)} type='number' className='register-input' value={props.phone}/>
                            </div>
                        </div>
                        <div className='city-state-row'>
                            <div>
                                City:
                                <input onChange={(e) => props.enterCity(e.target.value)} type='text' className='register-input' value={props.city} autocomplete='on'/>
                            </div>
                            <div>
                                State:
                                <StatesDropDown enterState={props.enterState} />
                            </div>
                        </div>
                        <div className='zip-country-row'>
                            <div>
                                zip:
                                <input onChange={(e) => props.enterZip(e.target.value)} type='text' className='register-input' value={props.zip}/>
                            </div>
                            <div>
                                country:
                                <CountryDropDown enterCountry={props.enterCountry}/>
                            </div>
                        </div>
                        <div className='button-container'>
                            <div className='error-message'>
                                {props.message}
                            </div>
                            
                            <button onClick={() => props.submit()} className='submit-button'>Submit</button>
                            <span onClick={() => props.register()}  className='go-back-button'>Go Back</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Register;