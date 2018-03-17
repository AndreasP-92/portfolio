module.exports = function (app) {
    app.get('/om', function (reg, res) {

        var artikkel_01 = [
            {   id : 01,
                img: 'images/ansatte/img_01.jpg',
                navn: 'Anders Hansen' ,
                job: 'Direktør' ,
                email: 'chefen@slipseknuden.eu' },

            {   id : 02,
                img: 'images/ansatte/img_02.jpg',
                navn: 'Jan Fransen',
                job: 'Sælger' ,
                email: 'jf@slipseknuden.eu' },

            {   id : 03,
                img: 'images/ansatte/img_03.jpg',
                navn: 'Annelise Johnson',
                job: 'sekretær' ,
                email: 'info@slipseknuden.eu' }

            
        ];

        res.render('pages/om', {
            artikkel_01: artikkel_01,
        })
    })
}
