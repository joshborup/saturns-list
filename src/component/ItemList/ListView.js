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

    // console.log(props.posts.length)
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
                        </div>
                        <div className='desktop-filter'>
                            <button>Price</button>
                            <button>Date Added</button>
                            <button>ascending</button>
                            <button>descending</button>
                        </div>
                        <select className='mobile-filter'>
                            <option>Price</option>
                            <option>Date Added</option>
                            <option>ascending</option>
                            <option>descending</option>
                        </select>
                    </div>
                    <div className='items-column'>
                        {posts}
                        <p>{noMoreItems}</p>
                    </div>
                    <div className='page'>
                        <button onClick={()=> props.prevPage()}>Previous Page</button>
                        <button onClick={()=> props.nextPage()}>Next Page</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    </div>
    );
};

export default ListView;