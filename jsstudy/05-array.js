// Array를 이용한 생성
const v1 = new Array(10); // 10개 짜리 배열
console.log(v1, v1.length);
const v2 = new Array(); // 빈 배열
console.log(v2, v2.length);
const v3 = new Array(1, "ABC",true); // 빈 배열
console.log(v3, v3.length);

// 추천 : literal [] 로 생성
const v4 = [];
const v5 = [1,"abc",true];
console.log(v4, v5);

// 기본 값으로 채우기
v5.fill("0");
console.log("fill:", v5);


// 객체도 배열처럼 접근할 수 있다.
const person = {
    name : "홍길동" ,
    job : "도적"

};
console.log(person.name, person['name']);

// 인덱스 범위를 엄격하게 체크하지 않음
const arr =[];
console.log("length arr:", arr.length);
// 범위를 넘은 인덱스
arr[10] = 5;
console.log(arr);
// 인덱스로 Number가 아닌 String도 사용.
// -> 일종의 Map 자료형 처럼 이용
arr["name"] = "홍길동";
console.log(arr);

// 배열 메서스들 
// 배열 합치기 
const veges =["배추", "무", "쪽파"];
const source =["소금","고춧가루","새우젓"];
const ingr = veges.concat(source);
console.log(ingr);

// 요소 합치기
console.log("김장 재료:", ingr.join(","));

// 요소의 추가 : push 
// 삭제 : pop

// push, pop을 조합 -> stack 처럼 활용
let fruits = ["바나나", "오렌지", "사과","망고"];
fruits.push("키위");
console.log(fruits);
let item=fruits.pop();
console.log(item);

// push, shift -> queue 
item = fruits.shift();
console.log("shift:", item);
console.log(fruits);

//splice : 요소의 추출과 삭제, 삽입을 동시에 할 수 있는 메서드 
fruits = ["바나나", "오렌지", "사과","망고"];
    // 인자가 2개
let chunk = fruits.splice(2,1);
console.log("조각:", chunk);
console.log(fruits);
    //인자가 3개 이상
fruits = ["바나나", "오렌지", "사과","망고"];
chunk = fruits.splice(2,1,"키위","수박");
console.log("조각:", chunk);
console.log(fruits);

// reverse
fruits = ["바나나", "오렌지", "사과","망고"];
console.log("원본:", fruits);
fruits.reverse();
console.log("reverse:",fruits);

// slice
chunk = fruits.slice(1,2);
console.log("조각:", chunk);
console.log("배열:",fruits);

// SORT : 정렬
console.log("원본:", fruits);
fruits.sort(); // 기본적으로 오름차순 정렬
console.log("정렬:",fruits);
fruits.sort(function(a,b){
    // if(a == b) return 0;
    // if(a > b) return -1;
    // if(a < b) return 1;
    return a == b ? 0 : a > b ? -1 : 1;

});
console.log("역순 정렬:", fruits);

const str = "javascript is something strange than other language";
const words = str.split(" ");
console.log("words:",words);










