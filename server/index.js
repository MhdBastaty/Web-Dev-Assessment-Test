const express = require('express')
const app = express();
const dotenv = require ('dotenv');
const mysql = require ('mysql');



dotenv.config();

// Create the Connection with DB
const db = mysql.createConnection({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
});

//Connect 

db.connect((err) => {
    if(err){
        console.log('something wrong with db');
    }
        console.log('DBConnection is Successful')
});


app.listen(process.env.PORT || 6000, () => {
  console.log(`Backend Server Is Running on ${process.env.PORT}`)
})