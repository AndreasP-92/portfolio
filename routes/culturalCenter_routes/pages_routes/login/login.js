const db            = require('../../../.././config/sql').connect_culturalCenter();


module.exports = function (server) {

	server.get('/culturalcenter/login', function (req, res) {
		res.render('pages/culturalcenter/pages/login/login.ejs');
	});

	
	// ================================================================


	server.post('/culturalcenter/login', function (req, res) {

		var message = '';
		var sess = req.session;

		var post = req.body;
		var name = post.user_name;
		var pass = post.password;

		var sql =`
			SELECT
				id,
				first_name,
				last_name,
				user_name
			FROM tb_users
			WHERE
				user_name = ? AND password = ?
		`;

		db.query(sql, [name, pass], function (err, results) {
			if (results.length) {
				req.session.userId = results[0].id;
				req.session.user = results[0];
				console.log(results[0].id);
				res.redirect('/culturalcenter/dashboard');
			}
			else {
				message = 'Wrong credentials.';
				res.render('pages/culturalcenter/pages/login/login.ejs', { message: message });
			}
		});
	});

	
	// ================================================================


	server.get('/culturalcenter/logout', function (req, res) {
		req.session.destroy(function (err) {
			res.redirect("/culturalcenter");
		});
	});

	
	// ================================================================


	server.get('/culturalcenter/signup', function (req, res) {
		res.render('pages/culturalcenter/pages/login/signup.ejs');
	});

	
	// ================================================================


	server.post('/culturalcenter/signup', function (req, res) {
		var message = '';
		var post 	= req.body;
		var name 	= post.user_name;
		var pass 	= post.password;
		var fname 	= post.first_name;
		var lname 	= post.last_name;
		var mob 	= post.mob_no;
		var mail	= post.user_mail;

		// TODO: Tilføj validering af resten af de indtastede oplysninger!

		if (name != "" && pass != "" && mail !="") {
		
			var sql = `
				INSERT INTO tb_users
				SET
					first_name = ?,
					last_name = ?,
					mob_no = ?,
					user_mail = ?,
					user_name = ?,
					password = ?
				`;

			db.query(sql, [fname, lname, mob, mail, name, pass], function (err, result) {
				if (err) {
					console.log ("signup error: " + err);
				}
				else {
					message = "Succesfully! Your account has been created.";
					res.render('pages/culturalcenter/pages/login/signup.ejs', {
						message: message,
						messageType: "alert-success",
						showForm: false
					});
				}

			});
		}
		else {
			message = "Username and password are required!";
			res.render('pages/culturalcenter/pages/login/signup.ejs', {
				message: message,
				messageType: "alert-danger"
			});
		}
	});

	
	// ================================================================

	
	server.get('/culturalcenter/dashboard', function (req, res) {

		var user = req.session.user;
		var userId = req.session.userId;
		console.log(`Debug: Session.userID is ${userId}`);

		if (userId == null) {
			res.redirect("/culturalcenter/login");
			return;
		}

		var sql = "SELECT * FROM tb_users WHERE id = ?";

		db.query(sql, [userId], function (err, results) {
			// console.log(results)
			res.render('pages/culturalcenter/pages/login/dashboard.ejs', {
				user: results
			});
		});
	});
// SUBSCRIBE TO NEWSLETTER ========================================
	server.post('/json/login/newsletter/:id',function(req,res){
		let user_id				= req.params.id;
			// console.log('user id : ',user_id)
		let sql = `
		UPDATE 
			tb_users
		SET 
			newsletter			= '1'
		WHERE
			id					= '${user_id}'
		`
		// console.log('SQL ======== ', sql, '=============')
		db.execute(sql,function(err,rows){
			if(err){
				console.log(err)
			}else{
				res.redirect('/culturalcenter/profile')
				
			}
		})
	})
// UNSUB TO NEWSLETTER ========================================
	server.post('/json/login/newsletter/unsub/:id',function(req,res){
		let user_id				= req.params.id;
			// console.log('user id : ',user_id)
		let sql = `
		UPDATE 
			tb_users
		SET 
			newsletter			= '0'
		WHERE
			id					= '${user_id}'
		`
		// console.log('SQL ======== ', sql, '=============')
		db.execute(sql,function(err,rows){
			if(err){
				console.log(err)
			}else{
				res.redirect('/culturalcenter/profile')
				
			}
		})
	})
	
	// ================================================================


	server.get('/culturalcenter/profile', function (req, res) {

		var userId = req.session.userId;
		if (userId == null) {
			res.redirect("culdutralcenter/login");
			return;
		}

		var sql = "SELECT * FROM tb_users WHERE id = ?";
		db.query(sql, [userId], function (err, result) {
			console.log(result)
			res.render('pages/culturalcenter/pages/login/profile.ejs', {
				user: result
			});
		});
	});
	
	// ================================================================


} // End of: module.exports
