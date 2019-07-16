require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

require('../app/routes/routes');
index(app);

module.exports = app;