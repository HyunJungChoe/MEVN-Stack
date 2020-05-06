const util = require("util");   //  Node.js 내장 유틸리티 객체
const EventEmitter = require("events").EventEmitter;
//  이벤트를 주고 받을 사용자 정의 객체는
//  EventEmitter를 상속받아야 한다
let ticker_target = null;

//  객체 생성자
const Ticker = function(target) {
    ticker_target = target;
    //  이벤트 리스너 부착
    this.on("stop", () => {
        //  stop 이벤트를 받게 되면 수행할 callback함수
        console.log("stop 이벤트 수신");
        clearInterval(ticker);
    });
}

//  prototype을 이용한 공용 메서드 추가
Ticker.prototype.start = () => {
    console.log("Ticker Start!");
    ticker = setInterval(() => {
        //  이벤트 전송
        ticker_target.emit("tick");
        //  ticker_target 객체에 tick 이벤트 전송
    }, 1000);   //  1초마다 한번씩 함수를 실행
}

//  EventEmitter를 상속 -> Node.js의 util로 간단히 수행
util.inherits(Ticker, EventEmitter);
//  EventEmitter의 prototype의 모든 내용을 Ticker 객체로 복사

//  외부로 export
module.exports = Ticker;