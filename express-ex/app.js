//  Express, http 모듈을 불러오기
const express = require("express");
const http = require("http");

//  Express 객체 생성
const app = express();
//  환경 정보 관련 메서드 : set, get
app.set("port", 3000);
//  정적 파일 처리를 위한 미들웨어 추가
app.use(express.static(__dirname + "/public"));


// view Engine 을 ejs로 설정 
//npm install ejs --save
app.set("view engine", "ejs");
app.set("views",__dirname + "/views");


//  요청 처리 : get, post
app.get("/", (req, resp) => {
    console.log("[GET] /");
    //  응답 출력
    resp.writeHead(200, 
        {"Content-Type": "text/html;charset=UTF8"});
    resp.write("<h1>Express Welcomes You</h1>");
    resp.end();
});

app.get("/query",(req,resp) => {
    console.log("[GET] /query");
    console.log("[Query] ", req.query);

    let paramName = req.query.name;
    if(paramName == undefined || paramName.length == 0){
        resp.status(404)
            .contentType("text.html; charset = UTF-8")
            .send(" 파라미터를 확인 할 수 없음");
    }else{
        resp.status(200)
            .contentType("text.html; charset = UTF-8")
            .send("<h1>welcom,"+paramName+ "</h1>");


    }
});


app.get("/urlparam/:name",(req,resp) => {
    let userName = req.params.name;
    resp.status(200)
            .contentType("text.html; charset = UTF-8")
            .send("<h1>welcom,"+ userName + "</h1>");
});


function startExpress() {
    //  http 모듈을 이용해서 Express 객체를 시작
    http.createServer(app).listen(app.get("port"), () => {
        console.log("WebServer is listening...");
    });
}

app.get("/render",(req,resp)=>{
    //EJS view 엔진으로 템플릿 렌더링
    resp.status(200)
        .render("render");

});

startExpress();