const bcrypt = require('bcrypt');
module.exports = {
    register: (req, res)=> {
        //setting db name variable
        const db = req.app.get('db');
        //deconstructing username and password
        const { first_name, last_name, username, password, email, phone, zip, city, state, country } = req.body;
        //salt for hashing password
        const saltRounds = 12;
        bcrypt.hash(password, saltRounds).then(hashedPassword => {
            db.create_user([first_name, last_name, username, hashedPassword, email, phone, zip, city, state, country]).then(response =>{
                //set user to a session if succsesful login
                const user = {
                    id: response[0].id,
                    username: response[0].username,
                    email: response[0].email,
                }
                req.session.user = user;
                console.log(req.session.user);
            }).catch(error => {
                if(error.code == 23505){
                    res.status(409).send('username or email already exists');
                }
                console.log(error);
            })
        })
    },
    login: (req, res)=>{
        //setting db name variable
        const db = req.app.get('db');
        //deconstructing username and password
        const { username, password } = req.body;
        
        db.find_user([username]).then(users => {
            if(users.length) {
                //compare password with known password
                bcrypt.compare(password, users[0].password).then(passwordsMatch => {
                    if(passwordsMatch){

                        const user = {
                            id: users[0].id,
                            username: users[0].username,
                            email: users[0].email,
                        }
                        req.session.user = user;
                        console.log('logged-in:', req.session.user)
                    }else{
                        res.status(403).json({ message: 'Wrong password' })
                    }
                })

            }else {
                res.status(403).json({ message: "That user is not registered" })
            }
        })
    }
}