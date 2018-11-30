const authenticate 		= require('../../../middleware/authenticate');
const getAllWhere       = require('../../services/getAllWhere');
const update            = require('../../services/update');

module.exports = function (server) {


	server.get('/perfect-shoes/profile/favorites', async (req, res) => {
        let username = req.session.username;
        // let username = 'admin';

        var getFavorites    =   await getAllWhere.favorites(username);

        getProducts = []

        console.log(getFavorites[0].profile_favorites)
        if(getFavorites[0].profile_favorites != ""){
            var getProducts     =   await getAllWhere.favoriteProducts(getFavorites[0].profile_favorites)
        }

        
        try {
            res.render('projects/perfect-shoes/pages/index/profile/dashboard.ejs',{
                'page'      :   'favorites',
                username    :   username,
                allProducts :   getProducts
            })
        } catch (error) {
            console.log(error)
        }
        
    })

// ******************************************************************************* POST ****************************************************************

    // INSERT FAVORITE ------------------------------

    server.post('/perfect-shoes/favorite/:id', async (req,res)=>{
        let product_id  =   req.params.id;
        let username    =   req.session.username;

        let getFavorites    = await getAllWhere.favorites(username);
        
        let favoritesArray = [product_id]
        favoritesArray.push(getFavorites[0].profile_favorites)

        await update.favorites(username, favoritesArray)

        res.redirect('/perfect-shoes/shop/0/0')


    })
}