/**
 * Extension
 */
interface IName{
  name: string;
}

interface IIdol extends IName{
  age: number;
}

const idol: IIdol = {
  name: '안유진',
  age: 23,
}

type TName = {
  name: string;
}

type TIdol = TName & {age: number};
const idol2: TIdol = {
  name: '아이유',
  age: 29,
}

interface IIdol2 extends TName{
  age: number;
}

const idol3: IIdol2 = {
  name: '제니',
  age: 29,
}

type TIdol2 = IName & {
  age: number;
}

const idol4 = {
  name: '지수',
  age: 31,
}

/**
 * Extending multiple
 */

type DogName = {
  name: string;
}

type DogAge = {
  age: number;
}

type DogBreed = {
  breed: string;
}

type Dog = DogName & DogAge & DogBreed

const dog: Dog = {
  name: '돌돌',
  age: 2,
  breed: '푸들',
}

interface CatName {
  name: string;
}

interface CatAge {
  age: number;
}

interface Cat extends CatName, CatAge {
  breed: string;
}

const cat: Cat = {
  name: '오리',
  age: 7,
  breed: '코숏',
}

/**
 * Overriding
 */

type THeight = {
  height: number;
}

type TRectangle = THeight & {
  width: number;
  height: string;
}

// const rectangle: TRectangle = {
//   width: 300,
//   height:// never 타입이 됨
// }

type TWidth = {
  width: number | string;
}

type TRectangle2 = TWidth & {
  width: number;
  height: number;
}

const rectangle: TRectangle2 = {
  height: 100,
  width: 200,
}

interface IHeight{
  height: number;
}

interface IRectangle extends IHeight{
  widht: number;
  // height: string;
}
// => interface는 아예 허락조차 안해줌

interface IWidth{
  width: number | string;
}

interface IRectangle2 extends IWidth{
  height: number;
  width: string;
}