const http = require('http');
const port = 8080;
const app = require('./app');
const db = require('./config/db-connect');

const server = http.createServer(app);

server.listen(port);


