# REST

- Representational State Transfer
- 자원을 이름으로 구분하여 해당 **자원의 상태를 주고받는** 것을 의미
- 즉, 자원의 표현에 의한 상태 전달
  - 자원의 표현
    - 자원: 해당 소프트웨어가 관리하는 모든 것
    - 자원의 표현: 그 자원을 표현하기 위한 이름
  - 상태(정보) 전달
    - JSON 혹은 XML을 통해 데이터를 주고 받는 것이 일반적
- 기본적으로 웹의 기존 기술과 HTTP 프로토콜을 그대로 활용하기 때문에 웹의 장점을 최대한 활용할 수 있는 아키텍쳐 스타일

1. HTTP URI를 통해 자원을 명시하고,
2. HTTP Method(POST, GET, PUT, DELETE, PATCH 등등)를 통해
3. 해당 자원(URI)에 대한 CRUD operation을 적용하는 것을 의미
    - Create: 생성(POST)
    - Read: 조회(GET)
    - Update: 수정(PUT, PATCH)
    - Delete: 삭제(DELETE)
    - HEAD: header 정보 조회(HEAD)

## REST 구성 요소
1. 자원(Resource): HTTP URI
2. 자원에 대한 행위(Verb): HTTP Method
3. 자원에 대한 행위의 내용(Representations): HTTP Message PayLoad

## REST의 특징
1. 서버-클라이언트 구조
2. 무상태(Stateless)
3. 캐시 처리 가능
4. 계층화(Layered System)
5. 인터페이스 일관성(Uniform Interface)


# REST API
- REST의 원리를 따르는 API

## 규칙
1. URI는 동사보단 **명사**, 대문자보다는 **소문자** 사용
2. 마지막에 슬래시(/)를 포함하지 않음
3. 언더바 대신 하이픈(-) 사용
4. 파일확장하는 URI에 포함하지 않음
5. 행위 포함하지 않음

## RESTful이란?
- REST의 원리를 따르는 시스템
- REST라는 아키텍쳐를 구현하는 웹 서비스를 나타내기 위해 사용되는 용어
- REST API의 설계 규칙까지 올바르게 지킨 시스템이어야 함