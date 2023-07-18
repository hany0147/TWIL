/**
 * Interface
 */
interface Animal {
  name: string;
  age: number;
  jump(): string;
}

class Dog implements Animal{
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  jump(): string {
    return `${this.name}이 점프를 합니다.`
  }

  dance() {
  }
}

let ori: any = new Dog('오리', 3);

function instanceOfAnimal(object: any): object is Animal{
  return 'jump' in object;
}

if (instanceOfAnimal(ori)){
  ori;
}

/**
 * 다중 인터페이스 구현
 */
interface Pet {
  legsCount: number;
  bark(): void;
}

class Cat implements Animal, Pet{
  // animal
  name: string;
  age: number;

  // pet
  legsCount: number;

  constructor(name: string, age: number, legsCount: number){
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  // animal
  jump(): string {
    return `${this.name}이 점프를 합니다.`
  }

  // pet
  bark(): void {
    console.log('야옹');
  }
}

type AnimalAndPet = Animal & Pet;

class Cat2 implements AnimalAndPet{
  // animal
  name: string;
  age: number;

  // pet
  legsCount: number;

  constructor(name: string, age: number, legsCount: number){
    this.name = name;
    this.age = age;
    this.legsCount = legsCount;
  }

  // animal
  jump(): string {
    return `${this.name}이 점프를 합니다.`
  }

  // pet
  bark(): void {
    console.log('야옹');
  }
}

interface WrongInterfac1 {
  name: string;
}

interface WrongInterfac2 {
  name: number;
}


// 중복되는 프로퍼티가 있는지 없는지 확인해야 함.
// class Person implements WrongInterfac1, WrongInterfac2{
//   name: string;
// }

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}

interface IdolConstructor{
  new (name: string, age: number): Idol;
}

function createIdol(constructor: IdolConstructor, name: string, age: number){
  return new constructor(name, age);
  // return new Idol(name, age);
}

console.log(createIdol(Idol, '아이유', 32));