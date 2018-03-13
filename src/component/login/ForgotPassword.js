import React from 'react';

const ForgotPassword = (props) => {
    return (
        <div className='forgotPassword-container'>
            <div>
                <div onKeyPress={(e) => props.resetKeyPress(e)}>
                    <div>Forgot password?</div>
                    <h3>Enter the email you registered with</h3>
                    <input className='forgotten-email' onChange={(e)=> props.enterEmailForReset(e.target.value)} value={props.emailForForgotten}/>
                    <span>{props.message}</span>
                    <button onClick={()=> props.resetPasswordButton()} className='submit-button'>Submit</button>
                    <button onClick={()=> props.forgot()} className='forgot'><span>Go Back</span></button>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;