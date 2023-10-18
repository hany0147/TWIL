# HTTP Method
- 클라이언트와 서버 사이에 이루어지는 요청(Request)과 응답(Response) 데이터를 전송하는 방식을 일컬음
- 즉, 서버가 수행해야 할 동작을 지정하는 요청을 보내는 방법을 의미.

## 메서드 종류
- GET: 리소스 조회
  - 리소스 조회 메서드(READ)
  - 데이터는 쿼리스트링을 통해서 전달
  - 캐싱 가능
- POST: 리소스 생성
  - 전달한 데이터 처리/생성 요청 메서드(CREATE)
  - 메시지 바디(body)를 통해 서버로 요청 데이터를 전달하면, 서버는 해당 데이터를 처리하여 업데이트
  - 주로 신규 리소스 등록에 사용
  - Content-Type 헤더 종류
    1. application/x-www-form-urlencoded: 전송 데이터를 url encoding 처리(http 메시지 바디 통해서 전송, key=value)
    2. multipart/form-data: 바이너리 데이터(ex: 파일) 전송 시 사용
    3. application/json: text, XML, JSON 데이터 전송 시 사용
- PUT: 리소스 대체(수정)
  - 만일 요청 메시지에 리소스가 있으면 덮어쓰고, 없으면 새로 생성
  - POST와 달리 클라이언트가 리소스의 구체적인 전체 경로를 지정하여 보내주어야 함
  - 기존 데이터가 완전히 대체되기 때문에 일부만 대체할 경우 **PATCH** 메서드를 사용해야 함
- PATCH: 리소스 일부 변경
- DELETE: 리소스 삭제