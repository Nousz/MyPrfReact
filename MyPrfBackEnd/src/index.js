const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json()); //enviar informações para API em Json

app.use(bodyParser.urlencoded({ extended: false})); //decodar os parâmetros da URL

//referêcniar o authController
require('./controllers/authController')(app);

app.listen(3000);