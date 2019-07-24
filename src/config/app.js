require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

//pay atention the absolut path!
app.use('/static', express.static('src/public'));

const routes = require('../app/routes');
routes(app);

module.exports = app;