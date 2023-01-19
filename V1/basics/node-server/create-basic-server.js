const http = require('http'); // A core module that handles server requests and responses.
const data = require('./data');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(8080); // 14