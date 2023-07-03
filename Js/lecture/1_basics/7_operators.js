/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 % 10);

/**
 * 증가와 함소
 */
let number = 1;
number ++;
console.log(number);
number --;

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number ++;
console.log(result, number);

result = ++ number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */

let sample = '99';

console.log(+sample);
console.log(typeof +sample);

sample = true;
console.log(+sample);

// NaN -> Not a Number

/**
 * 할당 연산자
 */

number = 100;
console.log(number);

number += 10;
console.log(number);

/** 
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */
console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(true == '1');

console.log(5 === 5);
console.log(5 === '5');

console.log(5 !== '5');

/** 
 * 대소 관계 비교 연산자
 */

/**
 * 삼항 조건 연산자 (ternary operator)
 */

console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');

/** 
 * 논리 연산자
 * 
 * && ||
 */

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환   
*/

console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');

console.log(true && true && '아이브');
console.log(true && false && '아이브');
/**
 * 지수 연산자 
 */
console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 * 
 * ?? 왼쪽값이 null이거나 undefined일 때, 오른쪽 값을 반환한다.    
 */
let name;
name = name ?? '코드팩토리';
console.log(name);

let name2;
name2 ??= '코드팩토리';
console.log(name2);




