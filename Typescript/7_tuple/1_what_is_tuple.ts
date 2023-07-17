/**
 * Tuple
 */

let iveTopMembers: string[] = ['안유진', '장원영', '레이'];

let numberAndStringTuple: [number, string] = [
  23,
  '코드팩토리',
]

numberAndStringTuple.push('아이유');
console.log(numberAndStringTuple);

let unmodifiableTuple: readonly [number, string] = [
  23,
  '코드',
]
// unmodifiableTuple.push('아이유');

/**
 * Tuple 유추하기
 */
let actresses = ['김고은', '박소담', '전여빈'];
let actressesTuple = ['김고은', '박소담', '전여빈'] as const;
const actressesTupleConst = ['김고은', '박소담', '전여빈'] as const;

let stringArray: string[] = [
  ...actressesTuple,
  ...actressesTupleConst,
]

/**
 * Named Tuple
 */
const namedTuple: [name: string, age: number] = [
  'ho',
  32,
]

/**
 * Assigning Tuple to Tuple
 * 
 * Tuple은 같은 타입끼리만 할당이 가능하다.
 */
const tuple1: [string, string] = ['아이유', '유애나'];
const tuple2: [number, number] = [1, 2];

// let tuple3: [boolean, boolean] = tuple1;
// let tuple4: [number, number, number] = tuple2;

let tuple5: [number, number] = tuple2;

/**
 * Tuple과 Array의 관계
 */
let ive: [string, string] = [
  '장원영',
  '안유진',
]

let stringArr: string[] = ive;

// let ive2: [string, string] = stringArr;
// tuple에 array 할당은 안됨(구체적인 타입이 덜 구체적인 타입으로 할당은 가능하나 반대는 불가능하다).

/**
 * Multi Dimesional Tuple
 */
const tuple2D : [string, number][] = [
  ['코드팩토리', 32],
  ['아이유', 31],
  ['김고은', 30],
]