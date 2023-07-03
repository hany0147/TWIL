/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다
 * 2) 객체는 copy by reference다
 */

let original = '안녕하세요';
let clone = original;
console.log(original, clone);

clone += ' 안유진입니다.';
console.log(original, clone);

let originalObj = {
  name: '안유진',
  group: '아이브',
}

let cloneObj = originalObj;

console.log(originalObj, cloneObj);

originalObj['group'] = '코드팩토리';

console.log(originalObj, cloneObj);

/**
 * Spread Operator
 * 
 * 값을 복사함
 */

yuJin3 = {
  name: '안유진',
  group: '아이브',
}
const yuJin4 = {
  ...yuJin3,
}

console.log(yuJin4);

console.log(yuJin4 === yuJin3);

const yuJin5 = {
  year: 2003,
  ...yuJin3,
}

