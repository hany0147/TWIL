/**
 * 요청은 한 가지 단점이 있음
 * -> 서버는 누가 요청을 보냈는지 모름(ip주소와 브라우저 정보 정도만 앎)
 * -> 로그인 구현해야 함
 * -> 쿠키와 세션이 필요
 */

/**
 * 쿠키: 키 = 값의 쌍
 * ex) name = zerocho
 * 매 요청마다 서버에 동봉해서 보냄
 * 서버는 쿠키를 읽어 누군ㅇ지 파악
 */

const http = require('http');

http.createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, {
        'Set-Cookie': 'mycookie=test'
    });
    res.end('Hello Cookie');
})
    .listen(8083, () => {
        console.log('8083번 포트에서 서버 대기중입니다!')
    })

/**
 * favicon.ico는 크롬이 알아서 보내는 거라 무시하면 됨.
 */

/**
 * 헤더와 본문
 * 요청이나 응답 모두 헤더와 데이터(바디)로 구성되어 있다.
 * 쿠키도 부가적인 정보이므로 헤더에 저장
 */

/**
 * 쿠키의 정보는 노출되고 수정되는 위험이 있음
 * 중요한 정보는 서버에서 관리, 클라이언트에는 세션 키만 제공
 * -> 서버에 세션 객체(session) 생성 후, uniqulent(키)를 만들어 속성명으로 사용
 */