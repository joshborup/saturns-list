import React from 'react';
import './listView.css'

const Categories = (props) => {

    const catStyles = {
        display: 'flex',
        flexDirection: 'column',
        alignItem: 'center',
        background: 'lightgray',
        borderRadius: '4px',

    }

    const catTitle = {
        background: 'linear-gradient( 135deg, rgb(48, 48, 51) 10%, #414345 100%)',
        color: 'white',
        borderRadius: '4px',
        padding: '10px',

    }

    const catItems = {
        padding: '10px',
    }

    return (
        <div style={catStyles} className='catergories-list'>
            <div>
                <div style={catTitle}>
                    <span>
                        Categories
                    </span>
                </div>
                <div style={catItems} className='cat-container'>
                    <ul>
                        <li>Barlows</li>
                        <li>Binoculars</li>
                        <li>Camera Lenses</li>
                        <li>Cases</li>
                        <li>CCD Camera's</li>
                        <li>Diagonals</li>
                        <li>Digital Cameras</li>
                        <li>Eyepieces</li>
                        <li>Filters</li>
                        <li>Finders</li>
                        <li>Focusers</li>
                        <li>Mount Alt-Az</li>
                        <li>Mounts Equitorial</li>
                        <li>Observatories</li>
                        <li>Solar Filters</li>
                        <li>Spotting Scopes</li>
                        <li>Telescope - Astrograph</li>
                        <li>Telescope - Catadioptric</li>
                        <li>Telescope - Dall Kirkham</li>
                        <li>Telescope - Reflectors</li>
                        <li>Telescope - Refractors</li>
                        <li>Telescope - Ritchey-Chreiten</li>
                        <li>Tripods</li>
                        <li>Misc..</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Categories;