const authenticate 	= require('../../../middleware/authenticate');
const getAllWhere	= require('../../services/getAllWHere');
const update		= require('../../services/update');


module.exports = function (server) {
	server.get('/perfect-shoes/profile', authenticate, async (req, res) => {
		let username 		= 	req.session.username;
		let googleProfile	=	false;

		const getUserInfo 	= await getAllWhere.profile(username); 
		const validateUser	= await getAllWhere.countGoogleUsers(username)

		console.log(validateUser)

		if(validateUser[0].google_displayname <=1){
			googleProfile = true;
		}

		console.log(googleProfile)

		try {
			res.render('projects/perfect-shoes/pages/index/profile/dashboard.ejs',{
				'page' 			: 	'yourProfile',
				'user'			:	getUserInfo[0],
				'username'		:	username,
				'googleProfile'	:	googleProfile
			});
			
		} catch (error) {
			console.log(error)
		}
	});
// ********************************************************************** POST **********************************************************

// CHANGE PROFILE INFO ==========
	server.post('/perfect-shoes/JSON/post/profileinfo', authenticate, async (req, res) => {
		// let username	= 'admin';
		let username 	= req.session.username
		let firstname	= req.body.name;
		let lastname	= req.body.lastname;
		let email		= req.body.email;

		try {
			await update.profileInfo(username, firstname, lastname, email)
			res.redirect('/perfect-shoes/profile')
			
		} catch (error) {
			console.log(error) 
		}
	});

// CHANGE PASSWORD ============
	server.post('/perfect-shoes/JSON/post/profilepassword', authenticate, async (req, res) => {
		let username 	= req.session.username
		let password	= req.body.password;

		try {
			await update.profilePassword(username, password)
			res.redirect('/perfect-shoes/profile')
			
		} catch (error) {
			console.log(error) 
		}
	});
};