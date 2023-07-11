/**
 * Casting
 * 
 * TS에서 Casting을 하면 JS에서는 적용이 안된다.
 */

const codeFactory = 'code factory';
console.log(codeFactory.toUpperCase());


// any 타입의 문제
let sampleNumber: any = 5;
// console.log(sampleNumber.toUpperCase());
let stringVar = sampleNumber as string;

console.log(typeof (sampleNumber as string)); // number

// 위와 같은 문제가 있기에 casting을 마구 적용하며 안된다.

let number = 5;
// console.log(number.toUpperCase());
console.log((number as any).toUpperCase());

// casting을 함부러 적용할 걸 경우, TS를 쓰는 의미가 사라진다.
// 상속 상에서 더 구체화된 값으로 캐스팅할 때 as를 사용함.