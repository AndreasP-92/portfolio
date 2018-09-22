module.exports = (server) => {
    require('./produkt')(server);
    // require('./admin')(server);
    require('./login')(server);
    require('./admin_02')(server);
};