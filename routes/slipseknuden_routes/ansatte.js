module.exports = function (server) {
    server.get('/slipseknuden/om', function (reg, res) {

        var artikkel_01 = [
            {   id : 01,
                img: '/resources/media/image-projects/slipseknuden/ansatte/img_01.jpg',
                navn: 'Anders Hansen' ,
                job: 'Direktør' ,
                email: 'chefen@slipseknuden.eu' },

            {   id : 02,
                img: '/resources/media/image-projects/slipseknuden/ansatte/img_02.jpg',
                navn: 'Jan Fransen',
                job: 'Sælger' ,
                email: 'jf@slipseknuden.eu' },

            {   id : 03,
                img: '/resources/media/image-projects/slipseknuden/ansatte/img_03.jpg',
                navn: 'Annelise Johnson',
                job: 'sekretær' ,
                email: 'info@slipseknuden.eu' }

            
        ];

        res.render('pages/slipseknuden/om.ejs', {
            artikkel_01: artikkel_01,
        })
    })
}
