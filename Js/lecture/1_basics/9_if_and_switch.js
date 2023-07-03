/**
 * If and Switch
 */

let number = 5;

if (number % 2 === 0){
    console.log('number 변수는 짝수입니다.')
} else {
  console.log('number 변수는 홀수입니다.')
}

const englishDay = 'Monday';

let koreanDay;

switch(englishDay){
  case 'Monday':
    koreanDay = '월요일';
    break;
  case 'Tuesday':
    koreanDay = '화요일';
    break;
  case 'Wednesday':
    koreanDay = '수요일';
    break;
  default:
    koreanDay = '주말';
    break;
}

console.log(koreanDay);

