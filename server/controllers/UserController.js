// const create = require ('../service/userService');

const { hashSync, genSaltSync } =require ('bcrypt')


exports.getAllUsers = async (req, res, next) => {
    res.json("getall users")
};

exports.register = async (req, res, next) => {
    res.json("register")
};  

exports.login = async (req, res, next) => {
    res.json("login")
};  

exports.editProfile = async (req, res, next) => {
    res.json("you can regsister")
};