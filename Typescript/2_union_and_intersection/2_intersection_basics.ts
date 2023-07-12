/**
 * Intersection
 * 
 * And의 개념
 */
interface Human{
  name: string;
  age: number;
}

interface Contacts{
  phone: string;
  address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
  name: '코드팩토리',
  age: 32,
  phone: '0123123131',
  address: '서울시',
};

// primitive intersection -> never 타입으로 변경됨
type NumberAndString = number & string;

// let numberAndString: NumberAndString = 1;
// let numberAndString: NumberAndString = '얍';