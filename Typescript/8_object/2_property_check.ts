/**
 * Property Check
 * 
 * 초과 속성 검사
 */

type Tname = {
  name: string;
}

type Tage = {
  age: number;
}

const iu = {
  name: '아이유',
  age: 30, 
}

const testName: Tname = iu;
const testAge: Tage = iu;