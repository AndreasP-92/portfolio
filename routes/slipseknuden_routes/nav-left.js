module.exports = function (app) {
    app.get('/produkter/nav', function (reg, res) {

        var image = [
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
        ]
        res.render('pages/slipseknuden/nav-left_02', {
            image : image,
        })
    })
}