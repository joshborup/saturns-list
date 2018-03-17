const nodemailer = require('nodemailer');

module.exports = {
    newPost: (req, res) => {
        const db = req.app.get('db');
        const posted = Date().split(' ').splice(1, 4).join(' ');
        const { cat_id, price, name, condition, description, imageArray } = req.body
        db.create_post([req.session.user.id, cat_id, posted, name, description, price, condition, false, imageArray, false]).then(() => {

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
                subject: 'New Post: Approval Needed', // Subject line
                html: `<body style='text-align: center; background-color:#F1F2F4; width:100%; padding: 40px 0px'>
                    <div>
                        <img style='margin: 10px auto;' src='https://res.cloudinary.com/saturnslist/image/upload/v1520963194/saturn.png'/>
                    <div>
                    <div style='background-color: white; padding:10px; width:320px; margin: 0 auto; border-radius:3px;'>
                        <div style='font-size: 28px; background-color:grey; color:white; padding: 5px;'>New Post</div>
                        <h1 style='color: #777777'>Post requires approval</h1>
                        <h2 style='color: #777777'>Post by ${req.session.user.username}</h2>
                        <h4 style='color: #999999'>Item Name: ${name}</h4>
                        <a style='text-decoration: none' href="https://saturnslist.com/account_login"><button style='width: 150px; background-color: #F85D49; color: white; font-size: 16px; height:60px; padding:5px; border: none; border-radius: 3px; box-sizing: border-box; font-weight: 900;'>Log in to approve</button></a>
                    </div>
                <body>`// plain text body
              };
            
            transporter.sendMail(mailOptions, function (err, info) {
                if(err){
                  console.log(err)
                }else{
                  console.log(info);
             }});


            res.redirect('/');

        }).catch(error => console.log(error));
    },
    getAllPosts: (req, res)=>{
        const db = req.app.get('db');
        db.get_all_posts().then(response => {
            res.status(200).send(response)
        }).catch(error => console.log(error))
    },
    getUserPosts: (req, res) => {
        const db = req.app.get('db');
        
        db.get_users_posts(req.session.user.id).then(userPosts => {
            res.status(200).send(userPosts)
        })
    },
    markAsSold: (req, res)=>{
        const db = req.app.get('db');
        const { id, userId } = req.body
        db.mark_as_sold([id, userId]).then((response)=>{
            console.log('item marked as sold')
            res.status(200).send(response)
        }).catch(error => console.log(error))
    },
    reactivate: (req, res) => {
        const db = req.app.get('db');
        const { id, userId } = req.body
        db.reactivate([id, userId]).then((response)=>{
            console.log('item marked as sold')
            res.status(200).send(response)
        }).catch(error => console.log(error))
    },
    getInactive: (req, res)=> {
        const db = req.app.get('db');
        db.get_inactive_posts(req.session.user.id).then(response => {
            res.status(200).send(response);
        })
    },
    individualListing: (req, res) => {
        const db = req.app.get('db');
        const id = req.params.id
        db.individual_listing(id).then(response => {
            console.log(response);
            res.status(200).send(response)
        }).catch(error => console.log(error))
    },
    getPostByCat: (req, res) => {
        const db = req.app.get('db');
        const num = req.query.num
        db.get_items_by_cat(num).then(response => {
            console.log(response);
            res.status(200).send(response)
        }).catch(error => consol.log(error))
    },
    getPostsByPage: (req, res) => {
        const pageCount = req.query.pageCount
        const db = req.app.get('db');
        db.get_posts_by_page(pageCount).then(response => {
            res.status(200).send(response)
        }).catch(error => console.log(error))
    },
    itemCount: (req, res) => {
        const db = req.app.get('db');
        db.item_count().then(response => {
            res.status(200).send(response);
        })
    },
    getPostsByCat: (req, res) => {
        const db = req.app.get('db');
        const {pageCount, cat_id} = req.query
        db.get_cat_by_page([cat_id, pageCount]).then(response => {
            res.status(200).send(response);
        })
    },
    getCatItemCount: (req, res) => {
        const db = req.app.get('db');
        const {cat_id} = req.query;
        db.cat_item_count(cat_id).then(response => {
            res.status(200).send(response);
        }).catch(error => console.log(error))
    },
    getSellerId: (req, res) => {
        const db = req.app.get('db');
        const {seller_id} = req.query;
        db.get_seller_by_id(seller_id).then(response => {
            res.status(200).send(response);
        }).catch(error => console.log(error))
    },
    getUserPostsById: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        db.get_users_posts(id).then(userPosts => {
            res.status(200).send(userPosts)
        })
    },
    deletePost: (req, res) => {
        const db = req.app.get('db');
        const {item_id, seller_id} = req.query;
        console.log(item_id, seller_id)
        db.delete_item_by_id([item_id, seller_id]).then((response)=>{
            res.status(200).send(response);
        }).catch(error => console.log(error))
    },
    updateListing: (req, res) => {
        const db = req.app.get('db');
        const {seller_id, condition, cat_id, price, itemName, description, image_path, item_id} = req.body;
        // console.log('sellerid', seller_id, 'condition', condition, 'cat_id', cat_id,'price', price, 'itemname', itemName, 'description', description, 'images', image_path);
        db.update_listing([seller_id, condition, cat_id, price, itemName, description, image_path, item_id]).then(()=>{
            res.status(200).json('/account')
        }).catch(error => console.log(error));
    },
    searchPosts: (req, res) => {
        const db = req.app.get('db');
        const { search_query, pageCount} = req.query;
        db.search_posts([search_query, pageCount]).then(response => {
            res.status(200).send(response);
        })
    },
    getSearchCount: (req, res) => {
        const db = req.app.get('db')
        const { search_query } = req.query;
        db.get_search_item_count(search_query).then(response => {
            res.status(200).send(response);
        })
    }
}