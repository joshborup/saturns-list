import React from 'react';
import Item from './Item';
import Categories from './Categories'
import Recent from './Recently'
import Header from '../shared/Header';
import { Link } from 'react-router-dom';


const ListView = (props) => {

    const {markAsSold} = props;
    const posts = props.posts ? props.posts.map((e, i) =>{
        return (
        <Link to={`/listing/id=${e.id}`}>
            <Item
            key={i}
            name={e.name}
            image={e.image_path}
            description={e.description}
            time={e.time_posted}
            price={e.price}
            condition={e.condition}
            markAsSold={markAsSold}
            username={e.username}
            />
        </Link>
        )
    }) : 'Loading'
    const noMoreItems = props.posts.length ? '' : 'You have reached the end'

    
    return (
        <div>
            <Header color={props.headerStyle}/>
            <div className='listView'>
            
            <div>
                <Categories 
                    categories={props.categories}
                    toggleAnimation={props.toggleAnimation}
                    isAnimating={props.isAnimated}
                    selectCategory={props.selectCategory}
                    showAll={props.showAll}
                    />
                <div className='item-container'>
                    <div className='filter'>
                        <div>
                           Sort By:
                           <span>{props.priceArrange}</span>
                           <span>{props.dateArrange}</span>
                        </div>
                        <div className='desktop-filter'>
                            
                            <button onClick={()=>props.reversePrice()}>Price</button>
                            
                            <button onClick={()=>props.reversePosts()}>Date Added</button>
                        </div>
                        <select className='mobile-filter' onChange={(e)=> e.target.value == 'Price' ? props.reversePrice() : props.reversePosts()}>
                            <option>Price</option>
                            <option>Date Added</option>
                        </select>
                    </div>
                    <div className='items-column'>
                        {posts}
                        <p>{noMoreItems}</p>
                    </div>
                    <div className='page'>
                        <button onClick={()=> props.prevPage()}>Previous</button>
                        <button onClick={()=> props.nextPage()}>Next</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
    );
};

export default ListView;