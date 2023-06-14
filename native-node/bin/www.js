const http = require('http');
const PORT = 8000;
const serverHandle = require('../app');
const querystring = require('querystring');

const server = http.createServer(serverHandle);

server.listen(PORT);
console.log('http:localhost:8000');
