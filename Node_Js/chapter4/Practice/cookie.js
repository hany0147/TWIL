const http = require('http');

http.createServer((req, res) => {
  console.log(`url: ${req.url}, cookie: ${req.headers.cookie}`);
  res.writeHead(200, {'Set-cookie': 'mycookie=test', 'content-type': 'text/plain; charset=utf-8'});
  res.end('안뇽 쿠키야~');
})
  .listen(8083, () => {
    console.log('8083 서버열어~');
  });