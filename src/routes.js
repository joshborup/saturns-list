import React from 'react';
import { Route, Switch} from 'react-router-dom';
import ItemList from './component/ItemList/ItemListContainer';
import LoginContainer from './component/login/LoginContainer';
import AddPostContainer from './component/AddPost/AddPostContainer';
import AccountContainer from './component/Account/AccountContainer';
import PostsContainer from './component/postings/PostsContainer';
import EditAccountContainer from './component/EditAccount/EditAccountContainer';
import PublicProfileContainer from './component/PublicProfile/PublicProfileContainer';
import EditPostContainer from './component/EditPost/EditPostContainer';
import ResetPasswordContainer from './component/ResetPassword/ResetPasswordContainer';
import AdminContainer from './component/Admin/AdminContainer';
import Footer from './component/shared/Footer';
import UserSearchContainer from './component/UserSearch/UserSearchContainer'


export default (
    
    <Switch>
        <Route exact path='/' component={ItemList}/>
        <Route path='/account_login' component={LoginContainer}/>
        <Route path='/add_post' component={AddPostContainer}/>
        <Route path='/account' component={AccountContainer}/>
        <Route path='/listing/:id' component={PostsContainer}/>
        <Route path='/edit_account' component={EditAccountContainer}/>
        <Route path='/profile/:id' component={PublicProfileContainer}/>
        <Route path='/edit_post/:id' component={EditPostContainer} />
        <Route path='/reset_password' component={ResetPasswordContainer}/>
        <Route path='/saturn_admin' component={AdminContainer}/>
        <Route path='/search_users' component={UserSearchContainer}/>
    </Switch>

)