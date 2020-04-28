

//---- 방법1. Object를 생성-> 동적으로 속성을 추가
const person = new Object();
// 동적 타이핑 언어의 특성 동적으로 속성을 추가
person.name ="홍길동";
person.job="도적";
person.showInfo = function(){
    let message = `Name: ${this.name}, job: ${this.job}`;
    console.log(message);
}

person.showInfo();

//---- 방법2. JSON(객체 표기법) -> 중요
// 속성을 키 : 값
const person2 = {
    name : "홍길동",
    job: "도적",
        showInfo: function(){
        let message = "Name:"+ this.name + ", job:" + this.job;
        console.log(message);
    }

}

person2.showInfo();

//---- 방법3. 프로토타입 기반의 상속
// 객체의 설계도로서의 class
const Member = function(name, position){
    this.name = name;
    this.position = position;

}

let m1 = new Member("강백호","PF");
let m2 = new Member("서태웅", "SF");

// m1.introduce = function()
// {
//     console.log(`${this.name}(${this.position})님이 자기소개를 합니다.`);

// }
// m1.introduce(); //인스턴스에 만들어진 속성이어서 공유되지 않는다.
// m2.introduce(); // 오류 생김

console.log("m1 constructor?", m1.constructor);
console.log("m2 constructor?", m2.constructor);
console.log("멤버의 프로토타입 영역?", Member.prototype);
// constructor 객체의 프로토타입 영역에 속성을 넣으면 모든 개별 인스턴스가 공용 접근 속성을 만들 수 있다.

Member.prototype.introduce = function(){
    console.log(`${this.name}(${this.position})님이 자기소개를 합니다.`);
}
m1.introduce(); 
m2.introduce(); 
console.log("멤버의 프로토타입 영역?", Member.prototype);

