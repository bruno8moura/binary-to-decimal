const converter = require('../converter');

module.exports = (app) => {

    app.get('/convert', converter.form);

    app.post('/convert', converter.toDecimal);
};