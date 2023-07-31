/**
 * Crypto
 * 단방향 암호화
 * 
 * 단방향 암호화의 대표 주자는 해시 기법
 * 
 * 비밀번호에서 많이 쓰이는 해시함수
 * 
 * 해시는 복호화 할 수 없다.
 * 
 * createHash(알고리즘): sha512 추천 / md5와 sha1을 이미 취약점이 발견됨.
 */

const crypto = require('crypto');
console.log('base64', crypto.createHash('sha512').update('비밀번호').digest('base64'));
// update(문자열) : 변환할 문자열 넣기
// digest(인코딩): 인코딩할 알고리즘 넣기

//node는 pbkdf2, scrypt 지원

/**
 * 양방향 암호화
 * 
 * 1)대칭형 암호화(암복호화 가능)
 * - 암호화 할 때와 복호화 할 때 같은 Key를 사용함
 * - createCipheriv()
 * - 키를 훔칠 가능성이 있어 취약함
 * - AES 추천
 * 
 * 2)비대칭 암호화
 * - RSA 추천
 * 
 * AWS KMS(Key Management System)
 */

/**
 * Util
 * 
 * 각종 편의 기능을 모아둔 모듈
 * 
 * deprecated
 * 
 * promisify: 콜백 패턴을 프로미스 패턴으로 바꿔줌
 */

const util = require('util');
const dontUseMe = util.deprecate((x, y) => {
  console.log(x + y);
}, '이 함수는 deprecated되었으니 더 이상 사용 ㄴㄴ');

dontUseMe(1, 2);
