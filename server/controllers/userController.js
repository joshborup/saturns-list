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
        const { image, description, website } = req.body;
        db.update_profile_data([ req.session.user.id, image, description, website]).then(profile => {
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
    }

}