const {createPool} = require ('mysql');
const dotenv = require ('dotenv');

// Create the Connection with DB
const pool = createPool({
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    connectionLimit: 10
    
});

//Connect 
pool.getConnection((err)=>{
    if(err){
        throw err;
    }
    else{
        console.log('DBConnection is Successful');
    }
});
module.exports = pool;