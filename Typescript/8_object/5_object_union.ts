/**
 * Object Union
 */
/**
 * 유추된 객체 타입 유니언 
 */
const dogOrCat = Math.random() > 0.5 ? {
  name: '별이',
  age: 12,
} : {
  name: '오리',
  breed: 'koshot',
}

dogOrCat.name;
dogOrCat.age;
dogOrCat.breed;

interface Dog {
  name: string;
  age: number;
}

interface Cat {
  name: string;
  breed: string;
}
type DogOrCat = Dog | Cat;

const dogOrCat2: DogOrCat = Math.random() > 0.5 ? {
  name: '별이',
  age: 12,
} : {
  name: '오리',
  breed: 'koshot',
}

dogOrCat2.name;
// dogOrCat2.age;

if('age' in dogOrCat2){
  dogOrCat2;
  dogOrCat2.age;
}else{
  dogOrCat2;
  dogOrCat2.breed;
}