module.exports = function (app) {
    app.get('/produkter/nav', function (reg, res) {

        var image = [
            {
                id: 01,
                img: 'images/produkter/img_01.jpg',
                tittel: 'Shoon Slips',
                beskrivelse: 'Klassisk Brun',
                pris: 'DKK 450 -.'
            },

            {
                id: 02,
                img: 'images/produkter/img_02.jpg',
                tittel: 'Shoon Slips',
                beskrivelse: 'Klassisk Brun',
                pris: 'DKK 450 -.'
            },
        ]
        res.render('pages/partials/nav-left_02', {
            image : image,
        })
    })
}