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
            description={e.description}
            time={e.time_posted}
            price={e.price}
            condition={e.condition}
            markAsSold={markAsSold}
            />
        </Link>
        )
    }) : 'Loading'

    return (
        <div>
            <Header color={props.headerStyle}/>
            <div className='listView'>
            
            <div>
                <Categories 
                    categories={props.categories}
                    toggleAnimation={props.toggleAnimation}
                    isAnimating={props.isAnimating}/>
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
                    </div>
                </div>
                <Recent/>
            </div>
        </div>
    </div>
    );
};

export default ListView;