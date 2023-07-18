/**
 * Abstract Class
 */

abstract class ModelWithId{
  id: number;

  constructor(id: number){
    this.id = id;
  }
}

// const modelWithId = new ModelWithId(123);
// 직접 선언 불가

class Product extends ModelWithId{

}

const product = new Product(1);
product.id;

abstract class ModelWithAbstractMethod{
  abstract shout(name: string): string;
}

class Person extends ModelWithAbstractMethod{
  shout(name: string): string {
    return '소리 질러~~';
  }
}