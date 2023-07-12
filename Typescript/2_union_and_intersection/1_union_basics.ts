/**
 * Union Basics
 * 
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법 중 하나이다.
 */
type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = '아이브';
stringOrBooleanType = true;

type StrBoolNullType = string | boolean | null;

type StateTypes = 'DONE' | 'LOADING' | 'ERROR';
let state: StateTypes = 'DONE';
state = 'LOADING';
// state = 'INITIAL';

/**
 * 리스트의 유니언
 */
// string으로 구성된 리스트 또는 불리언으로 구성된 리스트
type StringListOrBooleanList = string[] | boolean[];
let strOrBooleanr: StringListOrBooleanList = [
  '아이유',
  '김고은',
  '박소담',
];

strOrBooleanr = [
  true,
  false,
  false,
  true,
]

type StrOrNumberList = (string | number)[];
let stringOrNumberList = [
  1, 2, 3,
  '아이유',
  '레드벨벳',
]

/**
 * Interface로 사용하는 union
 */
interface Animal{
  name: string;
  age: number;
}

interface Human{
  name: string;
  age: number;
  address: string;
}

type AnimalOrHuman = Animal | Human;
let anmalOrHuman: AnimalOrHuman = {
  name: '최지호',
  age: 32,
  address: '대한민국',
}

console.log(anmalOrHuman);
console.log(anmalOrHuman.name);
console.log(anmalOrHuman.age);
console.log(anmalOrHuman.address);

anmalOrHuman = {
  name: '오리',
  age: 9,
}

console.log(anmalOrHuman);

console.log(anmalOrHuman.name);
console.log(anmalOrHuman.age);
// console.log(anmalOrHuman.address);
// console.log((anmalOrHuman as Human).address); // 매우 안좋은 예 (캐스팅의 위험성)

let animalOrHuman2: {
  name: string;
  age: number;
} | {
  name: string;
  age: number;
  address: string;
} = {
  name: '최지호',
  age: 32,
  address: '대한민국',
};

console.log(animalOrHuman2)

animalOrHuman2 = {
  name: '오리',
  age: 9,
}

console.log(animalOrHuman2.name)
// console.log(animalOrHuman2.address)

// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가?
type Person = {
  name: string;
  age: number;
}

type Cat = {
  breed: string;
  country: string;
}

// 유니언은 합집합의 개념이다. 
// 어떤 집합도 충족하지 않는 구성은 안된다.
type PersonOrCat = Person | Cat;
const personOrCat: PersonOrCat = {
  name: '코드팩토리',
  age: 32,
  breed: '요크셔테리어',
  country: '영국',
}