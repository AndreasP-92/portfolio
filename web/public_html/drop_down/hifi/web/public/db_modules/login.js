const db = require('../config/sql').connect();
const passwordHash = require('password-hash');
const crypto = require('crypto');

module.exports = (app) => {
    app.post('/login', (req, res) => {
        console.log(req.body.username);
        db.execute('SELECT idusers, password FROM users WHERE username = ?', [req.body.username], (selError, rows) => {
            if (passwordHash.verify(req.body.password, rows[0].password)) {
                crypto.randomBytes(256, (err, buf) => {
                    if (err) return res.send(500);
                    else {
                        const token = buf.toString('hex');
                        db.execute('INSERT INTO accesstokens SET userid = ?, token = ?', [rows[0].idusers, token], (insError) => {
                            if (insError) return res.send(500);
                            else return res.send({ "AccessToken": token });
                        });
                    }
                });
            } else {
                res.send(401);
            }
        });
    });
};