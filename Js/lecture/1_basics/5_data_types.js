/**
 * Data Types
 * 
 * 여섯개의 Primitive Type과
 * 한개의 오브젝트 타입이 있다.
 * 
 * 1) Number (숫자)
 * 2) String(문자열)
 * 3) Boolean(불리언)
 * 4) undefined
 * 5) null
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 *    Objection
 */

// number
const age = 31;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('--------------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);

// string
const codeFactory = '코드팩토리';
console.log(typeof codeFactory);

const ive = "'아이브' 안유진"
console.log(ive)

/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두 번 입력하면 된다.
 */

const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWonYoung = '아이브\t장원영';
console.log(iveWonYoung);
const backSlash = '아이브\\코드팩토리';
console.log(backSlash);
const smallQutoation = '아이브\'코드팩토리';
console.log(smallQutoation);

const iveWonYoung2 = `아이브
장원영`;
console.log(iveWonYoung2);

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);

// boolean
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);

/**
 * undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때
 * 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기하는 건 지양해야한다.
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 명시적으로 없는 값으로 초기화할 때
 * 사용된다.
 */
let init = null;
console.log(init);
console.log(typeof init); // 버그로 object타입으로 인식됨

/**
 * symbol
 * 
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 원시값들과 다르게 symbol 함수를
 * 호출해서 사용한다.
 */

const test1 = '1';
const test2 = '2';

console.log(test1===test2)

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1===symbol2);

/**
 * Object 타입
 * 
 * Map
 * 키:벨류의 쌍으로 이루어져있다.
 */

const dictionary = {
  red: '빨간색',
  orange: '주황색',
  yellow: '노란색',
};

/**
 * Array 타입
 * 값을 리스트로 나열 할 수 있는 타입이다.
*/
const iveMembersArray = [
  '안유진',
  '가을',
  '레이',
  '장원영',
];
/**
 * index
 * 
 */
console.log(iveMembersArray[0]);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시를 한다.
 * 
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다.
 *    js
 */