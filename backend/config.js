const config = {
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    secret: process.env.SEED || 'secret'
}

module.exports = config;