/**
 * Partial Type
 */
interface Idol {
  name: string;
  age: number;
  groupName: string;
}

const yujin: Idol = {
  name: '안유진',
  age: 23,
  groupName: '아이브',
}

function updateIdol(original: Idol, updates: Partial<Idol>): Idol{
  return {
    ...original,
    ...updates,
  }
}

console.log(updateIdol(yujin, {
  age: 27,
  // naze: '코드팩토리',
}));