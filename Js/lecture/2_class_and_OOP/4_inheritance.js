/**
 * Intheritance
 * 
 * 상속은 객체들 간의 관계를 구축하는 방법
 * 수퍼 클래스, 또는 부모 클래스 등의 기존의 클래스로부터
 * 속성과 동작을 상속받을 수 있다.
 */

class IdolModel{
  name;
  year;

  constructor(name, year){
    this.name = name;
    this.year = year;
  }
}

class FemaleIdolModel extends IdolModel {
  dance(){
    return `${this.name}이 춤을 춥니다.`;
  }
}

class MaleIdolModel extends IdolModel {
  sing(){
    return `${this.name}이 노래를 부릅니다.`;
  }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin, yuJin.dance());

const jiMin = new MaleIdolModel('지민', 1995);
console.log(jiMin, jiMin.sing());

const cf = new IdolModel('코드팩토리', 1992);
console.log(cf);

console.log(cf.name);
// console.log(cf.dance()); 거꾸로는 안됨

console.log(yuJin instanceof IdolModel); // 상속을 했기 때문에
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);