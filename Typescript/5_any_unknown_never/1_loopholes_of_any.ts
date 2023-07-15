/**
 * Loopholes of Any
 */

let number: number;
number = 10;

// (number as any).toUpperCase();

const multiplyTwo = (x: number, y: number) => {
  return x * y;
}

let args1: any = '코드팩토리';
let args2: any = true;

// multiplyTwo(args1, args2);
// multiplyTwo('코드팩토리', args2);

let iu: any = {name: '아이유', age: 30};
// iu. -> 자동완성이 안됨

const callbackRunner = (x: number, y: number, callback: any) => {
  return callback(x, y);
}

// const callback = (x: number, y: number) => {
//   return x * y;
// }
const callback = (x: number) => {
  return x;
}

console.log(callbackRunner(5, 4, callback));

// any: 코드를 변경(리팩토링)할 때, 에러가 나는지 안나는지 알 수가 없다. 웬만해선 사용하지 않는게 좋다.