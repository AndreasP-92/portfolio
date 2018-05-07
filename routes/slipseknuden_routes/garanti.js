module.exports = function (server) {
    server.get('/slipseknuden/garanti', function (req, res) {

        var img = [
            { 
                img: "/resources/media/image-projects/slipseknuden/garanti/img_01.jpg" 
            }
        ];
        var info = [
            {
                navn: "slipseknuden",
                vej: "Slipsevej 79",
                postnr: "4000 Holbæk",
                tlf: "Telefon: 5944-1234",
                mail: "slips@slipseknuden.dk",
                img: "/resources/media/image-projects/slipseknuden/garanti/img_01.jpg"
            }
        ];

        res.render('pages/slipseknuden/garanti.ejs', {
            img: img,
            info: info
        });
    })
}