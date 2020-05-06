
 
console.log(process.version, //버전
    process.platform,  // os
    process.arch, //32비트 ? 64비트?
    )

console.log(process.versions);
console.log(process.env);

// 글로벌 변수 
console.log(__dirname, __filename); // 현재 모듈의 디렉터리와 파일 정보

// 모듈 불러오기
const add = require("./modules/test_module1").add;
const square = require("./modules/test_module1").square;

// 모듈 객체 호출
console.log(add(10,20), square(20));

// 모듈 불러오기(all)
const area = require("./modules/test_module2");
console.log(area.rectangle(10,20));
console.log(area.circle(10));
