//npm install mongodb
// 라이브러리 로드
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert"); //검증용 라이브러리

// 데이터베이스 접소 ㄱ정보
const url = "mongodb://localhost:27017";
const dbName = "mydb";


const conn = new MongoClient(url, {
    useNewUrlParser:true
});
// 접속 테스트
function connect_test(){
    // 접속

    conn.connect(function(err, client){
        // 에러가 있는지 확인
        assert.equal(null, err);
        console.log("Mongodb Connected");
        client.close();
    });

}


//----Insert 
function insertOne(){
    conn.connect ((err, client) => {
        console.log("connect")
        const db = client.db(dbName);

        db.collection('friends').insertOne(
        {   name: "홍길동",
            email: "hong@gile.org",
            phone : "010-1234-5678",
            createdAt : new Date()
        },
        (err, result) => {
            console.log("insert 된 문서 갯수:", result.insertedCount)
        }

        )
    });
}

function insertMany() {
    conn.connect((err, client) => {
        const db = client.db(dbName);

        db.collection("friends").insertMany(
        [ {name : "장길산", email : "jang@gile.com"},
        {name : "전우치", phone : "010-9876-5432"}],
        (err, result) => {
            console.log("insert 된 데이터  갯수:", result.insertedCount);
            client.close();
        }
        
        )
    });
}

function update_test() {
    conn.connect((err, client) => {
        const db = client.db(dbName);

        db.collection("friends").updateOne(
            { name: "장길산"},
            { $set : {phone : "010-0000-0001"}},
            (err, result) => {
                console.log("업데이트 된 데이터  갯수:", result.modifiedCount);
                client.close();
            }

        )
    });
}

function delete_test() {
    conn.connect((err, client) => {
        const db = client.db(dbName);

        db.collection("friends").deleteOne(
            { name: "전우치"}, // 삭제 조건 
            
            (err, result) => {
                console.log("삭제된 데이터  갯수:", result.deletedCount);
                client.close();
            }

        )
    });
}

// 검색 (SELECT)
function find_test() {
    conn.connect((err, client) => {
        const db = client.db(dbName);

        db.collection("friends").find((err, result)=> {
            // console.log("result : ",result); 
        result.forEach((doc)=> {
            console.log(doc);
        });
        
        client.close();
    });
})
}



function find_array_test() {
    conn.connect((err, client) => {
        const db = client.db(dbName);

        db.collection("friends").find().toArray((err, result)=> {
        for(let i =0; i < result.length; i++){
            console.log("friends", result[i]);
        }
        client.close();
        });

    });
}


// 테스트 수행

// connect_test();
// console.log("테스트 수행 완료");
// insertOne();
// insertMany();
// update_test();
// delete_test();
// find_test();
find_array_test();