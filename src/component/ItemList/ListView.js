import React from 'react';
import Item from './Item';
import Categories from './Categories'
import Recent from './Recently'
import Header from '../shared/Header';
import { Link } from 'react-router-dom';


const ListView = (props) => {
    return (
        <div>
            <Header color={props.headerStyle}/>
            <div className='listView'>
            
            <div>
                <Categories/>
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
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </div>
                <Recent/>
            </div>
        </div>
    </div>
    );
};

export default ListView;