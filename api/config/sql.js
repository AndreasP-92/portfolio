const mysql = require('mysql2');

module.exports = {
    'connect': () => {
        return mysql.createConnection({
            'host': '159.89.11.194',
            'user': 'root',
            'password': '1234',
            'database': 'hifi'
        });
    }
};