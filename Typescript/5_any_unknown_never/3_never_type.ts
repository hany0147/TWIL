/**
 * Never type
 */
// (1) 함수에서 에러를 던질 때
// (2) 무한 루프
// (3) 존재 할 수 없는 인터섹션
type StringAndNumber = string & number;

// 즉 never는 일어날 수 없는 일이라는 뉘앙스를 줌.