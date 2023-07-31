// 노드로 http 서버 만들기

const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
    try {
        res.writeHead(200, { 'content-Type': 'text/html; charset=utf-8' });
        const data = await fs.readFile('./server.html');
        res.end(data);
    } catch (err) {
        console.error(err);
        res.writeHead(200, { 'content-Type': 'text/plain; charset=utf-8' });
        res.end(err.message);
    }
})
    .listen(8080);
server.on('listening', () => {
    console.log('8080번 포트에서 서버 대기 중입니다.');    
});
server.on('error', (error) => {
    console.error(error);
})

// 포트: 하나의 프로그램이라 생각하면 편함 -> 똑같은 도메인(호스트)으로 여러 포트로 여러 개를 연결 시킬 수 있음.

// 변동사항을 반영하려면 서버를 껐다가 켜야 함(컨트롤 + c)

// const server2 = http.createServer((req, res) => {
//     res.writeHead(200, { 'content-Type': 'text/html; charset=utf-8' });
//     res.write('<h1>hello node!</h1>');
//     res.write('<p>hello server</p>');
//     res.end('<p>hello everybody!</p>');
// })
//     .listen(8081);