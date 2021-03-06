const { conn } = require('./src/db.js');
const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./src/routes/index.js');
const errorHandler = require ('./src/utils/middlewares/errorHandler.js');
const setHeaders = require ('./src/utils/middlewares/setHeaders.js');
const {PORT} =  require('./src/utils/config/index.js');
const server = express();

server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev')); //responde en consola cuando hay una request
server.use(setHeaders);

server.use('/', routes);

// Error catching endware.
server.use(errorHandler);
// Syncing all the models at once.
conn.sync({ force: true })
.then(() => {
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`); // eslint-disable-line no-console
  });
});

module.exports = server