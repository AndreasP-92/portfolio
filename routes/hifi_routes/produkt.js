const db = require('../../config/sql').connect();
const passwordHash = require('password-hash');
const crypto = require('crypto');

module.exports = function (app) {
    // PRODUKT LISTE
//   app.get('/admin/produkt', function (req, res) {
//     db.query('SELECT * FROM produkt', function (err, rows) {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(200, rows);
//         }
//     })
// });
    app.get('/produkt', function (req, res) {
        db.query('SELECT * FROM produkt', function (err, rows) {
            if (err) {
                console.log(err);
            } else {
                res.json(200, rows);
            }
        })
        // db.end();
    }),
        app.get('/produkt_fors', function (req, res) {
            db.query('SELECT * FROM produkt WHERE fk_kategori = 3', function (err, data) {
                res.send(data);
            })
            // db.end();
        }),
    app.get('/produkt_hojt', function (req, res) {
        db.query('SELECT * FROM produkt WHERE fk_kategori = 2', function (err, data) {
            res.send(data);
        })
        // db.end();
    });
    // Index

    app.get('/produkt_news', function (req, res) {
        db.query('SELECT * FROM produkt order by id desc limit 3', function (err, data) {
            res.send(data);
        })
        // db.end();
    })

    // SEARCH ENGINE

    app.get('/produkt_ny', function (req, res) {
        db.query('SELECT * from produkt WHERE fk_kategori order by id')
        res.send(data);
        // db.end();
    });
    app.get('/produkt_search/:key', function (req, res) {
        db.query(`SELECT * from produkt where fk_navn like '%${req.params.key}%'`, function (err, rows, fields) {
            // if (err) throw err;
            // var data = [];
            // for (i = 0; i < rows.length; i++) {
            //     data.push(rows[i].produkt);
            // }
            res.end(JSON.stringify(rows));
        })
        // db.end();
    });

    // KONTAKT



    app.post('/kontakt_create', function (req, res) {
        var navn = req.body.navn;
        var mail = req.body.mail;
        var besked = req.body.besked;
        // console.log(navn)
        db.query(`INSERT INTO kontakt(id, navn, email, besked) VALUES (null,?,?,?)`, [navn, mail, besked], function (err, result) {
            // if (err)
            //     callback(err, null)
            // else
            //     callback(null, result)
        })
        // db.end();
    });

    // INDSÆTTELSES FORM

    app.post('/produkt_insert', function (req, res) {

        var navn = req.body.navn;
        var varenr = req.body.varenr
        var pris = req.body.pris;
        var antal = req.body.antal;
        var kategori = req.body.kategori;
        var beskrivelse = req.body.beskrivelse;
        var img = req.body.img;
        var producent = req.body.producent;
        // console.log(navn)
        db.query(`INSERT INTO produkt(id, fk_navn, varenr, pris, antal, fk_kategori, beskrivelse, img, fk_producent) VALUES (null,?,?,?,?,?,?,?,?)`, [varenr, pris, antal, kategori, beskrivelse, img, producent], function (err, result) {
            // if (err)
            //     callback(err, null)
            // else
            //     callback(null, result)
        })
        // db.end();
    });
    // PRODUKT UNDER SIDE
    // app.get('/produkt/:id', function (req, res) {
    //     db.query(`SELECT * FROM produkt WHERE id = ${req.params.id}`, function (err, rows, fields) {
    //         res.end(JSON.stringify(rows));
    //     })
    // });

    // ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN ADMIN
    app.get('/produkt/:id', (req, res, next) => {
        let id = (isNaN(req.params.id) ? 0 : req.params.id);
        if (id > 0) {
            //    let db = mysql.connect();
            db.execute(`SELECT * FROM produkt WHERE id = ?`, [req.params.id], (err, rows) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(200, rows);
                }
            })
        } else {
            res.json(400, {
                message: 'id ikke valid'
            });
        }
        // db.end();
    });
    //    INSERT PRODUKT

    app.post('/produkt', (req, res, next) => {

        let fk_navn = (req.body.fk__navn == undefined ? '' : req.body.fk_navn);
        let beskrivelse = (req.body.beskrivelse == undefined ? '' : req.body.description);
        let pris = (req.body.pris == undefined ? 0 : req.body.pris);
        // pris = pris.replace(',', '.');
        let sqlUpdate = `UPDATE produkt SET fk_navn = '${fk_navn}', beskrivelse = '${beskrivelse}', pris = '${pris}' WHERE id='${id}'`;
        // if (fk_navn != '' && beskrivelse != '' && !isNaN(pris)) {

            //  let db = mysql.connect();
            db.execute(sqlUpdate, function (err, rows) {
                if (err) {
                    console.log('fejl modtaget fra db execute', err);
                } else {
                    res.json(200, rows);
                }
            })
            // db.end();
        // } else {
        //     res.json(400, {
        //         message: 'validering fejlede'
        //     });
        // }
    });

    //OPDATER PRODUKT

    app.put('/produkt/opdater', (req, res, next) => {
        console.log(req.body)
        let fk_navn = (req.body.fk_navn == undefined ? '' : req.body.fk_navn);
        let beskrivelse = (req.body.beskrivelse == undefined ? '' : req.body.beskrivelse);
        let pris = (req.body.pris == undefined ? 0 : req.body.pris);
        let id = req.body.id;
        let sqlUpdate = `UPDATE produkt SET fk_navn = '${fk_navn}', beskrivelse = '${beskrivelse}', pris = '${pris}' WHERE id='${id}'`;
        //   pris = pris.replace(',', '.');
        console.log(fk_navn, beskrivelse, pris, id)
        // if (fk_navn != '' && beskrivelse != '' && !isNaN(pris) && id > 0) {

            //  let db = mysql.connect();
        
            db.query(sqlUpdate, function (err, rows) {
                console.log(sqlUpdate)
                if (err) {
                    console.log(err);
                } else {
                    res.json(200, rows);
                }
            })
            // db.end();
        // } 
        // else {
        //     res.json(400, {
        //         message: 'validering fejlede'
        //     });
        // }
    });


    //    SLET PRODUKT


    //    app.del('/produkt/:id', (req, res, next) => {
    //       let id = (isNaN(req.params.id) ? 0 : req.params.id);
    //       if (id > 0) {
    //          let db = mysql.connect();
    //          db.execute(`DELETE FROM produkt WHERE id = ?`, [req.params.id], (err, rows) => {
    //             if (err) {
    //                console.log(err);
    //             } else {
    //                res.json(204);
    //             }
    //          })
    //          db.end();
    //       } else {
    //          res.json(400, {
    //             message: 'id ikke valid'
    //          });
    //       }
    //    });


}