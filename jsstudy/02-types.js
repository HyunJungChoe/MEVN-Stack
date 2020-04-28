
function number_ex() 
{
    // Number 관련 예제 코드
    //----다양한 형태의 수치 데이터
    const dec = 2020;
    const oct = 0o10;
    const hex = 0xFF;
    
    console.log(dec, oct, hex);

    //----수학 함수 활용
    const data = 3.567;
    console.log("반올림 :", Math.round(data)," 버림 :", Math.floor(data));

    console.log(Math.min(1,5,7,4,3,9), Math.max(1,5,7,4,3)); // 최솟값, 최댓값

    //----casting : 다른 함수형을 Number형으로 변환
    let str = "123.456"; //문자열로 된 수치 데이터

    console.log(str,"is", typeof str);
    console.log(str,"-> float:", parseFloat(str));
    console.log(str,"-> int:", parseFloat(str));

    str = "a123.456";
    let conv = parseFloat(str);
    console.log(str,"-> float:", conv);

    //----NAN가 포함된 산술 계산은 NaN
    console.log(conv,"+",10,"=",conv+10);

    console.log(conv, "isNaN?", isNaN(conv));

    //----무한
    let result = 4 /0;
    console.log("4 / 0 = ", result);
    //무한이 포함된 산술식은 무한이다.
    console.log("4 / 0 = ", result+10);
    //유한수의 확인 : isFinite() 
    console.log(conv, "isFinite?", isFinite(result));

    
}

//-----------------------------------------------------------
//-----------------------------------------------------------

function string_ex(){
    //문자열 타입 연습
    const s1 = "mordern javascipts and java";
    const s2 = String(Math.PI);
    console.log(s1, typeof(s1));
    console.log(s2, typeof(s2));

    // 길이 확인
    console.log(s1, "LENGTH:", s1.length);

    // 문자열 추출 메서드들 
    console.log("7번 인덱스:", s1.charAt(7));
    console.log("7번 인덱스:", s1[7]);  // 배열처럼 접근
    console.log("7번~10 글자:", s1.substr());
    console.log("7번~ 17 글자:", s1.substr(7,17));
    console.log("7번~ 끝:", s1.substr(7));

    //검색 메서드(중요)
    // s1 에서 java 라는 문자열 확인
    let position = s1.indexOf("java");
    console.log("index of java in s1:", position);
    position = s1.indexOf("java",position + 1);
    console.log("2nd index of java in s1:", position);
    position = s1.indexOf("java",position + 1);
    console.log("3rd index of java in s1:", position);
    
    // 검색내용 없을 때 -1 리턴

    //문자열 치환
    //s1 내부의 js-> jacascript 
    console.log("치환:",s1.replace("javascript","js"));

    //화이트 스페이스 제거
    console.log("          java     ".trim());


    // 이스케이프 문자 -> 문자열 내부에 특수 문자를 사용하고자 할 경우
    let temp = 18;
    let message = "온도는" + temp + "도 입니다.";
    console.log(message);
    // 템플릿 문자열을 이용 작성
    // 데이터 연결을 위한 위치 ${}
    message = `현재 온도는 ${temp} 입니다.`;
    console.log(message);


}

function boolean_ex(){
    // boolean : true, false 
    // 비교 연산, 논리 연산의 결과 값 -> 흐름 제어
    // boolean 타입 함수를 이용
    // 문자열, number 아입은 값을 이용하여 논리값을 얻어낼 수있다.
    console.log(Boolean("String"),Boolean(""));
    console.log(Boolean(123),Boolean(0));

    // 중요 : undefined vs null
    // undefined는 선언 되었으나 값이 할당되지 않은 케이스
    // null은 개발자가 직접 값이 없음을 할당.
    let v1;
    let v2 = null;
    console.log(v1);
    console.log(v2);

    //undefined 체크
    console.log(v1,"is undefined?", v1 == undefined, typeof(v1 == "undefined")); //중요


    // == vs ===
    // == 값만 비교
    // === 값과 타입을 동시 비교
    console.log(123 == "123");  // T
    console.log(123 === "123"); // F


}


// number_ex();
// string_ex();
 boolean_ex();
