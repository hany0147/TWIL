/**
 * Object Intersection
 */
type PrimitiveIntersection = string & number;

type PersonType = {
  name: string;
  age: number;
}

type companyType = {
  company: string;
  companyRegistrationNumber: string;
}

type PersonAndCompany = PersonType & companyType;

const jisoo: PersonAndCompany = {
  name: '지수',
  age: 32,
  company: 'YG',
  companyRegistrationNumber: 'dffefffeff',
}

type PetType = {
  petName: string;
  petAge: number;
}

type CompanyOrPet = PersonType & (companyType | PetType);

const companyOrPet: CompanyOrPet = {
  name: '코드팩토리',
  age: 32,

  company: '주식회사 코드팩토리',
  companyRegistrationNumber: 'xxxyzzz',

  petName: '오리',
  petAge: 8,
}