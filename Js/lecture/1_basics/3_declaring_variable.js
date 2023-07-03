/**
 * Variable 선언하기
 * 
 * 1) var - 더이상 쓰지 않는다.
 * 2) let
 * 3) const
 */

var name = '코드';
console.log(name);

var age = 31;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */

ive = '안유진';
console.log(ive)

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = '코드';

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것.
 * 2) 할당
 * 변수를 선언하되 할당하지 않을 수 있고, 이는 undefined로 나옴
 * const는 애초부터 변수 선언 + 할당을 해야 함.
 */