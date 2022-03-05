require ('dotenv').config();
//we use mysql2 to use promis wrapper 

const mysql = require ('mysql2');
// Create the Connection with DB
const pool = mysql.createPool({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    connectionLimit: 10
    
});

// let sql = "SELECT * FROM users;";

// pool.execute(sql, function(err, result) {
//     if(err) throw err;
//     console.log(result);
// });

//Connect 
pool.getConnection((err)=>{
    if(err){
        throw err;
    }
    else{
        console.log('DBConnection is Successful');
    }
});

module.exports = pool.promise();