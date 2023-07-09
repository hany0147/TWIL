/**
 * Scope
 */

var numberOne = 20;

function levelOne(){
  console.log(numberOne);
}

function levelOne(){
  var numberOne = 40;

  console.log(numberOne);
}

// levelOne();

console.log(numberOne);

function levelOne(){
  var numberOne = 40;

  function levelTwo(){
    var numberTwo = 99;

    console.log(`levelTwo numberTwo : ${numberTwo}`);
    console.log(`levelTwo numberOne : ${numberOne}`);
  }

  levelTwo();
  console.log(`levelOne numberOne: ${numberOne}`);
}

levelOne();

// 모든 선언은 가장 가까운 스코프에 있는 선언부터 활용하게 된다는 걸 알 수 있다.

console.log(numberOne);
// console.log(numberTwo);
// 하위 스코프에는 접근할 수 없다.

/**
 * JS -> Lexical Scope
 * 
 * 선언된 위치가 상위 스코프를 정한다.
 * 
 * Dynamic Scope
 * 
 * 실행한 위치가 상위 스코프를 정한다.
 */

var numberThree = 3;

function functionOne(){
  var numberThree = 100;

  functionTwo();
}

function functionTwo(){
  console.log(numberThree);
}

functionOne();

var i = 999;

for(var i = 0; i < 10; i ++){
  console.log(i);
}

console.log(`i in global scope: ${i}`);
// var에서는 for, if, while과 같은 block level 스코프를 새로 생성하지 않음

i = 999;

for(let i = 0; i < 10; i++){
  console.log(i);
}
console.log(`i in global scope: ${i}`);

// let과 const는 블록 레벨 스코프를 만들어낸다.

/**
 * var 키워드는 함수 레벨 스코프만 만들어낸다.
 * 
 * let, const 키워드는 함수 레벨 스코프와 블록 레벨 스코프를 만들어낸다.
 */