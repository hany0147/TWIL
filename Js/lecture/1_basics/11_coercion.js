/**
 * 타입 변환
 * 
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2); //982(2가 string으로 변환됨)

console.log('98' * 2); //196(문자열에는 곱한다는 개념이 없으므로 숫자로 암묵적으로 형변환)

console.log('98' - 2);
// 사용하라는 의미는 아니다. 이해하기 편한 코드가 중요하다. 다만, 기능적으로 이게 가능하다는 걸 보여주는 것.

/**
 * 명시적 변환 몇가지 더 배우기
 */

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');

/**
 * Boolean 타입으로의 변화
 * string 값이 있으면 어떤 값이라도 true임
*/
console.log(!!'x');
console.log(!!'');
console.log(!!0);
console.log(!!'0');
console.log(!!'false');
console.log(!!false);
console.log(!!undefined); //false
console.log(!!null); //false

console.log(!!{}); //object는 무조건 true
console.log(!![]); //array는 무조건 true

/**
 * 1) 아무 글자도 없는 string
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 반환한다.
 */