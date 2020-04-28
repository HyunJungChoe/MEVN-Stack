//date 생성자
const now = new Date();
console.log("now:", now);

let time = new Date(2020, 2 , 28, 14, 43);
console.log("time:",time);

console.log(time.getFullYear(),
            time.getMonth(),
            time.getDate(),
            time.getDay(),
            time.getHours(),
            time.getMinutes(),
            time.getSeconds()
            );

time.setFullYear(2021);
console.log("Future:",time);

