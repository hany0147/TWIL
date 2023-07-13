/**
 * Type VS Interface
 */

// Object 선언할 때
interface IObject{
  x: number;
  y: number;
}

type TObject = {
  x: number;
  y: number;
}

// function을 선언할 때
interface IFunction {
  (x: number, y: number): number;
}

type TFunction = (x: number, y: number) => number;

/**
 * Type에서 할 수 있지만
 * interface에서는 할 수 없는 것들
 */

// (1) primitive 타입 선언하기
type Name = string;

// (2) union 타입 선언하기
type UnionType = string | number;

// (3) primitive list 또는 tuple 타입 선언하기
type TupleType = [number, string];

/**
 * Interface는 할 수 있고
 * type은 못하는 것
 */

// interface merging : 중복 선언 했을 때 모두 합쳐진다.
interface IRectangle{
  height: number;
}

interface IRectangle{
  width: number;
}

let rectangle: IRectangle = {
  height: 200,
  width: 100,
}

/**
 * Interface Merging
 */
class Review {
  // 프로퍼티
  getY = (x: number) => {return x};

  // 메서드
  getX(x: number){
    return x;
  }
}

// interface GetXnY{
//   getX: (x: number) => number;
//   getY: (y: number) => number;
// }

// interface GetXnY{
//   getX: (x: number) => number;
//   getY: (y: string) => number;
//   // 프로퍼티는 오버로딩이 안된다.
// }

// 메서드는 가능
interface GetXnY2 {
  getX(x: number) : number;
  getY(y: number) : number;
}

interface GetXnY2 {
  getX(x: number) : number;
  getY(y: string) : number;
}

const test: GetXnY2 = {
  getX(x){
    return x;
  },
  getY(y){
    return 1;
  }
}