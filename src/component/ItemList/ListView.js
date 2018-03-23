import React from 'react';
import Item from './Item';
import Categories from './Categories'
import Recent from './Recently'
import Header from '../shared/Header';
import { Link } from 'react-router-dom';
import Search from 'material-ui/svg-icons/action/search';
import AdminMessage from '../shared/AdminMessage';



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
            itemId={e.id}
            condition={e.condition}
            markAsSold={markAsSold}
            username={e.username}
            hideItems={props.hideItems}
            active={e.active}
            />
        </Link>
        )
    }) : 'Loading'
    const noMoreItems = props.posts.length ? '' : 'You have reached the end';

    console.log()
    return (
        <div>
            <Header color={props.headerStyle}/>
            <div className='listView'>
            
            <div>
            {props.user.adminMessage == false ? <AdminMessage
            closeMessage={props.closeMessage}
            /> : ''}
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
                        <div onKeyPress={e => props.onEnterSubmitSearch(e)} className='desktop-filter'>
                            <div>
                                
                                <input onChange={(e) => props.searchBar(e.target.value)} value={props.searchQuery} placeholder='Search...'/>
                                <Search onClick={() => props.submitSearch()} color='white'/>

                            </div>
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