/**
 * Using function to create objects
 */

function IdolModel(name, year){
  // console.log(new.target);

  if(!new.target){
    return new IdolModel(name, year);
  }

  this.name = name;
  this.year = year;

  this.dance = function(){
    return `${this.name}이 춤을 춥니다.`
  }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin.dance());

const yuJin2 = IdolModel('안유진', 2003);
console.log(yuJin2); // 반환하는 게 아무것도 없기 때문에
// console.log(global.name); // 이렇게 되니까 하지말라. 쓰라는 뜻이 아니다.
// new 키워드를 입력하면 this를 매핑하는 위치를 결정하게 됨

const IdolModelArrow = (name, year) => {
  this.name = name;
  this.year = year;
};

// const yuJin3 = new IdolModelArrow('안유진', 2003);
// arrow함수에서는 new 키워드를 쓸 수 없다.