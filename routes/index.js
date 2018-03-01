module.exports = (server) => {
    // HIFI

    require('./hifi_routes/index')(server)

    // TEST

    // require('./test')(server)

    // HOME

    require('./pages_routes/home')(server)
    require('./pages_routes/dropDown')(server)
}