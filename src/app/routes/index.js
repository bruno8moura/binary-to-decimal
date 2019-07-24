const converter = require('../converter');

module.exports = (app) => {

    app.get('/binary-to-decimal/convert', converter.form);

    app.post('/binary-to-decimal/convert', converter.toDecimal);
};