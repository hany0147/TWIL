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
  const cookies = parseCookies(req.headers.cookie); // {mycookie : test}
  // 주소가 /login으로 시작하는 경우
  if (req.url.startsWith('/login')) {
    const url = new URL(req.url, 'http://localhost:8084');
    const name = url.searchParams.get('name');
    const expires = new Date();
    // 쿠키 유효시간을 현재시간 +5분으로 설정
    // 유효기간 설정을 안하면 세션 쿠기가 됨 -> 창을 끄면 사라짐
    // 보안 위협 때문에 httpOnly(특히 로그인 때는 필수) -> 자바스크립트로 접근하는 걸 방지하는 보안목적
    expires.setMinutes(expires.getMinutes() + 5);

    // 302 -> redirect
    res.writeHead(302, {
      Location: '/',
      'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
    });
    res.end();

  // name이라는 쿠기가 있는 경우
  } else if (cookies.name) {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end(`${cookies.name}님 안녕하세요`);
  } else {
    try {
      const data = await fs.readFile(path.join(__dirname, 'cookie2.html'));
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(err.message);
    }
  }
})
  .listen(8084, () => {
    console.log('8084번 포트에서 서버 대기 중입니다!')
  });