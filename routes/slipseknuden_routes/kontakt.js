module.exports = function (app){
    app.get('/kontakt',function(req,res){
        res.render('pages/kontakt')
    })
}