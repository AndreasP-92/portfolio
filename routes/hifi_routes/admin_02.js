const db = require('../../config/sql').connect();
const passwordHash = require('password-hash');
const crypto = require('crypto');


module.exports = function (app) {


    app.get('/kategorier', function (req, res) {
        console.log('data læst')
        db.query('select * from fk_kategori', function (err, data) {
            res.send(data);
        })
        db.end();

    });

    app.get('/kategorier/:id', function (req, res) {
        console.log(req.params.id)
        db.query('select * from kategori where id = ?', req.params.id, function (err, data) {
            res.send(data);
        })
        db.end();
    });

    app.get('/producenter', function (req, res) {
        db.query('select * from producent', function (err, data) {
            res.send(data);
        })
        db.end();
    });

    app.get('/produkter/kategori/:id', function (req, res) {
        // console.log(req.params.id)
        db.query('select * from produkter where fk_kategori = ?', req.params.id, function (err, data) {
            res.send(data);
        })
        db.end();
    });

    app.get('/produkter/:id', function (req, res) {
        console.log(req.params.id)
        db.query('select * from produkter where id = ?', req.params.id, function (err, data) {
            res.send(data);
            console.log(data);
        })
        db.end();
    });

    app.put('/produkter/:id', (req, res, next) => {

        let navn = (req.body.navn == undefined ? '' : req.body.navn);
        let varenr = (req.body.varenr == undefined ? '' : req.body.varenr);
        let beskrivelse = (req.body.beskrivelse == undefined ? '' : req.body.beskrivelse);
        let pris = (req.body.pris == undefined ? 0 : req.body.pris);
        let kategori = (req.body.kategori == undefined ? '' : req.body.kategori);
        let producent = (req.body.producent == undefined ? '' : req.body.producent);
        let id = (isNaN(req.params.id) ? 0 : req.params.id);
        pris = pris.replace(',', '.');

        if (navn != '' && varenr != '' && beskrivelse != '' && !isNaN(pris) && kategori != '' && producent != '' && id > 0) {

            
            db.execute(`UPDATE produkter SET navn = ?, varenr = ?, beskrivelse = ?, pris = ?, fk_kategori = ?, fk_producent = ? WHERE id = ?`,
            [navn, varenr, beskrivelse, pris, kategori, producent, id], (err, rows) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(200, rows);
                }
            })
            
        } else {
            res.json(400, {
                message: 'validering fejlede'
            });
        }
        db.end();
    });

    app.get('/produkter/search/:id', function (req, res) {
        console.log(req.params.id)
        db.query(`select * from produkter where fk_navn like "%"?"%"`, req.params.id, function (err, data) {
            res.send(data);
        })
        db.end();
    });

    app.post('/produkt', (req, res, next) => {

        let values = [];
        values.push(req.body.navn);
        values.push(req.body.varenr);
        values.push(req.body.beskrivelse);
        values.push(req.body.pris);
        values.push(req.body.kategori);
        values.push(req.body.producent);
        console.log(values);
        db.execute('insert into produkter set fk_navn = ?, varenr = ?, beskrivelse = ?, pris = ?, fk_kategori = ?, fk_producent = ?', values, (err, rows) => {
            if (err) {
                console.log(err);
                res.json(500, {
                    "message": "Internal Server Error",
                    "error": err.message
                })
            }
            else {
                res.json(200, {
                    "message": "Data indsat"
                })
            }
        })
        db.end();
    });

    app.delete('/produkt/:id', (req, res, next) => {
        let id = (isNaN(req.params.id) ? 0 : req.params.id);
        if (id > 0) {

            db.execute(`delete from produkter where id = ?`, [req.params.id], (err, rows) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(204);
                }
            })
        } else {
            res.json(400, {
                message: 'id ikke valid'
            });
        }
        db.end();
    });
}