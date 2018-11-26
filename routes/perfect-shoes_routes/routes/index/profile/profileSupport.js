const authenticate 	= require('../../../middleware/authenticate');
const insert        = require('../../services/insert');
const getAllWhere	= require('../../services/getAllWHere');

module.exports = function (server) {
	server.get('/perfect-shoes/profile/support', authenticate, async (req, res) => {
		let username = req.session.username

		const getMessage = await getAllWhere.supportMessage(username)

		try {
			
			res.render('projects/perfect-shoes/pages/index/profile/dashboard.ejs',{
				'page' 		:	'support',
				'message'	:	getMessage,
				'username'	:	username
			});
		} catch (err) {
			console.log(err)
		}
	});

	// ********************************************************************** POST **********************************************************

	server.post('/perfect-shoes/JSON/upload/messages', authenticate, async (req, res) => {
		let username = req.session.username
		let text		= req.body.text;

		try {
			await insert.supportTicket(text, username)
			res.redirect('/perfect-shoes/profile/support')
			
		} catch (error) {
			console.log(error) 
		}
	});

	
};