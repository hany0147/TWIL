/**
 * Closure
 * 
 * A closure is the combination of a function and the lexical
 * enviroment within which that function was declared
 * 
 * "상위함수보다 하위함수가 더 오래 살아 있는 경우를 closure라고 한다."
 */
function getNumber(){
  var number = 5;

  function innerGetNumber(){
    return number;
  }

  return innerGetNumber();
}

// console.log(getNumber());

function getNumber(){
  var number = 5;

  function innerGetNumber(){
    return number;
  }

  return innerGetNumber;
}

const runner = getNumber();
console.log(runner);
console.log(runner());

/**
 * 1) 데이터 캐싱
 */
function cacheFunction(){
  // 아래 계산은 매우 오래걸린다는 가정을 했을때
  var number = 10 * 10;

  function innerCasheFunction(newNumb){
    return number * newNumb;
  }
  
  return innerCasheFunction;
}

// 여기서 딱 한 번만 계산함
const runner2 = cacheFunction();

console.log(runner2(10));
console.log(runner2(20));


// 반복 캐시
function cacheFunction2(){
  var number = 99;

  function increment(){
    number ++;
    return number;
  }

  return increment;
}

const runner3 = cacheFunction2();
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());
console.log(runner3());

/**
 * 3) 정보 은닉
 */
function Idol(name, year){
  this.name = name;

  var _year = year;

  this.sayNameAndYear = function(){
    return `안녕하세요 저는 ${this.name}입니다. ${_year}에 태어났습니다.`;

  }
}

const yuJin = new Idol('안유진', 2003);
console.log(yuJin.sayNameAndYear());
console.log(yuJin._year);