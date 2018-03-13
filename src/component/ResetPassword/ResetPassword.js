import React from 'react';

const ResetPassword = (props) => {
    const loginButton = {
        background: 'linear-gradient( 135deg, #70F570 10%, #49C628 100%)',
        color: 'white',
    }
    return (
        <div className='resetPassword'>
            <div>
                <div>
                    <h1>Reset password</h1>
                    <h2>{props.email}</h2>
                    <div>
                        Password:
                        <input onChange={(e) => props.enterNewPassword(e.target.value)} type='password' className='password' value={props.newPassword}/>
                    </div>
                    <div>
                        Re-Enter Password:
                        <input onChange={(e) => props.reEnterNewPassword(e.target.value)} type='password' className='password' value={props.re_enterPassword}/>
                    </div>
                    <div className='error-message'>
                        {props.message}
                    </div>
                    <div className='reset-button-container'>
                        <button onClick={() => props.resetPass()} style={loginButton} className='reset-button'>Reset</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;