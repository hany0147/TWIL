const person = {
  name: 'Hanui',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name)
  }
};

console.log(person);
person.greet()

//레스트, 스프레드
const hobbies = ['sports', 'cooking'];
const copiedArray = [...hobbies]; // 스프레드: 배열에서도 사용 가능
// hobbies.slice()
console.log(copiedArray);
const toArray = (...args) => { //레스트
  return args;
};

console.log(toArray(1, 2, 3, 4));

// 객체 구조 분해
const printName = ({ name }) => {
  console.log(name);
}

printName(person);

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2); //  배열 구조 분해