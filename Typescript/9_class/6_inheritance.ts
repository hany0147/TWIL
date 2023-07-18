/**
 * Inheritance
 */
class Parent {
  name : string;

  constructor(name: string){
    this.name = name;
  }

  dance(){
    console.log(`parent: ${this.name} 춤춘다.`)
  }
}

class Child extends Parent {
  age: number;

  constructor(name: string, age: number){
    super(name);

    this.age = age;
  }

  sing(){
    console.log(`child: ${this.name}이 노래를 부른다.`)
  }
}

const codefactory = new Parent('코드팩토리');
const ahri = new Child('아리', 12);

codefactory.dance()
ahri.sing()
ahri.dance()

let person: Parent;
person = codefactory;
person = ahri;

let person2: Child;
person2 = ahri;
// person2 = codefactory;

/**
 * optional 프로퍼티를 유의하자
 */
class Parent2 {
  name: string;

  constructor(name: string){
    this.name = name;
  }
}

class Child2 extends Parent2 {
  age?: number;

  constructor(name: string, age?: number){
    super(name);
    this.age = age;
  }
}

const cf2 = new Parent2('d')
const ahri2 = new Child2('df', 20);
let child: Child2;
child = ahri2;
child = cf2; // age가 옵셔널이라서 가능해짐. 구조가 똑같으면 할당이 가능하다.