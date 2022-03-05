const db = require ('../config/config_db');
//class syntax in Es6
// Allows me to use different db methods
class User {
    constructor( user_name, email, password, date_of_birth, phone_number, address) {
        
        this.user_name = user_name;
        this.email = email;
        this.password = password;
        this.date_of_birth = date_of_birth;
        this.phone_number = phone_number;
        this.address = address;
    }

// only accesible by this class
    async save() {
        let d = new Date();
        let yyy = d.getFullYear();
        let mm = d.getMonth() + 1;   // cuz the month in js 0 index
        let dd = d.getDate()                   // return the actual day in the month not in year 

        let createdAtDate = `${yyy}-${mm}-${dd}`;
        
        let sql = `
        INSERT INTO users (
            user_name,
            email,
            password
        )
        VALUES (
           ' ${this.user_name}',
           ' ${this.email}',
           ' ${this.password}'
        )
        `;

        const [newUser, _] = await db.execute(sql);
        return newUser;
    }

}

module.exports = User;