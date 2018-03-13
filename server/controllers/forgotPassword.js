const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
require('dotenv').config();
module.exports = {
    forgotPassword: (req, res) => {
        //random reset string
        const random_reset_string = Math.random().toString(36).substring(2);

        const { email } = req.body;
        //db name shortener
        const db = req.app.get('db');
        db.pass_reset([random_reset_string, email]).then((response) => {
            
            console.log(response[0].email)

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
                subject: 'test', // Subject line
                html: `<a href="http://localhost:4001/reset_password?reset_key=${random_reset_string}">reset your password here</p>`// plain text body
              };
            
            transporter.sendMail(mailOptions, function (err, info) {
                if(err){
                  console.log(err)
                }else{
                  console.log(info);
             }});

            res.status(200).json({message:'an email has been sent to ' + response[0].email + ' with a link to reset your password'});
        }).catch( error=> {
            console.log('error: ', error)
            res.status(403).json({message:'that email does not appear to be in our system, please try again'});
        })   
    },
    resetPassword: (req, res) => {
        const { reset_key, password } = req.body;
        const random_reset_string = Math.random().toString(36).substring(2);
        const db = req.app.get('db');
        const saltRounds = 12;
        console.log(password);
        bcrypt.hash(password, saltRounds).then(hashedPassword => {
            db.update_password([hashedPassword, reset_key, random_reset_string]).then(()=>{
                res.status(200).json({message:"Updated Password Successfully, you will be redirected to the login screen in a few seconds"})
            }).catch(error => {
                console.log(error)
                res.status(403).json({message:"Something failed, please try again"})
            })
        })
    }
}