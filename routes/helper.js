module.exports = (server) => {

    // HOME
    require('./pages_routes/home')(server)

    // PAGES DANISH ROUTES

    require('./pages_routes/pages_danish_routes/ejsProjects.js')(server)
    require('./pages_routes/pages_danish_routes/ongoingProjects.js')(server)
    require('./pages_routes/pages_danish_routes/reactProjects.js')(server)

    // PAGES ENGLISH ROUTES

    require('./pages_routes/pages_english_routes/ejsProjects.js')(server)
    require('./pages_routes/pages_english_routes/ongoingProjects.js')(server)
    require('./pages_routes/pages_english_routes/reactProjects.js')(server)

    // PAGES ADMIN ROUTES

    require('./pages_routes/pages_admin_routes/admin_upload_project.js')(server)
    // require('./pages_routes/pages_admin_routes/admin_index.js')(server)
    // require('./pages_routes/pages_login_routes/login.js')(server)

    //********************************************************** SLIPSEKNUDEN ****************************************
    require('./slipseknuden_routes/index.js')(server)
    require('./slipseknuden_routes/ansatte.js')(server)
    require('./slipseknuden_routes/garanti.js')(server)
    require('./slipseknuden_routes/nyheder.js')(server)
    require('./slipseknuden_routes/produkter.js')(server)

    // ************************************************************* HIFI ********************************************

    require('./hifi_routes/admin_02.js')(server)
    require('./hifi_routes/index.js')(server)
    require('./hifi_routes/login.js')(server)
    require('./hifi_routes/produkt.js')(server)

    // ************************************************************* Cultural Center ********************************************

    require('./culturalCenter_routes/helper.js')(server)

    // ************************************************************* WEB SHOP ********************************************

    require('./perfect-shoes_routes/routes/helper')(server)


}