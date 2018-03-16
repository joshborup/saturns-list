import React from 'react';
import { Link } from 'react-router-dom';
import DownArrow from 'material-ui/svg-icons/navigation/arrow-drop-down-circle.js'
import './listView.css'

const Categories = (props) => {

    const catStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        borderRadius: '2px',

    }

    const catTitle = {
    
        background: 'radial-gradient( #6E6E6E, #2c3e50)',
        color: 'white',
        borderTopRightRadius: '2px',
        borderTopLeftRadius: '2px',
        padding: '12.5px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItem: 'center',
        textAlign: 'center'
        
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
                    <span className={props.isAnimating ? 'down-arrow' : 'up-arrow'} > <DownArrow color='white'/> </span>
                    <span>
                        Categories
                    </span>
                    <span className={props.isAnimating ? 'down-arrow' : 'up-arrow'}  > <DownArrow color='white'/> </span>
                </div>
                <div style={catItems} className={props.isAnimating ? 'cat-container hide' : 'cat-container show'} >
                    <ul>
                        <li onClick={()=> props.showAll()} >All</li>
                        {catlist}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Categories;