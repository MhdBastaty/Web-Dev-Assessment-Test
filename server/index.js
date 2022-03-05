const express = require('express')
const app = express();
const dotenv = require ('dotenv');
const bodyParser = require ('body-parser')
const mysql = require ('./config/config_db');



dotenv.config();
// parse JSON bodies as sent  by API
app.use(express.json());

//routes
app.use('/users', require('./routes/users'));

mysql.getConnection((err)=>{
  if(err){
      throw err;
  }
  else{
      console.log('DBConnection is Successful');
  }
});

app.listen(process.env.PORT || 6000, () => {
  console.log(`Backend Server Is Running on ${process.env.PORT}`)
})  