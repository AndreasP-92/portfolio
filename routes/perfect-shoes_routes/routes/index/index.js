const getAll            = require('../services/getAll');
const getAllWhere       = require('../services/getAllWHere');

module.exports = (server) => {


    server.get('/perfect-shoes', async function(req,res){
        let username    =   req.session.username;

        try {
            const menShoes      = await getAllWhere.shoesWithLimit(1)
            const womenShoes    = await getAllWhere.shoesWithLimit(2)

            res.render('projects/perfect-shoes/pages/index/index.ejs',{
                'menShoes'      :   menShoes,
                'womenShoes'    :   womenShoes,
                'username'      :   username
    
            })
            
        } catch (error) {
            console.log(error)   
        }
    })

}