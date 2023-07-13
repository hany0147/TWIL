/**
 * Statement and Expression
 */
// Statement (문장)
function addTwoNumbers(x: number, y: number){
  return x + y;
}

// Expression (표현식)
const addTwoNumbersExp = (x: number, y:number) => {
  return x + y;
}

/**
 * Statement
 */
function add(x: number, y: number): number{
  return x + y;
}

function substract(x: number, y: number): number{
  return x + y;
}

function multiply(x: number, y: number): number{
  return x + y;
}

/**
 * Expression -> 재활용이 가능해서 함수 선언에 유용함
 */
type CalculationType = (x: number, y: number) => number;

const add2: CalculationType = function(x, y){
  return x + y;
}
const substract2: CalculationType = function(x, y){
  return x - y;
}
const multiply2: CalculationType = function(x, y){
  return x * y;
}