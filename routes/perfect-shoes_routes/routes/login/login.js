const User 						= require('../services/users');
const passport 					= require('../../middleware/passport');
const {validationErrors}		= require('express-validator');
const getOne					= require('../services/getOne');


module.exports = function (server) {
	server.get('/perfect-shoes/login', (req, res) => {
		let username	= 	req.session.username;

		res.render('projects/perfect-shoes/pages/login/login.ejs',{
			'username'	:	username
		});
	});

	server.get('/perfect-shoes/login/find/:user',async function(req,res){
		let User = req.params.user
		try{
			const user = await getOne.user(User);
			res.send(user)
		}catch(e){
			console.log(e)
		}

	})

	server.post('/perfect-shoes/login', passport.authenticate('local', {
		'successRedirect': '/perfect-shoes/profile',
		'failureRedirect': '/perfect-shoes/login',
		'failureFlash': true
	}));

	server.get('/perfect-shoes/logout', (req, res) => {
		req.session.destroy((err) => {
			res.redirect('/perfect-shoes/');
		});
	});
};
