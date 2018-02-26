import React from 'react';
import { Route, Switch} from 'react-router-dom';
import ItemList from './component/ItemList/ItemListContainer';

export default (
    
    <Switch>
        <Route path='/list-view' component={ItemList}/>
    </Switch>

)