/**
 * Reflection and Decorator
 */
import 'reflect-metadata';

const restrictedParamValueKey = Symbol('restrictParamValue');

interface RestrictionInfo<T>{
  index: number;
  restrictedValues: T[];
}

function RestrictParamValue<T>(restrictedValues: T[]){
  return (target: any, propertyKey: string, index: number) => {
    const prevMeta = Reflect.getOwnMetadata(restrictedParamValueKey, target, propertyKey) ?? [];

    const info: RestrictionInfo<T> = {
      index,
      restrictedValues,
    }

    Reflect.defineMetadata(restrictedParamValueKey, [
      ...prevMeta,
      info,
    ], target, propertyKey)

    console.log(Reflect.getOwnMetadata(restrictedParamValueKey, target, propertyKey));
  }
}

function ValidateMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const metas: RestrictionInfo<any>[] = Reflect.getOwnMetadata(restrictedParamValueKey, target, propertyKey) ?? [];

  const original = descriptor.value;

  descriptor.value = function(...args: any){
    const invalids = metas.filter(
      (x) => !x.restrictedValues.includes(args[x.index])
    );

    if(invalids.length > 0){
      throw Error(`잘못된 값이니다. ${invalids.map(x => args[x.index]).join(', ')}`)
    }

    return original.apply(this, args);
  }
}

class Idol {
  name: string;
  age: number;

  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }

  @ValidateMethod
  sing(@RestrictParamValue(['신나게', '열정적으로']) style: string, @RestrictParamValue([1, 2, 3]) ranking: number) {
    return `${this.name}이 ${style} 노래를 부릅니다.`
  }
}

const yujin = new Idol('안유진', 23);

console.log('--- sing ---')
console.log(yujin.sing('신나게', 1));
console.log(yujin.sing('기분나쁘게', 4));