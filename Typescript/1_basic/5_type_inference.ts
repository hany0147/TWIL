/**
 * Type Inference
 * 
 * 타입 추론
 */
let stringType = 'string';
let booleanType = true;
let numberType = 30;

booleanType = false;
// booleanType = 'false';

const constStringType = 'const string';
const constBooeleanType = true;

let yujin = {
  name: '안유진',
  age: 2003,
}

const yujin2 = {
  name: '안유진',
  age: 2003,
};

yujin2.name = '코드팩토리';
console.log(yujin2);

const yujin3 = {
  name: '안유진' as const,
  age: 2003 as const,  
}

// yujin3.name = '코드팩토리'; (불가능)

console.log(yujin3.name);

/**
 * Array
 */

let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, '4', '5', '6'];

numbers.push(6);
// numbers.push('6');
const number = numbers[0];
const nos = numbersAndString[0];
const nos2 = numbersAndString[6];
// console.log(nos2)
// 인덱스 범위를 넘었는지 알지를 못해서 버그가 날 수 있는 상황임. 이 때 튜플을 쓴다면? 방지가능

// tuple
const twoNumbers = [1, 3] as const;

// twoNumbers[0] = 10;
// twoNumbers.push(100);
const first = twoNumbers[0];
// const first2 = twoNumbers[3];


