
module.exports = {
    getCategories: (req, res) => {
        const db = req.app.get('db');
        db.get_categories().then(response => {
            res.status(200).send(response);
        }).catch(error => {
            console.log('categories:', error)
        })
    }
}