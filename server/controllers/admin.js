const nodemailer = require('nodemailer');

module.exports = {
    getUnapproved: (req, res) => {
        const db = req.app.get('db');
        db.get_unapproved().then(response => {
            res.status(200).send(response)
        }).catch(error => console.log(error))
    },
    approvePost: (req, res) => {
        const db = req.app.get('db');
        const { itemId, email, name, username} = req.body;
        console.log(itemId);
        db.approve_post(itemId).then(response => {

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                       user: 'no.reply.saturns.list@gmail.com',
                       pass: process.env.EMAIL_PASSWORD
                   }
               });
            
            const mailOptions = {
                from: 'no.reply.saturns.list@gmail.com', // sender address
                to: email, // list of receivers
                subject: `${username} your post has been approved`, // Subject line
                html: `<body style='text-align: center; background-color:#F1F2F4; width:100%; padding: 40px 0px'>
                    <div>
                        <img style='margin: 10px auto;' src='https://res.cloudinary.com/saturnslist/image/upload/v1520963194/saturn.png'/>
                    <div>
                    <div style='background-color: white; padding:10px; width:320px; margin: 0 auto; border-radius:3px;'>
                        <div style='font-size: 28px; background-color:grey; color:white; padding: 5px;'>Post Approved</div>
                        <h1 style='color: #777777'>Your post has been approved</h1>
                        <h4 style='color: #999999'>Item Name: ${name}</h4>
                        <a style='text-decoration: none' href="https://saturnslist.com/account_login"><button style='width: 150px; background-color: #F85D49; color: white; font-size: 16px; height:60px; padding:5px; border: none; border-radius: 3px; box-sizing: border-box; font-weight: 900;'>Log in to view your post</button></a>
                    </div>
                <body>`// plain text body
              };
            
            transporter.sendMail(mailOptions, function (err, info) {
                if(err){
                  console.log(err)
                }else{
                  console.log(info);
             }});

            res.status(200).send(response)
        })
    },
    disapproveAndDelete: (req, res) => {
        const db = req.app.get('db');
        const { itemId } = req.query;
        console.log(itemId);
        db.dissapprove_delete(itemId).then(response => {
            res.status(200).send(response)
        }).catch(error => console.log('disapprove error: ', error))
    },
    getUserSignUpInfo: (req, res) => {
        const db = req.app.get('db');
        db.get_user_sign_up_info().then(response => {
            res.status(200).send(response);
        }).catch(error => console.log(error))
    },
    activeInactiveCount: (req, res) => {
        const db = req.app.get('db');
        db.count_active_inactive().then(response => {
            res.status(200).send(response);
        }).catch(error => console.log(error))
    },
    getItemCountByPosts: (req, res)=> {
        const db = req.app.get('db');
        db.get_item_count_by_cat().then(response => {
            res.status(200).send(response);
        }).catch(error => console.log(error))
    }
}