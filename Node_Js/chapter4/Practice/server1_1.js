const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/html; charset=utf8'});
  res.write('<h1>안녕!</h1>');
  res.end('<p> 빠이! </p>');
});

server.listen(8081);

server.on('listening', () => {
  console.log('8081 포트에서 서버 대기 중입니다.');
});

server.on('error', (err) => {
  console.error(err);
});