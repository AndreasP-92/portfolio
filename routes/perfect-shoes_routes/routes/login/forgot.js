const authenticate 	    = require('../../middleware/authenticate');
const getAll            = require('../services/getAll');
const getAllWhere       = require('../services/getAllWhere');
const getOne		    = require('../services/getOne');
const update		    = require('../services/update');
const crypto            = require('crypto');
const nodeMailer        = require('nodemailer');
const waterfall         = require('async-waterfall');
const User 			    = require('../services/users');
const sendEmail         = require('../services/sendEmail')





module.exports = (server) => {

// *********************************************************************************** MAIN ROUTE *************************************************************

    server.get('/perfect-shoes/forgot', async function(req,res){
        let username    =   req.session.username;
        try {
            res.render('projects/perfect-shoes/pages/login/forgotPass.ejs',{
                'username'  :   username
            })
        } catch (err) {
            console.log(err)
        }
    });

// FIND EMAIL ON USER ==========

    server.get('/perfect-shoes/forgot/find/:email',async function(req,res){
        let mail = req.params.email;

		try{
            let getEmail = await getOne.emailCount(mail);

			res.send(getEmail)
		}catch(e){
			console.log(e)
		}

    });

// RESET ROUTE =================
    server.get('/perfect-shoes/reset/:token', async function(req,res){
        let token = req.params.token;
        let username    = req.session.username;

        let getUserToken = await getOne.userReset(token)

        res.render('projects/perfect-shoes/pages/login/resetPass.ejs',{
            'token'     :   token,
            'username'  :   username
        })

    })
    
// *********************************************************************************** FORGOT PASS POST *************************************************************

// SEND EMAIL =================

    server.post('/perfect-shoes/authenticate/forgot/post',async function(req,res){

        async function postToken(token, date, mail){
            postToken = await update.forgotPass(token, date, mail)
        }

        waterfall([
            function (done){
                crypto.randomBytes(20, async function(err, buf){
                    var token = buf.toString('hex');
                    var mail = req.body.email;
    
                    date = Date.now() + 3600000; // 1 hour
                    postToken(token, date, mail);
                    done(err,token);

                    await sendEmail.resetPass(token, done, req)
                })
            },
        ])
        res.redirect('/perfect-shoes/')
    });

// RESET PASSWORD ===============

    server.post('/perfect-shoes/JSON/reset/:token', async function(req,res){
        token   = req.params.token;
        pass    = req.body.pass;
        confirm = req.body.confirm;

        if(pass == confirm){
            updatePass = await update.userPass(pass, token);
        }

        try {
            res.redirect('/perfect-shoes/login')
        } catch (error) {
            console.log(error)
        }
    })
}