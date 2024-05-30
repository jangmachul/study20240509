// 서버 로직을 만들어 보자.

// 내장 모듈을 가져오자
// 문자열로 데이터를 주고 받는데 규칙을 정한것.
// 프로토콜 : 규칙 약속
// 데이터 변환해서 전달하는데 규칙을 정하고 사용
const http = require("http");

// 서버 객체를 생성
// 이벤트 기반의 아키텍쳐
const server = http.createServer((req, res)=> {
    // req 요청에 대한 내용의 객체(교수님이 정한 이름)
    // res 응답에 대한 내용의 객체(교수님이 정한 이름)

    // 클라이언트 에서 요청을 보내면 받고
    // 응답을 해준다.
    res.end("server on");
})

// 서버 열어줄 때
// 포트를 할당을 해줘야 한다.
// 프로세스가 동작을 하고 있는 포트가 필요하다.

// 시스템 예약 포트이외
// 1025 ~ 65535까지 안에서 사용하면 된다.
// 개발할 때 자주 사용하는 포트는 3000, 8000, 4000

const PORT = 3000;
// 서버를 대기 상태로 열어주자

// listen 서버를 대기상태로 실행
server.listen(PORT,"localhost", ()=> {
    // 성공적으로 서버가 열리면 호출해서 확인하려고
    console.log("서버가 잘 열려 있어요");
})