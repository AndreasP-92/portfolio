module.exports = (app) => {
    require('./produkt')(app);
    // require('./admin')(app);
    require('./login')(app);
    require('./admin_02')(app);
};