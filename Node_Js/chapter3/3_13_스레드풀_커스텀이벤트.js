/**
 * 스레드풀
 */

const crypto = require('crypto');
const pass = 'pass';
const salt = 'salt';
const start = Date.now();

crypto.pbkdf2(pass, salt, 1000_000, 128, 'sha512', () => {
  console.log('1', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1000_000, 128, 'sha512', () => {
  console.log('2', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1000_000, 128, 'sha512', () => {
  console.log('3', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1000_000, 128, 'sha512', () => {
  console.log('4', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1000_000, 128, 'sha512', () => {
  console.log('5', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1000_000, 128, 'sha512', () => {
  console.log('6', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1000_000, 128, 'sha512', () => {
  console.log('7', Date.now() - start);
})
crypto.pbkdf2(pass, salt, 1000_000, 128, 'sha512', () => {
  console.log('8', Date.now() - start);
})

// 4개씩 동시에 돌림
// 자신의 코어 개수에 맞게 변경해주는 게 있음 -> 터미널에 SET UV_THREADPOOL_SIZE=숫자

/**
 * 커스텀 이벤트
 */
const EventEmitter = require('events');
