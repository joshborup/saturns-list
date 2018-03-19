import React from 'react';

const NewReview = (props) => {
        
    if(window.innerWidth < 991){
       var font_size = '12px'
    }else{
       var font_size = '16px'
    }

    const flex = {
        display:{
            display: 'flex',
            justifyContent:'space-between',
            alignItems:'center'
        },
        textDec: {
            textDecoration:'none',
            fontSize: font_size,
            color: 'black'
        }
    }

    const buttonStyle = {
        height: '30px',
        background: 'linear-gradient( 135deg, #FCCF31 10%, #F55555 100%)',
        color: 'white',
        borderRadius: '2px',
        border: 'none',
        boxShadow: '0px 1px 5px rgba(0, 0, 0, 0.445)',
        textShadow:  '1px 1px 2px rgba(0, 0, 0, 1)',
        cursor:'pointer'
    }

    

    return (
        <div className='alert-text'>
            <div style={flex.display}>
                <a className='alert-text-size' style={flex.textDec} href='/account'>
                    New Review by: {props.reviewer}
                </a>
                <button style={buttonStyle}  onClick={() => props.dismissReviewNotifications(props.id)}>Dismiss</button>
            </div>
        </div>
    );
};

export default NewReview;