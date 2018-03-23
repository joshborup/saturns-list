const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
module.exports = {
    register: (req, res)=> {
        //setting db name variable
        const db = req.app.get('db');
        //deconstructing username and password
        const { first_name, last_name, username, password, email, phone, zip, city, state, country } = req.body;
        const member_since = Date().split(' ').splice(1, 3).join(' ');
        const verification_link = Math.random().toString(36).substring(2);
        const random_reset_string = Math.random().toString(36).substring(2);
        //salt for hashing password
        const saltRounds = 12;
        bcrypt.hash(password, saltRounds).then(hashedPassword => {
            db.create_user([first_name, last_name, username, hashedPassword, email, phone, zip, city, state, country, member_since, random_reset_string, false, verification_link]).then(response =>{
                //send verificartion email for posting

                var transporter = nodemailer.createTransport({
                    service: 'gmail',
                    auth: {
                           user: 'no.reply.saturns.list@gmail.com',
                           pass: process.env.EMAIL_PASSWORD
                       }
                   });
                
                const mailOptions = {
                    from: 'no.reply.saturns.list@gmail.com', // sender address
                    to: response[0].email, // list of receivers
                    subject: 'Verify Email', // Subject line
                    html: `<body style='text-align: center; background-color:#F1F2F4; width:100%; padding: 40px 0px'>
                        <div>
                            <img style='margin: 10px auto;' src='https://res.cloudinary.com/saturnslist/image/upload/v1520963194/saturn.png'/>
                        <div>
                        <div style='background-color: white; padding:10px; width:320px; margin: 0 auto; border-radius:3px;'>
                            <div style='font-size: 28px; background-color:grey; color:white; padding: 5px;'>Verify your email</div>
                            <h1 style='color: #777777'>Reset Password</h1>
                            <p style>Use the link below to verify your email address</p>
                            <a style='text-decoration: none' href="https://saturnslist.com/email?verification_key=${verification_link}"><button style='width: 150px; background-color: #F85D49; color: white; font-size: 16px; height:60px; padding:5px; border: none; border-radius: 3px; box-sizing: border-box; font-weight: 900;'>VERIFY EMAIL</button></a>
                        </div>
                    <body>`// plain text body
                  };
                
                transporter.sendMail(mailOptions, function (err, info) {
                    if(err){
                      console.log(err)
                    }else{
                      console.log(info);
                 }});
                
                
                //set user to a session if succsesful login
                const user = {
                    id: response[0].id,
                    username: response[0].username,
                    email: response[0].email,
                    location: response[0].state,
                    memberSince: response[0].member_since,
                    Admin: response[0].admin,
                    verified: response[0].verified
                }
                req.session.user = user;
                res.redirect('/')
                console.log('registered:', req.session.user)
            }).catch(error => {
                if(error.code == 23505){
                    res.status(409).send('username or email already exists');
                }
                console.log(error);
            })
        }).then(error => {
            console.log(error);
        })
    },
    login: (req, res)=>{
        //setting db name variable
        const db = req.app.get('db');
        //deconstructing username and password
        const { username, password } = req.body;
        
        db.find_user([username]).then(users => {
            if(users.length) {
                //compare password with known password
                bcrypt.compare(password, users[0].password).then(passwordsMatch => {
                    if(passwordsMatch){

                        const user = {
                            id: users[0].id,
                            username: users[0].username,
                            email: users[0].email,
                            location: users[0].state,
                            memberSince: users[0].member_since,
                            Admin: users[0].admin,
                            verified: users[0].verified
                        }
                        req.session.user = user;
                        
                        req.session.save();
                        res.redirect('/')
                        
                    }else{
                        console.log('wrong password')
                        res.json({message:"Wrong username/password"})
                    }
                })

            }else {
                console.log('wrong username')
                res.json({message:"Wrong username/password"})
            }
        }).catch(error => console.log(error))
    },
    logout: (req, res)=> {
        req.session.destroy();
        res.status(200).send('logged out');
    },
    emailVerification: (req, res) => {
        const db = req.app.get('db');
        const { verification_key } = req.body;
        console.log('hit')
        db.verify_email(verification_key).then((response) => {
            req.session.user.verified = response[0].verified;
            console.log(req.session.user)
            res.status(200).send('hello!')
        }) 
    },
    resendEmail: (req, res) => {
        const db = req.app.get('db');
        db.resend_email(req.session.user.id).then(response => {
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                       user: 'no.reply.saturns.list@gmail.com',
                       pass: process.env.EMAIL_PASSWORD
                   }
               });
            
            const mailOptions = {
                from: 'no.reply.saturns.list@gmail.com', // sender address
                to: response[0].email, // list of receivers
                subject: 'Verify Email', // Subject line
                html: `<body style='text-align: center; background-color:#F1F2F4; width:100%; padding: 40px 0px'>
                    <div>
                        <img style='margin: 10px auto;' src='https://res.cloudinary.com/saturnslist/image/upload/v1520963194/saturn.png'/>
                    <div>
                    <div style='background-color: white; padding:10px; width:320px; margin: 0 auto; border-radius:3px;'>
                        <div style='font-size: 28px; background-color:grey; color:white; padding: 5px;'>Verify your email</div>
                        <h1 style='color: #777777'>Reset Password</h1>
                        <p style>Use the link below to verify your email address</p>
                        <a style='text-decoration: none' href="https://saturnslist.com/email?verification_key=${response[0].verified_link}"><button style='width: 150px; background-color: #F85D49; color: white; font-size: 16px; height:60px; padding:5px; border: none; border-radius: 3px; box-sizing: border-box; font-weight: 900;'>VERIFY EMAIL</button></a>
                    </div>
                <body>`// plain text body
              };
            
            transporter.sendMail(mailOptions, function (err, info) {
                if(err){
                  console.log(err)
                }else{
                  console.log(info);
             }});

             res.send('You verification link has been resent');
        })
    }
}