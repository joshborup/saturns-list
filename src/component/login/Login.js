import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';


const Login = (props) => {

    const flex = {
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'column'
    }

    const loginContainer = {
        height: '100vh',
        width: '100vw',
        display:'flex',
        justifyContent: 'center',
        alignItems:'center',
        overflow:'hidden'
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
                <h1>
                    Saturn's List
                </h1>
                <div onKeyPress={(e)=> props.loginKeyPress(e)} className='login-content-container'style={login}>
                    <div><h2>Login</h2></div>
                    <div>
                        Username:
                        <input onChange={(e) => props.enterUserName(e.target.value)} type='text' className='login-name' value={props.username}ref={(input) => { this.nameInput = input; }} 
          defaultValue="will focus"/>
                    </div>
                    <div>
                        Password:
                        <input onChange={(e) => props.enterPassword(e.target.value)} type='password' className='password' value={props.password}/>
                    </div>
                    <div className='error-message'>
                        {props.message}
                    </div>
                    <div className='button-container'>
                        <button onClick={() => props.login()} style={loginButton} className='login-button'>Login</button>
                        <button onClick={() => props.register()} style={registerButton} className='register-button'>Register</button>
                        
                    </div>
                    <div className='link-container'>
                        <Link className='browse' to='/'><button className='forgot'><span>Browse</span></button></Link>
                        <button onClick={()=> props.forgot()} className='forgot'><span>Forgot Password?</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;