import React from 'react';

const Recent = (props) => {

    const catStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        margin: '0 auto 0 0',
        borderRadius: '4px',

    }

    const catTitle = {
        background: 'linear-gradient( 135deg, rgb(48, 48, 51) 10%, #414345 100%)',
        color: 'white',
        borderRadius: '4px 4px 0px 0px',
        padding: '10px',

    }

    return (
        <div style={catStyles} className='viewed-list'>
        <div>
            <div style={catTitle}>
                <span>
                    Recently Viewed
                </span>
            </div>
            <div className='cat-container'>
                
           
            </div>
        </div>
    </div>
    );
};

export default Recent;