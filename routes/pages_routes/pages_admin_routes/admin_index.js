module.exports = function (server) {

    // **************************************************** ADMIN SITE ************************************************************

    server.get('/authenticate/admin/', function (req, res) {
// REQUIRE LOGIN ==============================================
        var user = req.session.user;
		var userId = req.session.userId;
		console.log(`Debug: Session.userID is ${userId}`);

        if (userId == null) {
			res.redirect("/login");
			return;
		}
            res.render('pages/admin/index-ad.ejs')
        }
    );
}