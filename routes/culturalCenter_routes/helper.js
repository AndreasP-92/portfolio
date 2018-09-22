module.exports = function(server){
    console.log('helper læst')

// CLIENT ROUTES ======================================

    require('./pages_routes/site/home')(server);
    require('./pages_routes/site/aktiviteter')(server);
    require('./pages_routes/site/bestilling')(server);
    require('./pages_routes/site/nyheder')(server);
    require('./pages_routes/site/kontakt')(server);

// ADMIN ROUTES =======================================

    require('./pages_routes/admin/home')(server)
    require('./pages_routes/admin/category')(server);
    require('./pages_routes/admin/activity_update')(server)
    require('./pages_routes/admin/activity_create')(server)
    require('./pages_routes/admin/activity_create_image_upload')(server)
    require('./pages_routes/admin/news_create')(server)

    // LOGIN ROUTE ========================================

    require('./pages_routes/login/login')(server)
}
