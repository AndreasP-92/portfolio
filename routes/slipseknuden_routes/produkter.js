var artikkel_01 = [
    {
        id: 01,
        img: '/resources/media/image-projects/slipseknuden/produkter/img_01.jpg',
        tittel: 'Shoon Slips',
        beskrivelse: 'Klassisk Brun',
        pris: 'DKK 450 -.'
    },

    {
        id: 02,
        img: '/resources/media/image-projects/slipseknuden/produkter/img_02.jpg',
        tittel: 'Shoon Slips',
        beskrivelse: 'Klassisk Brun',
        pris: 'DKK 450 -.'
    },

    {
        id: 03,
        img: '/resources/media/image-projects/slipseknuden/produkter/img_03.jpg',
        tittel: 'Shoon Slips',
        beskrivelse: 'Klassisk Brun',
        pris: 'DKK 450 -.'
    },
    {
        id: 04,
        img: '/resources/media/image-projects/slipseknuden/produkter/img_04.jpg',
        tittel: 'US Imports',
        beskrivelse: 'Sølvpil',
        pris: 'Pris 300 -.'
    },

    {
        id: 05,
        img: '/resources/media/image-projects/slipseknuden/produkter/img_05.jpg',
        tittel: 'US Imports',
        beskrivelse: 'Sølvpil',
        pris: 'Pris 300 -.'
    },


    {
        id: 06,
        img: '/resources/media/image-projects/slipseknuden/produkter/img_06.jpg',
        tittel: 'US Imports',
        beskrivelse: 'Sølvpil',
        pris: 'Pris 300 -.'
    },

    {
        id: 07,
        img: '/resources/media/image-projects/slipseknuden/produkter/img_07.jpg',
        tittel: 'Shoon Slips',
        beskrivelse: 'Klassisk Brun',
        pris: 'DKK 450 -.'
    },

    {
        id: 08,
        img: '/resources/media/image-projects/slipseknuden/produkter/img_08.jpg',
        tittel: 'Shoon Slips',
        beskrivelse: 'Klassisk Brun',
        pris: 'DKK 450 -.'
    },

    {
        id: 09,
        img: '/resources/media/image-projects/slipseknuden/produkter/img_09.jpg',
        tittel: 'Shoon Slips',
        beskrivelse: 'Klassisk Brun',
        pris: 'DKK 450 -.'
    },
];

var produkter = require('../.././public/resources/data/projects/slipseknuden/data/slipseknuden/produkter').produkter;
// /resources/js/pages/admin/admin_create_project.js
var slips = require('../.././public/resources/data/projects/slipseknuden/data/slipseknuden/slips')
// var multer = require('multer'); // v1.0.5
// var upload = multer();


module.exports = function (server) {
    server.get('/slipseknuden/produkter', function (reg, res) {

       
        res.render('pages/slipseknuden/produkter.ejs', {
            artikkel_01: artikkel_01,
        })
    })
    // produkt side
    server.get('/slipseknuden/produkt/:id', function (req, res, next) {
        server.param(['id'], function (req, res, next, value) {
            res.render('pages/slipseknuden/produkt.ejs', {
                artikkel_01: produkter[value - 1],
            });
        });
    });
    // server.get('/admin', function (req, res, next) {
    //     res.render('pages/admin', {
    //         produkter: produkter
    //     });
    // });
    // OPRET
    // server.post('/opret', upload.array(), function (req, res, next) {
    //     slips.opret(req.body)
    //     res.redirect('/admin');
    // })
    // REDIGER
    // server.get('/rediger/:id', upload.array(), function (req, res, next) {
    //     server.param(['id'], function (req, res, next, value) {
    //         res.render('pages/rediger', {
    //             produkter: produkter[value - 1],
    //         });
    //     })
    // })
    // server.post('/rediger', upload.array(), function (req, res, next) {
    //     slips.rediger(req.body)
    //     res.redirect('/admin');
    // })
    // SLET
//     server.get('/slet/:id', upload.array(), function (req, res, next) {
//         server.param(['id'], function (req, res, next, value) {
//             slips.slet(value)
//         })
//     })
}