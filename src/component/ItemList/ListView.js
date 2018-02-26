import React from 'react';
import Item from './Item';

const ListView = () => {
    return (
        <div className='listView'>
            <div>
                <div className='item-container'>
                    <div className='filter'>
                        <div>
                           Sort By:
                        </div>
                        <div>
                            <button>Price</button>
                            <button>Date Added</button>
                            <button>ascending</button>
                            <button>descending</button>
                        </div>
                    </div>
                    <div className='items-column'>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListView;