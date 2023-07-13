/**
 * Function Type
 */
type Mapper = (x: string) => string;

const runner = (callback: Mapper) => {
  return ['안유진', '장원영', '레이'].map(
    callback,
  )
}

console.log(runner((x) => `아이브 멤버: ${x}`));

type MultiplyTwoNumber = (x: number, y: number) => number;

const multiplyTwoNumbers: MultiplyTwoNumber = (x, y) => {
  return x + y;
}

/**
 * Interface로 함수 타입 선언하기
 */
interface IMultiplyTwoNumbers{
  (x: number, y: number): number; 
}
// 인터페이스에서 함수 타입을 선언 할 때, 애로우 대신 :을 입력
const multiplyTwoNumbers3: IMultiplyTwoNumbers = (x, y) => {
  return x * y;
}