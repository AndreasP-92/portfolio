module.exports = function (app) {
    app.get('/garanti', function (req, res) {

        var img = [
            { 
                img: "images/garanti/img_01.jpg" 
            }
        ];
        var info = [
            {
                navn: "slipseknuden",
                vej: "Slipsevej 79",
                postnr: "4000 Holbæk",
                tlf: "Telefon: 5944-1234",
                mail: "slips@slipseknuden.dk",
                img: "images/garanti/img_01.jpg"
            }
        ];

        res.render('pages/garanti', {
            img: img,
            info: info
        });
    })
}