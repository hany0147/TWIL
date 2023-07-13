/**
 * Type Predicate
 * 
 * 변수 is 타입
 */

function isNumber(input: any): input is number{
  return typeof input === 'number'
}

console.log(isNumber(10));


let number: any = 5;

if(isNumber(number)){
  number; // 반환값을 number로 추론함
}

interface Doge{
  name: string;
  age: number;
}

interface Cat{
  name: string;
  breed: string;
}

type DogeOrCat = Doge | Cat;

function isDoge(animal: DogeOrCat): animal is Doge{
  return (animal as Doge).age !== undefined;
}

const doge: DogeOrCat = Math.random() > 0.5 ? {
  name: '도지',
  age: 32,
} : {
  name: '오리',
  breed: '코리아 길냥이',
}

if (isDoge(doge)){
  doge;
}else{
  doge;
}