/**
 * pipe
 * 대용량은 스트림으로 / 메모리 효율에 좋음
 */

const fs = require('fs');

const readStream = fs.createReadStream('./readme2.txt', {highWaterMark: 16});
const writeStream = fs.createWriteStream('./wirteme3.txt');
readStream.pipe(writeStream);

/**
 * 기타 fs 함수 (access, mkdif, open 등)
 */