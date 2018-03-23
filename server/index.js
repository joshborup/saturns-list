const express = require('express');
const app = express();
const helmet = require('helmet');
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
var pgSession = require('connect-pg-simple')(session);
var pg = require('pg');
const bcrypt = require('bcrypt');
const lR = require('./controllers/loginRegister');
const uC = require('./controllers/userController');
const bI = require('./controllers/basicInfo');
const pC = require('./controllers/postController');
const fP = require('./controllers/forgotPassword');
const aD = require('./controllers/admin');
const nC = require('./controllers/notifications');


require('dotenv').config();

//for production
// app.use( express.static( `${__dirname}/../build` ) );


app.use(helmet());
app.use(bodyParser.json());


massive(process.env.CONNECTION_STRING).then(db => {
    console.log('database connected')
    app.set('db', db)
})

//For Development

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
        // 2 weeks
        maxAge: 60 * 60 * 24 * 14 * 1000
    } 
}))


//for production 
// app.use(session({
//     store: new pgSession({
//         conString:process.env.CONNECTION_STRING
//         }),
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { maxAge: 14 * 24 * 60 * 60 * 1000 }, // 14 days 
    
// }));



app.post('/register', lR.register);
app.post('/login', lR.login);
app.post('/logout', lR.logout);

app.put('/email_verification', lR.emailVerification);

app.get('/api/resend_email', lR.resendEmail);

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
app.get('/api/get_profile_data', uC.getProfileData);

//update user profile data
app.put('/api/update_profile_data', uC.updateProfile);

//update user date
app.put('/api/update_user_data', uC.updateUser);

//get all posts by page
app.get('/api/get_all_posts_by_page', pC.getPostsByPage);

// get item count
app.get('/api/get_item_count', pC.itemCount);

//get all posts by cat 
app.get('/api/get_all_cats_by_page', pC.getPostsByCat);

//get posts by search
app.get('/api/search_posts', pC.searchPosts);

//get users by username
app.get('/api/search_users_by_username', uC.searchUserByName);

app.get('/api/search_count', pC.getSearchCount);

// get cat item count
app.get('/api/get_cat_item_count', pC.getCatItemCount);

// get seller by id
app.get('/api/get_seller_by_id', pC.getSellerId);

//get public profile info
app.get('/api/profile/:id', uC.getPublicProfile);

app.get('/api/get_user_posts_public/:id', pC.getUserPostsById);

app.get('/api/inactive_by_item_id', pC.getInactiveById)

app.post('/api/deleted_posts', pC.moveToDeleted)

app.delete('/api/delete_post_by_id', pC.deletePost);

//update listing
app.put('/api/update_listing', pC.updateListing);

//get user rating info
app.get('/api/user-reviews', uC.getUserRatingInfo);

//leave review 
app.post('/api/leave_review', uC.leaveReview)

//get user search info

app.get('/api/get_user_search', uC.getUserSearch);

//get reviews for account page 

app.get('/api/my-user-reviews', uC.getMyUserReviews);

app.put('/api/forgot_password', fP.forgotPassword);

app.put('/api/reset_password', fP.resetPassword);


//admin api's
app.get('/api/get_unapproved_posts', aD.getUnapproved);

app.put('/api/approve_post', aD.approvePost);

app.delete('/api/disapprove_delete', aD.disapproveAndDelete);

app.get('/api/getUserSignUpData', aD.getUserSignUpInfo);

app.get('/api/active_inactive_count', aD.activeInactiveCount);

app.get('/api/read_message', aD.adminMessage);

app.get('/api/admin_message', aD.getAdminMessage);

app.put('/api/create_new_message', aD.createNewAdminMessage)


//notifications

app.get('/api/notifications', nC.postApproval);

app.get('/api/notifications_count', nC.count);

app.put('/api/dismiss_notification', nC.dismissNotification);

app.get('/api/notifications_review', nC.newReview);

app.put('/api/dismiss_review', nC.dismissReview);

app.get('/api/get_item_count_by_cat', aD.getItemCountByPosts);

app.post('/api/contact_saturn', nC.contactSaturn);

//for production

// const path = require('path')
// app.get('*', (req, res)=>{
//   res.sendFile(path.join(__dirname, '../build/index.html'));
// })

const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log(`listenning on port: ${port}`))