/**
 * Enum
 */

/**
 * API 요청을 한다.
 * 상태는 4가지 상태
 * 
 * DONE - 요청 완료 상태
 * ERROR - 에러가 생긴 상태
 * LOADING - 로딩 상태
 * INITAIL - 초기 상태
 */
function runWork(){
  let state = 'INITIAL';

  try{
    state = 'LOADING';
    
    // 작업을 한다.

    state = 'DONE';
  }catch(e){
    state = 'ERROR';
  }finally{
    return state;
  }
}

console.log(runWork() === 'DONNE');
// 문자열로 상태를 서술할 경우, 위와 같이 오타로인한 에러가 날 가능성이 농후함. 

const doneState = 'DONE';
const loadingState = 'LOADING';
const errorState = 'ERROR';
const initialState = 'INITIAL';

function runWork2(){
  let state = initialState;

  try{
    state = loadingState;
    
    // 작업을 한다.

    state = doneState;
  }catch(e){
    state = errorState;
  }finally{
    return state;
  }
}

console.log(runWork2() === doneState);
// 오타로 인한 에러를 방지할 수 있다.

enum State {
  DONE = 'DONE',
  LOADING = 'LOADING',
  INITAIL = 'INITIAL',
  ERROR = 'ERROR',
}

function runWork3(){
  let state = State.INITAIL;

  try{
    state = State.LOADING;
    
    // 작업을 한다.

    state = State.DONE;
  }catch(e){
    state = State.ERROR;
  }finally{
    return state;
  }
}

console.log(runWork3() === State.DONE);
console.log(runWork3()); // 0 => 인덱스 값을 반환함, 원치않는다면 직접 값을 입력하면 됨.