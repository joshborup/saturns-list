const express = require('express');
const app = express();
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const lR = require('./controllers/loginRegister');
const uC = require('./controllers/userController');
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



const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log(`listenning on port: ${port}`))