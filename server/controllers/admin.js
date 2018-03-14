module.exports = {
    getUnapproved: (req, res) => {
        const db = req.app.get('db');
        db.get_unapproved().then(response => {
            res.status(200).send(response)
        }).catch(error => console.log(error))
    }
}