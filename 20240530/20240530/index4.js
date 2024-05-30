// nodejs의 내장 모듈
const os = require("os");
const path = require("path");
//console.log(os)

// nodejs의 내장 객체
// node의 전역 객체에는 global 객체가 있고
// nodejs 의 런타임 환경의 전역 객체
// global 은 생략 할 수 있다.
// console.log()
// nodejs의 모듈의 각각의 파일 스코프를 가지게 되기 때문에 this 는 모듈자체를 가르킨다.

// console.log
// __filename
// __filename : 파일 경로와 파일의 이름까지 보여줌.
console.log(__filename);

// __dirname
// __dirname : 실행한 파일의 디렉토리 까지 보여줌.
console.log(__dirname);


// process 객체
// nodejs 의 프로세스 정보를 가지고 있는 객체

console.log(process.version); // 설치된 노드의 버전
console.log(process.execPath); // 노드의 경로
console.log(process.cpuUsage()); // cpu 사용량