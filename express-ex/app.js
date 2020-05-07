//  Express, http 모듈을 불러오기
const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const webRouter = require("./router/web");
const apiRouter = require("./router/api");

//  Express 객체 생성
const app = express();
//  환경 정보 관련 메서드 : set, get
app.set("port", 3000);
//  정적 파일 처리를 위한 미들웨어 추가
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded( {extended: false}));

// view Engine 을 ejs로 설정 
//npm install ejs --save
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//---- USE
app.use("/web",webRouter(app));
app.use("/api",apiRouter(app));

//----  요청 처리 : get, post
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

function startServer(){
    const dburl = "mongodb://localhost/21017";
    // DB에 연결 ㄱㄱ!
    MongoClient.connect(dburl,
        {useNewUrlParser: true},
        (err,client)=>{
            if(!err){// DB 접속 성공시 콜백 함수.            
            db = client.db("mydb");
            console.log("데이터 베이스 연결 성공");
            // DB 정보를 app에 등록
            app.set("db",db);
            //Express 시작!
            startExpress();
            }
            else{
                console.error("데이터 베이스 연결 실패");
            }
        });
}

//startExpress();
startServer();
