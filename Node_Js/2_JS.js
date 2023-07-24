// 호출 스택
/**
 * anonymous는 가상의 전역 컨텍스트
 * 함수 호출 순서대로 쌓이고, 역순으로 실행됨
 * 함수 실행이 완료되면, 스택에서 빠짐
 */

// 이벤트 루프
/**
 * js 구조: 호출스택, 메모리, 백그라운드, 태스크 큐
 * 백그라운드에서 동시에 실행 가능하다.
 * 백그라운드는 다른 쓰레드가 실행함
 */

function oneMore() {
  console.log('one more');
}

function run() {
  console.log('run run');
  setTimeout(() => {
    console.log('wow');
  }, 0)
  new Promise((resolve) => {
    resolve('hi');
  })
  .then(console.log);
  oneMore();
}

setTimeout(run, 5000);
/**
 * 호출스택: annonymous - setTimeout(run, 5000) (스택 순으로 나감) - run - console.log(run run) - settimeout(익명, 0) - promise - resolve(hi) - oneMore - console.log(one more) - console.log('hi')<promise 우선순위가 높아서 먼저옴> - 익명 - console.log(wow)
 * 메모리: oneMore, run
 * 백그라운드(c++ 또는 운영체제 쪽임): 타이머(run, 5초) - 타이머(익명, 0) - then console.log(hi)
 * 태스크 큐: run - 익명 - console.log(hi)
 * 콘솔창: runrun - one more - hi - wow
 * 
 * promise: then/catch, process: nextTick => 일반 타이머보다 우선순위 위
 */

// var, const, let
/**
 * var: 함수 스코프
 * function a() {
 *  var y =3;
 * } => 이건 못 빠져나감
 * const, let: 블록 스코프
 */

// 템플릿 문자열, 객체 리터럴
let won = 5000;
const result = `이 과자는 ${won}원입니다`;

// 화살표 함수
const add2 = (x, y) => {
  return x + y;
}
const add3 = (x, y) => (x + y);

function not1(x) {
  return !x;
}

const not2 = x => !x;

const obj = (x, y) => ({x, y}) // 객체를 리턴하는 경우는 소괄호가 필수다.

// this를 쓸거면 function을 쓰고, 안 쓸거면 화살표 함수로 통일시키는 걸 권장

// 구조분해 할당
const example = {
  a: 123,
  b: {
    c: 135,
    d: 146,
  }
}
// const a = example.a;
// const d = example.b.d;
const { a, b: {d} } = example;

arr = [1, 2, 3, 4, 5]
// const x = arr[0]
// const y = arr[1]
// const z = arr[4]

const [x, y, , , z] = arr;

// Promise, async/await
