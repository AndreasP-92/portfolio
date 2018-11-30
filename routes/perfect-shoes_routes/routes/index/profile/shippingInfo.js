const authenticate 	= require('../../../middleware/authenticate');
const getAllWhere	= require('../../services/getAllWhere');
const insert        = require('../../services/insert');
const update        = require('../../services/update');


module.exports = function (server) {
	server.get('/perfect-shoes/profile/shippinginfo', authenticate, async (req, res) => {
		let username = req.session.username;

		const getUserInfo = await getAllWhere.shippinginfo(username);

		try {
			res.render('projects/perfect-shoes/pages/index/profile/dashboard.ejs',{
				'page' 	    : 	'shippingInfo',
                'user'	    :	getUserInfo[0],
                'username'  :   username
			});
			
		} catch (error) {
			
		}
    });
    
// ********************************************************************** POST **********************************************************

    server.post('/perfect-shoes/JSON/post/shippingInfo', authenticate, async (req, res) => {
        let adress      = req.body.adress;
        let adress2     = req.body.adress2;
        let zip         = req.body.zip;
        let city        = req.body.city;
        let country     = req.body.country;
        let user        = req.session.username


        try {
            await update.shippingInfo(adress, adress2, zip, city, country, user)
            res.redirect('/perfect-shoes/profile/shippinginfo')
            
        } catch (error) {
        console.log(error) 
        }
    });
};