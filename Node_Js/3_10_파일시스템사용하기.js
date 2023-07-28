/**
 * fs
 * 
 * 파일 시스템에 접근하는 모듈
 * 
 * 파일/폴더 생성, 삭제, 읽기, 쓰기 가능(CRUD)
 */

const fs = require('fs').promises;
// const fs = require('fs');

// fs.readFile('./readme.txt')
//   .then((data) => {
//     console.log(data);
//     console.log(data.toString());
//   })
//   .catch((err) => {
//     throw err;
//   });

// fs.writeFile('./writeme.txt', '글을 입력합니다.')
// .then(() => {
//   return fs.readFile('./writeme.txt');
// })
// .then((data) => {
//   console.log(data.toString());
// })
// .catch((err) => {
//   throw err;
// });  

// fs.readFile('./readme.txt', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log('1번', data.toString());
// });
// fs.readFile('./readme.txt', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log('2번', data.toString());
// });
// fs.readFile('./readme.txt', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log('3번', data.toString());
// });
// fs.readFile('./readme.txt', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log('4번', data.toString());
// });

// 비동기함수임. 백그라운드에 가서 동시에 실행되기 때문에 제멋대로 나옴 (순서 보장이 안됨)

// let data = fs.readFileSync('./readme.txt');
// // 딱한번 실행하거나 서버초기화 작업할 때 쓰는게 좋다. 서버 이후에는 동기 코드는 비추한다.
// console.log('1번', data.toString());
// data = fs.readFileSync('./readme.txt');
// console.log('2번', data.toString());
// data = fs.readFileSync('./readme.txt');
// console.log('3번', data.toString());
// data = fs.readFileSync('./readme.txt');
// console.log('4번', data.toString());
// console.log('=========================')

fs.readFile('./readme.txt', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('1번', data.toString());

  fs.readFile('./readme.txt', (err, data) => {
    if (err) {
      throw err;
    }
    console.log('2번', data.toString());

    fs.readFile('./readme.txt', (err, data) => {
      if (err) {
        throw err;
      }
      console.log('3번', data.toString());

      fs.readFile('./readme.txt', (err, data) => {
        if (err) {
          throw err;
        }
        console.log('4번', data.toString());
      })
    })
  })
});

fs.readFile('./readme.txt')
  .then((data) => {
    console.log('1번', data.toString());
    return fs.readFile('./readme.txt');
  })
  .then((data) => {
    console.log('2번', data.toString());
    return fs.readFile('./readme.txt');
  })
  .then((data) => {
    console.log('3번', data.toString());
    return fs.readFile('./readme.txt');
  })
  .then((data) => {
    console.log('4번', data.toString());
    return fs.readFile('./readme.txt');
  })
  .catch((err) => {
    throw err;
  });


  async function main() {
    let data = await fs.readFile('./readme.txt');
    console.log('1번', data.toString());
    data = await fs.readFile('./readme.txt');
    console.log('2번', data.toString());
    data = await fs.readFile('./readme.txt');
    console.log('3번', data.toString());
    data = await fs.readFile('./readme.txt');
    console.log('4번', data.toString());
  }
main();

// 비동기로 하되, 순서도 지키는 게 좋음