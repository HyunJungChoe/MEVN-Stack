

// 함수 선언문
function sum(a,b){
    return a + b;
}
console.log(sum(10,20));

const asum = function(a,b)
{
    return a + b;
}

console.log(asum(10,20),typeof asum);
//익명 함수 -> 반복 실행 필요 없을 때 일시적으로 생성후 사용하는 함수
// 즉시 실행 함수 
(function(a,b){
    // 프로그램의 초기화 코드
    console.log("즉시 실행 함수!");
    console.log("a+b:",a+b);

    
})(10,20);

// 함수의 인수 (매개 변수)
//전달된 인수의 개수 상관 없이 모든 인수를 arguments라는 배열로 전달해 준다.
function getNumberTotal(){
    console.log(arguments);
}
console.log(getNumberTotal(1,2,3,4,5));
console.log(getNumberTotal(1,2,"3",4,5));

function calc (v1, v2, func)
{
    if (typeof func == "function") {
        // 다른 함수에 인수로 전달되어 역으로 호출되는 함수
        // 콜백 함수 
        return func(v1, v2);
    }
}

console.log(calc(3,4,function(v1,v2) {
    return v1 + v2;
}));


// 화살표 함수: 콜백 등 일회성 함수가 필요한 경우 전달해 줄 수 있는 축약형 함수 (ES6)
const f1 = function() {return "hello"};
const f1Arrow = () => "hello";

console.log(f1(),f1Arrow());

const f2 = function(name) {return "hello," + name};
const f2Arrow = (name) => "hello," + name;
console.log(f2("BIT"),f1Arrow("BIT"));

// 화살표 함수를 이용한 콜백 함수의 전달
console.log(calc(3, 4, (a, b) => a * b ));

let arr = new Array(1,2,3,4,5,6,7,8,9,10);
//배열 루프 메서드 콜백 함수로 활용 
for(i =0; i< arr.length; i++){
    console.log(arr[i]);
}

arr.forEach((item) => console.log(item));
