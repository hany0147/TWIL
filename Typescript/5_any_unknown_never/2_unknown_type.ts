/**
 * Unknown Type
 */

let anyValue: any;

anyValue = 24;
anyValue = '아이유';
anyValue = false;
anyValue = null;
anyValue = [];

let unknownValue: unknown;

unknownValue = 24;
unknownValue = '아이유';
unknownValue = false;
unknownValue = null;
unknownValue = [];

// let anyType: any = anyValue;
// let unknownType: unknown = anyValue;
// let booleanType: boolean = anyValue;
// let arrayType: string[] = anyValue;
// let objectType: {} = anyValue;

// 어떤 타입의 변수를 새로 선언하든 any 타입의 값을 할당할 수 있다.

// let anyType: any = unknownValue;
// let unknownType: unknown = unknownValue;
// let booleanType: boolean = unknownValue;
// let arrayType: string[] = unknownValue;
// let objectType: {} = unknownValue;

// unknown의 경우, any나 unknown 타입의 변수외에 unknown 타입의 값을 할당할 수 없다.
// 좀 더 타이트함


// unknownValue.toUpperCase();
// unknownValue.name;
// new unknownValue();

function isString(target: unknown) : target is string{
  return typeof target === 'string';
}

let testValue: unknown;
if(isString(testValue)){
  testValue;
}

/**
 * Union type
 */
type uOrString = unknown | string; // 언노운 타입이 됨(any와 있을때를 제외하고, 모두 언노운으로 반환됨)
type uOrAny = unknown | any; // any 타입이 됨

/**
 * intersection type
 */

type uAndString = unknown & string; // 반대로 언노운이 흡수됨
type uAndBoolean = unknown & boolean;
type uAndAny = unknown & any; // any가 됨.

/**
 * operator 사용
 */
let number1: unknown = 10;
let number2: unknown = 20;

// number1 + number2; 사칙연산 안 됨

number1 === number2;
number1 == number2;
number1 !== number2;
number1 != number2;