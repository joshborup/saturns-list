const bcrypt = require('bcrypt');
module.exports = {
    register: (req, res)=> {
        //setting db name variable
        const db = req.app.get('db');
        //deconstructing username and password
        const { first_name, last_name, username, password, email, phone, zip, city, state, country } = req.body;
        const member_since = Date().split(' ').splice(1, 3).join(' ');
        //salt for hashing password
        const saltRounds = 12;
        bcrypt.hash(password, saltRounds).then(hashedPassword => {
            db.create_user([first_name, last_name, username, hashedPassword, email, phone, zip, city, state, country, member_since]).then(response =>{
                //set user to a session if succsesful login
                const user = {
                    id: response[0].id,
                    username: response[0].username,
                    email: response[0].email,
                    location: response[0].state,
                    memberSince: response[0].member_since
                }
                req.session.user = user;
                res.redirect('/')
                console.log('registered:', req.session.user)
            }).catch(error => {
                if(error.code == 23505){
                    res.status(409).send('username or email already exists');
                }
                console.log(error);
            })
        }).then(error => {
            console.log(error);
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
                            location: users[0].state,
                            memberSince: users[0].member_since
                        }
                        req.session.user = user;
                        console.log('logged-in:', req.session.user)
                        req.session.save();
                        res.redirect('/')
                        
                    }else{
                        res.status(403).json({ message: 'Wrong password' })
                    }
                })

            }else {
                res.status(403).json({ message: "That user is not registered" })
            }
        })
    },
    logout: (req, res)=> {
        req.session.destroy();
        res.status(200).send('logged out');
    }
}