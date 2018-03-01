import React from 'react';
import { Link } from 'react-router-dom';
import './listView.css'

const Categories = (props) => {

    const catStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        borderRadius: '4px',

    }

    const catTitle = {
        background: 'linear-gradient( 135deg, rgb(48, 48, 51) 10%, #414345 100%)',
        color: 'white',
        borderRadius: '4px 4px 0px 0px',
        padding: '10px',

    }

    const catItems = {
        padding: '10px',
    }

   const catlist = props.categories ?  props.categories.map((el, i) => {
       return (

           <li onClick={()=> props.selectCategory(el.id)} key={i}>{el.name}</li>
       )
   }) : 'Loading'
    
    return (
        <div style={catStyles} className='catergories-list'>
            <div>
                <div onClick={() => props.toggleAnimation()} style={catTitle}>
                    <span>
                        Categories
                    </span>
                </div>
                <div style={catItems} className={props.isAnimating ? 'cat-container hide' : 'cat-container show'} >
                    <ul>
                        {catlist}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Categories;