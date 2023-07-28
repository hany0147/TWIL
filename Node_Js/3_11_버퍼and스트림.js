/**
 * 버퍼: 일정한 크기로 모아두는 데이터
 * - 일정한 크기가 되면 한 번에 처리
 * 스트림: 데이터의 흐름
 * - 버퍼의 크기를 작게 만들어 주기적으로 데이터를 전달
 * - 일정한 크기로 나눠서 여러 번에 걸쳐서 처리
 */
// 버퍼
// const buffer = Buffer.from('저를 버퍼로 바꿔보세요');
// console.log(buffer);
// console.log(buffer.length);
// console.log(buffer.toString());

// const arr = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];
// console.log(Buffer.concat(arr).toString());

// console.log(Buffer.alloc(5)); // 빈 버퍼 생성, 5바이트짜리를 생성함

// 스트림
const fs = require('fs');
const readStream = fs.createReadStream('./readme2.txt', { highWaterMark: 16 });
const data = [];
readStream.on('data', (chunk) => {
  data.push(chunk);
  console.log('data: ', chunk, chunk.length);
})
readStream.on('end', () => {
  console.log('end: ', Buffer.concat(data).toString());
})
readStream.on('error', (err) => {
  console.log('error:', err);
})

// 스트림(쓰기)
const writeStream = fs.createWriteStream('./writeme2.txt');
writeStream.on('finish', () => {
  console.log('파일쓰기완료');
});
writeStream.write('이 글을 씁니다. \n');
writeStream.write('한 번 더 씁니다.');
writeStream.end();