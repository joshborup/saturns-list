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
        const { image } = req.body;
        db.update_profile_data([image, req.session.user.id]).then(profile => {
            res.send(profile)
        })
    }

}