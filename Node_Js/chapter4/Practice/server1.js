const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>'); // 응답을 종료하는 메서드 : 만약 인수가 있다면 해당 데이터도 클라이언트에 보내고 응답 종료
})
  .listen(8080, () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');
  })

  // 포트: 서버 내에서 프로세스를 구분하는 번호