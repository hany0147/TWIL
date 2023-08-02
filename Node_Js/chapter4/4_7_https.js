/**
 * https
 * - 웹 서버에 SSL 암호화를 추가하는 모듈
 * - 포트: 443
 */

const https = require('https');
const fs = require('fs');


// 인수가 하나 더 들어감
// 인증기관에서 인증서를 받아와야 함 (유명 무료 인증서: Let's Encrypt)
// sync 써도 되는 경우, 딱 한 번 혹은 서버 초기화 할 때
https.createServer({
  cert: fs.readFileSync('도메인 인증서 경로'),
  key: fs.readFileSync('도메인 비밀키 경로'),
  ca: [
    fs.readFileSync('상위 인증서 경로'),
    fs.readFileSync('상위 인증서 경로'),
  ],
}, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다!');
  });

/** 
 * http2
 * - SSL 암호화와 더불어 최신 HTTP 프로토콜인 http/2 를 사용하는 모듈
 * - 요청 및 응답 방식이 기존 http/1.1 보다 개선
 * - 웹의 속도 개선
 * */ 

const http2 = require('http2');
const fs = require('fs');

http2.createSecureServer({
  cert: fs.readFileSync('도메인 인증서 경로'),
  key: fs.readFileSync('도메인 비밀키 경로'),
  ca: [
    fs.readFileSync('상위 인증서 경로'),
    fs.readFileSync('상위 인증서 경로'),
  ],
}, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다!');
  });