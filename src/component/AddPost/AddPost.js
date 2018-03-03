import React from 'react';
import './addpost.css';
import UploadForm from './UploadForm';

const AddPost = (props) => {

    const catList = props.categories ?  props.categories.map((el, i) => {
        return (
            <option key={i} value={el.id}>{el.name}</option>
        )
    }) : 'Loading';

    const imagesUploads = props.images ? props.images.map((e,i) => {
        return(
            <img key={i} src={e}/>
        )
    }) : 'no images yet';
    
    return (
        <div className='post-padding'>
        <div className='add-post-display'>
             <h1>Add a new post</h1>
            <div>
                <div>
                    <span>Category</span>
                    <select onChange={(e)=> props.getCategory(e.target.value)} className='options'>
                        <option value="" selected="selected">Select A Category</option>
                        {catList}
                    </select>
                </div>
                <div className='add-post-input'>
                    <span>Item Name:</span>
                    <input onChange={(e)=> props.getItemName(e.target.value)} type='text' value={props.itemName}/>
                </div>
                <div className='add-post-input'>
                    <span>Item Description:</span>
                    <textarea onChange={(e)=> props.getItemDescription(e.target.value)} value={props.itemDescription}/>
                </div>
                <div className='add-post-input price-condition'>
                    <div>
                        <span>Price:</span>
                        <div>
                            $ <input onChange={(e)=> props.getItemPrice(e.target.value)} type='text' value={props.itemPrice}/>
                        </div>
                    </div>
                    <div>
                        <span>condition:</span>
                        <select onChange={(e) => props.getItemCondition(e.target.value)} className='options'>
                            <option value="" selected="selected">Select Condition</option>
                            <option value='New' >New</option>
                            <option value='Like New' >Like New</option>
                            <option value='Excellent' >Excellent</option>
                            <option value='Good' >Good</option>
                            <option value='Fair' >Fair</option>
                            <option value='Poor' >Poor</option>
                        </select>
                    </div>
                    
                </div>
                    <div className='upload-images-container'>
                        <div className='image-uploads'>
                            {imagesUploads}
                        </div>
                        <UploadForm 
                        getImage={props.getImage}
                        upload={props.upload}
                        />
                    </div>
                <div>
                    <button onClick={() => props.post()}>Post</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AddPost;