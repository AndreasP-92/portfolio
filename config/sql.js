const mysql = require('mysql2');

module.exports = {
    'connect': () => {
        return mysql.createConnection({
            'host': '138.197.186.159',
            'user': 'root',
            'password': '4321',
            'database': 'hifi'
        });
    }
};


// ********************************************************* TESTING ********************************************************

/* module.exports = {
    'connect': () => {
        return mysql.createConnection({
            'host': 'localhost',
            'user': 'root',
            'password': '',
            'database': 'hifi'
        });
    }
}; */