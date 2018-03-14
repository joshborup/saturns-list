module.exports = {
    getUnapproved: (req, res) => {
        const db = req.app.get('db');
        db.get_unapproved().then(response => {
            res.status(200).send(response)
        }).catch(error => console.log(error))
    },
    approvePost: (req, res) => {
        const db = req.app.get('db');
        const { itemId } = req.body;
        console.log(itemId);
        db.approve_post(itemId).then(response => {
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
    }
}