const sequelize=require("sequelize");
const op=sequelize.op;
const db=new sequelize({
    host:"localhost",
    username:"root",
    password:"aastha08",
    dialect:"mysql",
    database:"aa"

});
db.authenticate().then(function () {
    console.log("Successfully created the database !");
}).catch(function (err) {
    console.log("Unable to create database due to ",err);
});
var userdetails=db.define('user',{

    username:sequelize.STRING,
    password:sequelize.STRING
});
userdetails.sync().then(function () {
    console.log("user is ready!");
});
module.exports={
    userdetails,op};


