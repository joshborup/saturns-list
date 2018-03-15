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
    }
}