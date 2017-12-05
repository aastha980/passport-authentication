const uid = require('uid')
const tokens = {}
db=require("../db");
exports = module.exports = {

    addUser(username, password) {
        db.userdetails.create({
            username:username,
            password:password
        }).then(function () {
            console.log("success");
        }).catch(function (err) {
            console.log(err);
        })
    },
    /*getpassword(password) {
        return users[password]
    },*/

    getUserWithToken (token) {

      return tokens[token]
    },
    createToken(username) {
        let token = uid(10)
        tokens[token] = username
        return token
    },
    removeToken(token) {
        delete tokens[token]
    }
}