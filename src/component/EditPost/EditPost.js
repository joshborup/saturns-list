import React from 'react';
import './editpost.css';
import UploadForm from '../AddPost/UploadForm';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditPost = (props) => {
    const catList = props.categories ?  props.categories.map((el, i) => {
        return (
            <option key={i} value={el.id}>{el.name}</option>
        )
    }) : 'Loading';


    const imagesUploads = props.images ? props.images.map((e,i) => {
        return(
            <div className='edit-image-upload'>
                <img key={i} src={e}/>
                <button onClick={()=>props.delete(i)}>Delete</button>
            </div>
        )
    }) : 'no images yet';

    const displayNone = {
        display: 'none'
    }
    const displayInit = {
        display: 'initial'
    }

    
    return (
       
        <div className='post-padding'>
        <div className='add-post-display'>
            
             <h1>Add a new post</h1>
            <div>
                <div>
                <div className='condition-container'>
                    <div>
                        <span>condition:</span>
                        <select onChange={(e) => props.getItemCondition(e.target.value)} className='options' value={props.condition}>
                            <option value="" selected="selected">Select Condition</option>
                            <option value='New' >New</option>
                            <option value='Like New' >Like New</option>
                            <option value='Excellent' >Excellent</option>
                            <option value='Good' >Good</option>
                            <option value='Fair' >Fair</option>
                            <option value='Poor' >Poor</option>
                        </select>
                    </div>
                    <div>
                        <span>Category</span>
                        <select onChange={(e)=> props.getCategory(e.target.value)} className='options' value={props.catId}>
                            <option value="" selected="selected">Select A Category</option>
                            {catList}
                        </select>
                    </div>
                    <div>
                        <span>Price:</span>
                        <div>
                            $ <input className='pricebox' onChange={(e)=> props.getItemPrice(e.target.value)} type='text' value={props.price}/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='add-post-input'>
                    <span>Item Name:</span>
                    <input onChange={(e)=> props.getItemName(e.target.value)} type='text' value={props.name}/>
                </div>
                <div className='add-post-input item-description-input'>
                    <span>Item Description:</span>
                    {/* <textarea onChange={(e)=> props.getItemDescription(e.target.value)} value={props.itemDescription}/> */}
                    <ReactQuill value={props.description}
                  onChange={props.handleChange} />
                </div>
                <div className='image-uploads'>
                            {imagesUploads}
                </div>
            
                <div className='total-image-uploads'>
                    
                    <div className={props.images.length >= 1 ? 'nodisplay' :'upload-images-container'}>
                       
                        <UploadForm
                        getImage={props.getImage}
                        upload={props.upload}
                        />
                    </div>

                    <div className={props.images.length >= 2 ? 'nodisplay' :'upload-images-container'}>
                        
                        <UploadForm
                        getImage={props.getImage}
                        upload={props.upload}
                        />
                    </div>

                    <div className={props.images.length >= 3 ? 'nodisplay' :'upload-images-container'}>
                        
                        <UploadForm
                        getImage={props.getImage}
                        upload={props.upload}
                        />
                    </div>

                    <div className={props.images.length >= 4 ? 'nodisplay' :'upload-images-container'}>
                        
                        <UploadForm
                        getImage={props.getImage}
                        upload={props.upload}
                        />
                    </div>

                </div>
                <div className='buttonContainer'>
                    <button onClick={() => props.update()}>Update</button>
                    <button onClick={() => props.cancel()}>Cancel</button>
                </div>
            </div>
        </div>
        </div>
        
    );
};

export default EditPost;