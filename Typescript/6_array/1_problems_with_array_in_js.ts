/**
 * Problems with Array in JS
 */

const numbers = [1, '2', 3, '4', 5];

let strings: string[] = ['1', '2', '3'];
let stringOrNumberArray: (string | number)[] = [
  1, 2, 3, '5'
]
let stringOrNumberArr: string | number[] = [
  1, 2, 3
]

const onlyString = ['1', '2', '3'];
const onlyNumber = [1, 2, 3,];

for(let i = 0; i < onlyString.length; i++){
  let item = onlyString[i];
}

for(let item of onlyNumber){

}

let number3 = onlyNumber[0];

let number4 = onlyNumber[9999]; // 타입스크립트는 인덱스의 길이를 신경쓰지 않는다. 튜플을 제외하고.