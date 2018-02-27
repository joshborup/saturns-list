const express = require('express');
const app = express();
const massive = require('massive');
const bodyParser = require('body-parser');
const session = require('express-session');
const bcrypt = require('bcrypt');
const lR = require('./controllers/loginRegister');
require('dotenv').config();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('database connected')
    app.set('db', db)
})

app.use(session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
        // 1 hour
        maxAge: 60 * 60 
    } 
}))

app.post('/register', lR.register)
app.post('/login', lR.login);



const port = process.env.PORT || 4000;
app.listen(port, ()=> console.log(`listenning on port: ${port}`))