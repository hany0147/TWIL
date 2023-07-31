/**
 * this 
 */

console.log(this); // 빈 객체
console.log(this === module.exports);

function a() {
  console.log(this === global);
} // 함수 안 this는 global

a();

/**
 * require
 */
require('./3_2_module_system');
console.log(require);

// 한 번 실행하면 캐쉬에 저장함

/**
 * 순환참조
 * 서로 참조하는 것 => 이를 방지하기 위해서 저런 상황이 나타나면 빈 객체로 바꿔버림
 */