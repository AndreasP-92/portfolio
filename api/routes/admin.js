const restify = require('restify');
const path = require('path');
const mysql = require(path.join(__dirname, '..', 'config', 'sql'));
const db = require('../config/sql').connect();


module.exports = function (app) {

  // HENT ALLE PRODUKTER***************************

  app.get('/admin/produkt', function (req, res) {
    db.query('SELECT * FROM produkt', function (err, rows) {
      if (err) {
        console.log(err);
      } else {
        res.json(200, rows);
      }
    })
  });
  // HENT KONTAKT FORM***************************************
  // app.get('/kontakt', (req, res, next) => {
  //   let db = mysql.connect();
  //   db.execute(`SELECT * FROM kontakt`, [], (err, rows) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       res.json(200, rows);
  //     }
  //   })
  //   db.end();
  // });

  app.get('/admin/produkt/:id', (req, res, next) => {
    let id = (isNaN(req.params.id) ? 0 : req.params.id);
    if (id > 0) {
      let db = mysql.connect();
      db.execute(`SELECT * FROM produkt WHERE id = ?`, [req.params.id], (err, rows) => {
        if (err) {
          console.log(err);
        } else {
          res.json(200, rows);
        }
      })
      db.end();
    } else {
      res.json(400, {
        message: 'id ikke valid'
      });
    }
  });

  // INDSÆT_02****************************************
  app.post('/admin/produkt', (req, res, next) => {

    let fk_navn = (req.body.fk_navn == undefined ? '' : req.body.fk_navn);
    let beskrivelse = (req.body.beskrivelse == undefined ? '' : req.body.beskrivelse);
    let pris = (req.body.pris == undefined ? 0 : req.body.pris);
    let fk_kategori = (req.body.fk_kategori == undefined ? 0 : req.body.fk_kategori);
    let fk_producent = (req.body.fk_producent == undefined ? 0 : req.body.fk_producent);
    let display = (req.body.display == undefined ? 0 : "0");
    price = price.replace(',', '.');

    if (fk_navn != '' && beskrivelse != '' && !isNaN(pris)) {

      let db = mysql.connect();
      db.execute(`INSERT INTO produkt SET fk_navn = ?, beskrivelse = ?, pris = ?, display = ?, fk_kategori, fk_producent`,
        [fk_navn, beskrivelse, pris, display, fk_kategori, fk_producent], (err, rows) => {
          if (err) {
            console.log(err);
          } else {
            res.json(200, rows);
          }
        })
      db.end();
    } else {
      res.json(400, {
        message: 'validering fejlede'
      });
    }
  });

  // INDSÆT PRODUKT2
  // app.post('/admin/produkt', (req, res, next) => {
  //   let db = mysql.connect();

  //   let fk_navn = (req.body.fk__navn == undefined ? '' : req.body.fk_navn);
  //   let beskrivelse = (req.body.beskrivelse == undefined ? '' : req.body.description);
  //   let pris = (req.body.pris == undefined ? 0 : req.body.pris);
  //   let kategori = (req.body.pris == undefined ? 0 : req.body.pris);
  //   let producent = (req.body.pris == undefined ? 0 : req.body.pris);
  //   let display = (req.body.display == undefined ? 0 : "0");

  //   pris = pris.replace(',', '.');

  //   if (fk_navn != '' && beskrivelse != '' && !isNaN(pris)) {

  //     console.log(display)

  //     db.execute(`INSERT INTO produkt SET fk_navn = ?, beskrivelse = ?, pris = ?, display = ?, fk_kategori, fk_producent`, [fk_navn, beskrivelse, pris, display, kategori, producent], (err, rows) => {
  //       if (err) {
  //         console.log('fejl modtaget fra db execute', err);
  //       } else {
  //         res.json(200, rows);
  //       }
  //     })
  //     db.end();
  //   } else {
  //     res.json(400, {
  //       message: 'validering fejlede'
  //     });
  //   }
  // });
  app.put('/admin/produkt/check', function (req, res) {
    db.query('ALTER TABLE produkt MODIFY display INTEGER;', function (err, rows) {
      if (err) {
        console.log(err);
      } else {
        res.json(200, rows);
      }
    })
  });

  // OPDATER PRODUKT********************************************

  app.put('/admin/produkt/:id', (req, res, next) => {
    console.log(req.body)
    let fk_navn = (req.body.fk_navn == undefined ? '' : req.body.fk_navn);
    let beskrivelse = (req.body.beskrivelse == undefined ? '' : req.body.beskrivelse);
    let pris = (req.body.pris == undefined ? 0 : req.body.pris);
    let fk_kategori = (req.body.kategori == undefined ? 0 : req.body.kategori);
    let fk_producent = (req.body.producent == undefined ? 0 : req.body.producent);
    let id = req.body.id;
    let sqlUpdate = `UPDATE produkt SET fk_navn = '${fk_navn}', beskrivelse = '${beskrivelse}', fk_kategori = '${fk_kategori}', fk_producent = '${fk_producent}', pris = '${pris}' WHERE id='${id}'`;
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

//   app.put('/admin/produkt/:id', (req, res, next) => {
// console.log(req.body)
//     let fk_navn = (req.body.fk_navn == undefined ? '' : req.body.fk_navn);
//     let beskrivelse = (req.body.beskrivelse == undefined ? '' : req.body.beskrivelse);
//     let pris = (req.body.pris == undefined ? 0 : req.body.pris);
//     let id = (isNaN(req.params.id) ? 0 : req.params.id);
//     let fk_kategori = (req.body.kategori == undefined ? 0 : req.body.kategori);
//     let fk_producent = (req.body.producent == undefined ? 0 : req.body.producent);
//     //   pris = pris.replace(',', '.');

//     if (fk_navn != '' && beskrivesle != '' && !isNaN(pris) && id > 0) {

//       let db = mysql.connect();
//       db.execute(`UPDATE produkt SET fk_navn = ?, beskrivelse = ?, pris = ?, WHERE id = ?, where fk_kategori = ?, where fk_producent = ?`,
//       [fk_navn, beskrivelse, pris, id, fk_kategori, fk_producent], (err, rows) => {
//           if (err) {
//             console.log(err);
//           } else {
//             res.json(200, rows);
//           }
//         })
//       db.end();
//     } else {
//       res.json(400, {
//         message: 'validering fejlede'
//       });
//     }
//   });
  //  UDSKRIV KONTAKT FORM**********************************
  app.get('/kontakt', function (req, res) {
    db.query('SELECT * FROM kontakt', function (err, data) {
      if (err) {
        console.log(err)
      }
      res.send(data);
    })
  });

  // DELETE PRODUKT
     app.del('/produkt/:id', (req, res, next) => {
        let id = (isNaN(req.params.id) ? 0 : req.params.id);
        if (id > 0) {
           let db = mysql.connect();
           db.execute(`DELETE FROM produkt WHERE id = ?`, [req.params.id], (err, rows) => {
              if (err) {
                 console.log(err);
              } else {
                 res.json(204);
              }
           })
           db.end();
        } else {
           res.json(400, {
              message: 'id ikke valid'
           });
        }
     });
    //  UDSKRIV BRUGERNE*************************************
    app.get('/bruger', function (req, res) {
      db.query('SELECT * FROM users', function (err, data) {
        if (err) {
          console.log(err)
        }
        res.send(data);
      })
    });




  // ========================== static
  app.get('/.*', restify.plugins.serveStatic({
    'directory': 'public',
    'default': 'index.html'
  }));

}