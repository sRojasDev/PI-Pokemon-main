const express = require('express');
const cookieParser = require('cookie-parser');
//const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const errors = require('../config/middlewares/errors'); 
const setHeaders = require('../config/middlewares/headers');
require('./db.js');

const server = express();

server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev')); //mostrar datos de solicitudes  
server.use(setHeaders); // setear headers 

server.use('/', routes);

// Error catching endware.
server.use(errors);  //control de errores

module.exports = server;
