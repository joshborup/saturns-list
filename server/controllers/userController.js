module.exports = {
    getUserData: (req, res) => {
        res.json(req.session.user);
    }     
    
}