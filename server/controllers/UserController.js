// const create = require ('../service/userService');

const CryptoJS = require("crypto-js"); // crypt the password
const bcrypt = require('bcrypt');
const User = require ('../models/User');
require ('dotenv').config();

let hashedPass = '';


exports.getAllUsers = async (req, res, next) => {
    res.json("getall users")
};

// exports.register = async (req, res, next) => {
//     hashedPass = await bcrypt.hash(req.body.password,10).toString();
    

//     const {user_name, email, password} = req.body;
//     let user = new User (user_name, email, password);

//     user = await user.save();
//     res.json(user)
// };  


exports.register = async (req, res, next) => {
    // hashedPass = await bcrypt.hash(req.body.password,10).toString(CryptoJS.enc.Utf8)
    
    const newUser = new User ({
        
        user_name:req.body.user_name,
        email: req.body.email,
        password: req.body.password
        //  = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
    })

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
        // console.log(savedUser)
    } catch (error) {
        res.status(500).json(error)
    }
};  

exports.login = async (req, res, next) => {
    res.json("login")
};  

exports.editProfile = async (req, res, next) => {
    res.json("you can regsister")
};