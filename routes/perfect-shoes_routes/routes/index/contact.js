const sendEmail         = require('../services/sendEmail')

module.exports = (server) => {


    server.get('/perfect-shoes/contact',function(req,res){
        let username    =   req.session.username;

        res.render('projects/perfect-shoes/pages/index/contact.ejs',{
            'username'  :   username
        })
    })

// ******************************************************************************* POST **************************************************************************

    server.post('/perfect-shoes/send/contact', async function(req, res){
        let name    =   req.body.name;
        let mail    =   req.body.mail;
        let text    =   req.body.text;

        try {
            await sendEmail.contact(name, mail, text)
            res.redirect('/perfect-shoes/contact')
            
        } catch (error) {
            console.log(error)
        }
    })

}