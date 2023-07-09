/**
 * All about objects
 * 
 * 객체를 선언할 때 사용할 수 있는 방법들
 * 1) object를 생성해서 객체 생성 - 기본기 {}
 * 2) class를 인스턴스화해서 생성 - class와 OOP
 * 3) function을 사용해서 객체 생성
 */


// 생성자 함수
function IdolFunction(name, year){
  this.name = name;
  this.year = year;
}

const gaEul = new IdolFunction('가을', 2002);
console.log(gaEul);