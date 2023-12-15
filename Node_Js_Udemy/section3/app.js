const http = require('http');

const routes = require('./routes');
const server = http.createServer(routes.handler); // createServer 콜백함수

server.listen(3000);

/**
 * Node.js Program Lifecycle
 * 
 * 이벤트 루프: 작업이 남아 있는 한 계속해서 작동하는 루프 프로세스
 * - Timers
 * - Pending Callbacks
 * - Poll (새로운 I/O 이벤트)
 * - Check(setImmediate())
 * - close Callbacks
 * - process.exit (if refs==0)
 */