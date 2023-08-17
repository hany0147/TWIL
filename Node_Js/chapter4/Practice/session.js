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

const session = {};

http.createServer(async (req, res) => {
  const cookies = parseCookies(req.headers.cookie);

  if (req.url.startsWith('/login')) {
    const url = new URL(req.url, 'http://localhost:8085');
    const name = url.searchParams.get('name');
    const expires = new Date();
    expires.setMinutes(expires.getMinutes() + 5);
    const uniqueInt = Date.now();
    session[uniqueInt] = {
      name,
      expires,
    };
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();
  } else if (cookies.session && session[cookies.session].expires > new Date()) {
    res.writeHead(200, {'content-type': 'text/plain; charset=utf-8'});
    res.end(`${session[cookies.session].name}님 안녕하세요`);
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
  .listen(8085, () => {
    console.log('8085번 서버~')
  })


  // 실제 배포용 서버에서는 세션을 위와 같이 변수에 저장하지 않는다.
  // 서버가 멈추거나 재시작되면 메모리에 저장된 변수가 초기화되기 때문
  // 또한 서버의 메모리가 부족하면 세션을 저장하지 못하는 문제도 발생
  // 그래서 보통 레디스나 멤캐시드 같은 DB에 넣어둠