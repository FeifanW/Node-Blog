const http = require('http');

const server = http.createServer((req, res) => {
  // 模拟日志
  console.log('cur time', Date.now());
  // 模拟错误
  console.error('假装出错', Date.now());
  res.setHeader('Content-type', 'application/json');
  res.end(
    JSON.stringify({
      errno: 0,
      msg: 'pm2 test server 3',
    })
  );
});

server.listen(8000);
console.log('server is listening on port 8000...');

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type': 'application/json' });
  res.end(
    JSON.stringify({
      errno: 0,
      msg: 'test server',
    })
  );
});
server.listen(8000);
