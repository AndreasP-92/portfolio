const passport 			= require('../../middleware/passport');
const getAllWhere		= require('../services/getAllWHere');

module.exports = function (server) {

	server.get('/perfect-shoes/google/login',
		passport.authenticate('google', { scope: ['profile', 'email'] }));

	server.get('/perfect-shoes/google/callback', 
		passport.authenticate('google', { failureRedirect: '/perfect-shoes/login' }),
		async function(req, res) {
			let user				= req.session.passport.user

			const userInfo			= await getAllWhere.google(user)
			const profileInfo		= await getAllWhere.profileEmail(userInfo[0].google_mail)
			req.session.username	= profileInfo[0].profile_username;
			req.session.isLoggedIn 	= { 'id': profileInfo[0].profile_username };

			res.redirect('/perfect-shoes/profile');
		});
};
