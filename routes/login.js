const route = require('express').Router();
const users = require('../data/users');
db=require('../db');
route.get('/', (r,s) => s.render('login'));
route.post('/', (req, res) =>{
    let user;
    (db.userdetails.findOne({
        where: {
            username: req.body.username,
            password: req.body.password
        }
    }).then(function (data) {
        user = data.dataValues.username;
    }).catch(function (err) {
        user=""
    })).then(function () {
        console.log("ddddd", user);
        if (user === '') {
            return res.redirect('/')
        }
        let newToken = users.createToken(user);
        res.header('Set-Cookie', `login=${newToken}`);
        res.redirect('/secret');
    })
});
exports = module.exports = {
    route
};