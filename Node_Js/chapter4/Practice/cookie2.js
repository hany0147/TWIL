const http = require('http');
const fs = require('fs').promises;
const path = require('path');

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie);

  if (req.url.startsWith('/login')) {
    const url = new URL(req.url, 'http://localhost:8084');
    const name = url.searchParams.get('name');
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 5);

    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
  } else if (cookies.name) {
    res.writeHead(200, {'content-type': 'text/plain; charset=utf-8'});
    res.end(`${cookies.name}님 안녕하세요`);
  } else {
    try {
      const data = await fs.readFile(path.join(__dirname, 'cookie2.html'));
      res.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
      res.end(data);
    } catch (err) {
      res.writeHead(200, {'content-type': 'text/plain; charset=utf-8'});
      res.end(err.message);
    }
  }
})
  .listen(8084, () => {
    console.log('8084번 서버~')
  })
