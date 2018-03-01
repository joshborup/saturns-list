module.exports = {
    newPost: (req, res) => {
        const db = req.app.get('db');
        const posted = Date().split(' ').splice(1, 4).join(' ');
        const { cat_id, price, name, condition, description, imageArray } = req.body
        db.create_post([req.session.user.id, cat_id, posted, name, description, price, condition, true, imageArray ]).then(() => {

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
    }
}