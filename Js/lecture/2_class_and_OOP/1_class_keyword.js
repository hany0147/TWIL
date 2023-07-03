/**
 * Class Keyword
 */

// 클래스는 객체지향 프로그래밍에서
// 특정 객체(인스턴스)를 생성하기 위한 변수와 메소드(함수)를
// 정의하는 일종의 틀이다.

class IdolModel{
  name;
  year;

  constructor(name, year){
    this.name = name;
    this.year = year;
  }

  sayName(){
    return `안녕하세요 저는 ${this.name}입니다`
  }
}

// constructor - 생성자

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);
const gaeul = new IdolModel('가을', 2002);
const ray = new IdolModel('레이', 2004);
const wonYoung = new IdolModel('장원영', 2004);
const liz = new IdolModel('리즈', 2004);

console.log(yuJin.name);
console.log(yuJin.sayName());

console.log(typeof IdolModel);
console.log(typeof yuJin);

// class IdolModel{
//   constructor(name, year){
//     this.name = name;
//     this.year = year;
//   }  
// }
// 이것도 가능... 속성 정의를 안해도 됨. 옵셔너리임