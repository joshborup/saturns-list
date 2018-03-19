module.exports = {
    getUserData: (req, res) => {
        res.json(req.session.user);
    },
    getProfileData: (req, res) => {
        const db = req.app.get('db');
        db.get_profile(req.session.user.id).then(profile => {
            res.send(profile)
            }
        )
    },
    updateProfile: (req, res) => {
        const db = req.app.get('db');
        const { image, description, website, facebook, instagram, astrobin } = req.body;
        db.update_profile_data([ req.session.user.id, image, description, website, facebook, instagram, astrobin]).then(profile => {
            res.send(profile)
        })
    },
    updateUser: (req, res) => {
        const db = req.app.get('db');
        const { email } = req.body;
        db.update_user_data([req.session.user.id, email]).then(response => {
            req.session.user.email = email;
            res.status(200).json(req.session.user)
        })
    },
    getPublicProfile: (req, res) => {
        const db = req.app.get('db');
        const { id } = req.params;
        db.get_profile(id).then(response => {
            res.status(200).send(response)
        }) 
    },
    getUserRatingInfo: (req, res) => {
        const db = req.app.get('db');
        const { seller_id } = req.query;
        db.get_user_rating(seller_id).then(response => {
            res.status(200).send(response)
        })
    },
    leaveReview: (req, res) => {
        const db = req.app.get('db');
        const {user, review, rating} = req.body;
        db.review_user([user, review, rating, req.session.user.id]).then(response => {
            res.status(200).send(response)
        })
    },
    getMyUserReviews: (req, res) => {
        const db = req.app.get('db');
        db.getMyUserReviews(req.session.user.id).then(response => {
            res.status(200).send(response)
        })
    },
    getUserSearch: (req, res) => {
        const db = req.app.get('db');
        db.get_all_users_search().then(response => {
            res.status(200).send(response);
        })
    },
    searchUserByName: (req, res) => {
        const db = req.app.get('db')
        const {username} = req.query;
        db.search_user_by_name(username).then(response => {
            res.status(200).send(response)
        })
    }

}