const nodemailer = require('nodemailer');
module.exports = {
    postApproval: (req, res) => {
        const db = req.app.get('db');
        db.get_notif_post_approval(req.session.user.id).then(response => {
            res.status(200).send(response);
        })
    },
    count: (req, res) => {
        const db = req.app.get('db');
        db.get_notif_count(req.session.user.id).then(response => {
            res.status(200).send(response);
        })
    },
    dismissNotification: (req, res) => {
        const db = req.app.get('db');
        const { item_id } = req.body
        db.dismiss_notification([item_id, req.session.user.id]).then(response => {
            res.status(200).send(response);
        })
    },
    newReview: (req, res) => {
        const db = req.app.get('db');
        db.get_notif_new_review(req.session.user.id).then(response => {
            res.status(200).send(response);
        })
    },
    dismissReview: (req, res) => {
        const db = req.app.get('db');
        const { review_id } = req.body
        db.dismiss_new_review([review_id, req.session.user.id]).then(response => {
            res.status(200).send(response);
        })
    },
    contactSaturn: (req, res) => {
        const { title, contact, message } = req.body;

        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                   user: 'no.reply.saturns.list@gmail.com',
                   pass: process.env.EMAIL_PASSWORD
               }
           });
        
        const mailOptions = {
            from: 'no.reply.saturns.list@gmail.com', // sender address
            to: 'no.reply.saturns.list@gmail.com', // list of receivers
            subject: `New Message From ${contact}`, // Subject line
            html: `<body style='text-align: center; background-color:#F1F2F4; width:100%; padding: 40px 0px'>
                <div>
                    <img style='margin: 10px auto;' src='https://res.cloudinary.com/saturnslist/image/upload/v1520963194/saturn.png'/>
                <div>
                <div style='background-color: white; padding:10px; width:320px; margin: 0 auto; border-radius:3px;'>
                    <div style='font-size: 28px; background-color:grey; color:white; padding: 5px;'>New Contact</div>
                    <h1 style='color: #777777'>Title ${title}</h1>
                    <pstyle='color: #999999'>${message}</p>
                </div>
            <body>`// plain text body
          };
        
        transporter.sendMail(mailOptions, function (err, info) {
            if(err){
              console.log(err)
            }else{
              console.log(info);
         }});
         res.status(200).send('Your message was sent successfully!')
    }
}