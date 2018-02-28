import React from 'react';
import { Route, Switch} from 'react-router-dom';
import ItemList from './component/ItemList/ItemListContainer';
import LoginContainer from './component/login/LoginContainer';
import AddPostContainer from './component/AddPost/AddPostContainer';
import AccountContainer from './component/Account/AccountContainer';

export default (
    
    <Switch>
        <Route exact path='/' component={ItemList}/>
        <Route path='/account_login' component={LoginContainer}/>
        <Route path='/add_post' component={AddPostContainer}/>
        <Route path='/account' component={AccountContainer}/>
    </Switch>

)