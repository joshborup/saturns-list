import React from 'react';
import './addpost.css';

const AddPost = (props) => {
    return (
        <div className='post-padding'>
        <div className='add-post-display'>
             <h1>Add a new post</h1>
            <div>
                <div>
                    <span>Category</span>
                    <select className='options'>
                        <option>Barlows</option>
                        <option>Binoculars</option>
                        <option>Camera Lenses</option>
                        <option>Cases</option>
                        <option>CCD Camera's</option>
                        <option>Diagonals</option>
                        <option>Digital Cameras</option>
                        <option>Eyepieces</option>
                        <option>Filters</option>
                        <option>Finders</option>
                        <option>Focusers</option>
                        <option>Mount Alt-Az</option>
                        <option>Mounts Equitorial</option>
                        <option>Observatories</option>
                        <option>Solar Filters</option>
                        <option>Spotting Scopes</option>
                        <option>Telescope - Astrograph</option>
                        <option>Telescope - Catadioptric</option>
                        <option>Telescope - Dall Kirkham</option>
                        <option>Telescope - Reflectors</option>
                        <option>Telescope - Refractors</option>
                        <option>Telescope - Ritchey-Chreiten</option>
                        <option>Tripods</option>
                        <option>Misc..</option>
                    </select>
                </div>
                <div className='add-post-input'>
                    <span>Item Name:</span>
                    <input type='text'/>
                </div>
                <div className='add-post-input'>
                    <span>Item Description:</span>
                    <textarea type='text'/>
                </div>
                <div className='add-post-input'>
                    <span>Price:</span>
                    <input type='text'/>
                </div>
                <div>
                    <span>contition:</span>
                    <select className='options'>
                        <option>New</option>
                        <option>Like New</option>
                        <option>Excellent</option>
                        <option>Good</option>
                        <option>Fair</option>
                        <option>Poor</option>
                    </select>
                </div>
                <div>
                    <button>Post</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddPost;