const db = require('../config/sql').connect();
const passwordHash = require('password-hash');
const crypto = require('crypto');

module.exports = function (app) {


    app.get('/test', function (req, res) {
        console.log('data læst')
        db.query('select * from fk_kategori', function (err, data) {
            res.send(data);
        })
    });
};    