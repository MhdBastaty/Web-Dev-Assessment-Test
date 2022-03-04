const pool = require ('../config/config_db')

// make create method to recive data from controller
module.exports = {
    create: (data, callbck) => {
        pool.query(
            `INSERT INTO users (user_name, email, password)
                values(?, ?, ?)`,[ data.user_name, data.email, data.password],
                (error, results) => {
                    if (error){
                    return callbck(error);
                    }
                    return callbck(null, results)
                }
        );
    }
};