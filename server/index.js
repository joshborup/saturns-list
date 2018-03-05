const express = require('express');
const app = express();
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const lR = require('./controllers/loginRegister');
const uC = require('./controllers/userController');
const bI = require('./controllers/basicInfo');
const pC = require('./controllers/postController');
require('dotenv').config();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('database connected')
    app.set('db', db)
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
        // 1 hour
        maxAge: 60 * 60 * 24 * 14 * 1000
    } 
}))

app.post('/register', lR.register)
app.post('/login', lR.login);
app.post('/logout', lR.logout);

app.get('/api/user-data', uC.getUserData);

//get categories for dropdowns
app.get('/api/categories', bI.getCategories);

//creat new post
app.post('/api/new_item', pC.newPost);
app.get('/api/get_all_posts', pC.getAllPosts);
app.get('/api/get_user_posts', pC.getUserPosts);

//mark as sold endpoint
app.put('/api/mark_sold', pC.markAsSold);

// reactivate listing
app.put('/api/reactivate', pC.reactivate);

//get inactive for profiles
app.get('/api/inactive', pC.getInactive);

//get individual listings
app.get('/api/listing/:id', pC.individualListing);

//get item-list by cat-id 
app.get('/api/item_list_by_cat', pC.getPostByCat);

//get user profile data
app.get('/api/get_profile_data', uC.getProfileData)

//update user profile data
app.put('/api/update_profile_data', uC.updateProfile)

//update user date
app.put('/api/update_user_data', uC.updateUser)



const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log(`listenning on port: ${port}`))