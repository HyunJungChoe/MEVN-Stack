// 전역객체 console : 콘솔에 데이터를 출력하는 내장 객체
// console.log("디버그 메시지")
// 출력할 메시지의 종류에 따라
// .info(), warn(), error() 메서드 들이 있다.


// var, let, const
// var-> ES6 이전에 할당 방법
// let -> 가변 할당

let testVar;
testLet = "let";
// let, const-> 허용 범위가 블록 단위

const testConst= "const";
// const -> 불변 할당, 선언가 동시에 값을 설정(***)

console.log(testLet, typeof testLet);
// 동적 스크립트 언어 -> 값이 할당 될 때 타입이 결정
testLet = 2020;
console.log(testLet, typeof testLet);

