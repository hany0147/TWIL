/**
 * Narrowing
 * 
 * Narrowing은 Union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할 수 있게 되는걸 의미함.
 */
// let numberOrString: number | string = '코드팩토리';
// numberOrString; // 스트링 값을 넣었기 때문에 타입이 스트링으로 구체화됨.

// const decimal = 12.3278;
// console.log(decimal.toFixed(2));

// numberOrString.toFixed();

/**
 * Narrowing 종류
 * 
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Equality Narrowing
 * 5) in operator narrwing
 * 6) instanceof narrowing
 * 7) discrimated union narrowing
 * 8) exhaustiveness checking
 */

// (1) Assignment Narrowing
// 특정 값을 할당해서 내로잉
let numberOrString: string | number = '아이유';
numberOrString.toString();

// (2) typeof narrowing
numberOrString = Math.random() > 0.5 ? 1123 : '아이유';

if (typeof numberOrString === 'string'){
  numberOrString;
}else{
  numberOrString;
}

// (3) Truthiness Narrowing
let nullOrString: null | string[] = Math.random() > 0.5 ? null : ['아이유', '레드벨벳'];
if (nullOrString){
  nullOrString;
}else{
  nullOrString;
}

// (4) Equality Narrowing
let numberOrString2: number | string = Math.random() > 0.5 ? 1123 : '아이유';
let stringOrBool2: string | boolean = Math.random() > 0.5 ? '아이브' : true;

if (numberOrString2 === stringOrBool2){
  numberOrString2;
  stringOrBool2;
}else{
  numberOrString2;
  stringOrBool2;
}

let numberOrStringOrNull: number | string | null = Math.random() > 0.5 ? 1123 : Math.random() > 0.5 ? '안유진' : null;

if (typeof numberOrStringOrNull === 'number'){
  numberOrStringOrNull;
}else{
  numberOrStringOrNull;
}

// (5) in operator narrowing
interface Human{
  name: string;
  age: number;
}

interface Dog{
  name: string;
  type: string;
}

let human: Human = {
  name: '안유진',
  age: 23,
}

let dog: Dog = {
  name: '오리',
  type: '요크셔테리어',
}

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;
// console.log('name' in human);

if ('type' in humanOrDog){
  humanOrDog;
}else{
  humanOrDog;
}

// (6) instanceof narrowing
let dateOrString: Date | string = Math.random() > 0.5 ? new Date() : '코드팩토리';

if(dateOrString instanceof Date){
  dateOrString;
}else{
  dateOrString;
}

// (7) discrimnated union narrowing
interface Anmial{
  type: 'dog' | 'human';
  height?: number;
  breed?: string;
}
// 하나로 뭉뜽그려서 선언하는 것보다 여러 개로 선언하고 유니언으로 묶는게 타입을 정확히 유추하는 데 훨씬 유리함.

let animal: Anmial = Math.random() > 0.5 ? {
  type: 'human',
  height: 177,
} : {
  type: 'dog',
  breed: '리트리버',
};

if(animal.type === 'human'){
  animal.height;
}else{
  animal.height;
  animal.breed;
}

interface Human2 {
  type: 'human';
  height: number;
}

interface Dog2 {
  type: 'dog';
  breed: string;
}


type HumanOrDog2 = Human2 | Dog2;
let humanOrDog2: HumanOrDog2 = Math.random() > 0.5 ? {
  type: 'human',
  height: 177,
} : {
  type: 'dog',
  breed: '리트리버',
};

if (humanOrDog2.type === 'human'){
  humanOrDog2;
}else{
  humanOrDog2;
}

// (8) exhuastiveness checking
switch(humanOrDog2.type){
  case 'human':
    humanOrDog2;
    break;
  case 'dog':
    humanOrDog2;
    break;
  default:
    humanOrDog2; // never type
    
    // 이렇게 체크하는 변수를 넣어놓으면 새로 생긴 타입에 대한 문제점을 알려줄 수 있음. 꿀팁.
    const _check : never = humanOrDog2;
    break;
}