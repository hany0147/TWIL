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
/**
 * Promise: 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체
 * - Then을 붙이면 결과를 반환함
 * - 코드를 분리할 수 있다.
 * - resolve ->  then으로 연결, reject -> catch로 연결
 * 
 * for await
 */

// Map/Set
const m = new Map();
m.set('a', 'b');
console.log(m);
m.set({'a': 'b'}, 'c');
console.log(m);
console.log(m.size);

const s = new Set();
s.add(1)
s.add(2)
s.add(1)
console.log(s);

const wm = new WeakMap(); // garbage collector
let obj3 = {}
wm.set(obj3, '123');
console.log(wm);
const ws = new WeakSet();

// Null병합, 옵셔널 체이닝
const ae = 0;
const b = ae || 3; // falsy값이면 뒤로 넘어간다.
console.log(b)

const c1 = 0;
const d1 = c1 ?? 3;
console.log(d1); // ?? 연산자는 null과 undefined일 때만 뒤로 넘어감.

const e1 = null;
const f1 = e1 ?? 3;
console.log(f1);

c1?.d; // c?.[0] (o)  // c?[0] (x)

c2 = null;

console.log(c2?.[0] ?? '123'); // 둘이 합쳐 쓰면 좋음

// 프론트엔드 자바스크립트
/**
 * AJAX
 * Axios 라이브러리를 사용하는 게 편함.
 * FormData: HTML form 태그에 담긴 데이터를 AJAX 요청으로 보내고 싶은 경우
 * endcodeURIComponent :가끔 주소창에 한글 입력하면 서버가 못하는 경우를 대비해 쓴다.
 * HTML 태그에 데이터를 저장하는 방법
 * data-user-job -> dataset.userJob
*/