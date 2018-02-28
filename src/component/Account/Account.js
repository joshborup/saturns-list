import React from 'react';



const Account = (props) => {
    return (
        <div>
            <h1>{props.user.username}</h1>
        </div>
    );
};

export default Account;