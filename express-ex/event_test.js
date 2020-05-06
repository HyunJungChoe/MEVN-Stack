let seconds = 0;

// 모듈 불러오기
const Ticker = require("./modules/ticker");

process.on("tick", () => {
    //  tick 이벤트를 수신할 콜백
    seconds++;
    console.log(seconds + "초가 지났습니다.");
    //  10초 초과하면 ticker 객체에 stop 이벤트를 전송
    if (seconds >= 10) {
        ticker.emit("stop");
    }
});

let ticker = new Ticker(process);
ticker.start();