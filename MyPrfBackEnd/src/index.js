const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json()); //enviar informações para API em Json

app.use(bodyParser.urlencoded({ extended: false})); //decodar os parâmetros da URL

//referêcniar o authController

console.log('Rodando esse carai');

app.listen(3000);

app.use(cors());

require('./controllers/authController')(app);