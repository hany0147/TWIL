/**
 * Accessor Decorator
 */
class Rectangle{
  #height: number;
  #width: number;

  constructor(height:number, width: number){
    this.#height = height;
    this.#width = width;
  }

  @Configurable(true)
  get height(){
    return this.#height;
  }

  @Configurable(false)
  get width(){
    return this.#width;
  }
}

function Configurable(configurable: boolean){
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    descriptor.configurable = configurable;
  }
}

const rec = new Rectangle(100, 200);
console.log(Object.getOwnPropertyDescriptors(Rectangle.prototype));