/**
 * Readonly type
 */

interface Cat {
  name: string;
  age: number;
}

const n: Cat = {
  name: '냐옹이',
  age: 8
};

n.name = '코드팩토리';

const bori: Readonly<Cat> = {
  name: '보리',
  age: 7,
}

// bori.name = '야옹';