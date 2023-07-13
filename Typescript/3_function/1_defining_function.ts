/**
 * Defining Function
 */

function printName(name: string){
  console.log(name);
}

function returnTwoCouples(person1: string, person2: string){
  return `${person1}과 ${person2}는 사귀고 있습니다.`
}

console.log(returnTwoCouples('아이유', '코트팩토리'));

/**
 * Optional Parameter
 */

function multiplyOrReturn(x: number, y?: number){
  if (y) {
    return x * y;
  }else{
    return x;
  }
}

console.log(multiplyOrReturn(1));
console.log(multiplyOrReturn(12, 30));

function multiplyOrReturn2(x: number, y: number = 20){
  return x * y;
}

console.log(multiplyOrReturn2(10));
console.log(multiplyOrReturn2(10, 30));

/**
 * 나머지 매개변수
 */

function getInfiniteParameters(...args: string[]){
  return args.map((x) => `너무 좋아. ${x}`);
}

console.log(getInfiniteParameters('아이유', '레드벨벳', '아이브'));

/**
 * Return Type
 */
function addTwoNumbers(x: number, y: number){
  return x + y;
}

addTwoNumbers(10, 20); // 반환 타입을 유추해서 알려줌


function randomNumber(){
  return Math.random() > 0.5 ? 10 : '랜덤';
}

randomNumber();


// return 타입 명시적으로 지정하기

function substractTwoNumbers(x: number, y: number): number{
  return x - y;
  // return '이게 반환이 되나?';
}

const substractTwoNumbersArrow = (x: number, y: number): number => {
  return x - y;
}

/**
 * 특수 반환 타입
 * 
 * void / never
 */

// void: 아무것도 반환하지 않는다.
function doNotReturn(): void{
  console.log('저는 반환을 하지 않습니다.')

  // return 3; // 에러가 남
  return; // 이건 가능 (아무것도 반환하지 않는 거니까)
}

doNotReturn();

function neverEndingLoop(): never{
  while(true){

  }
}

function throwError2(): never{
  throw Error();
}