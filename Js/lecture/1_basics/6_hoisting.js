/**
 * Hoisting
 */
console.log('hello');
console.log('world');

console.log(name);
var name = '코드팩토리';
console.log(name);
console.log('-------------------------');

console.log(test4);
const test4 = '얍';
console.log(test4);

/**
 * Hoisting은 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 * 
 * let과 const도 hoisting이 된다.
 * 다만 var는 hoisting 버그를 방지하지 못하는 반면, let과 const는 방지한다.
 */