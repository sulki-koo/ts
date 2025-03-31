/*
    타입스크립트
    - 자바스크립트의 타입 모호성을 해결하기 위해서 개발된 전처리 언어
    - 타입스크립트에서 변수에 타입을 지정하려면 : 을 사용
    - 변수명: 타입
*/
// string
var hello = 'hello';
console.log(hello);
// number
var num = 10;
// boolean
var bool = true;
// array
var arr1 = ['홍길동', '강감찬', '이순신'];
var arr2 = ['홍길동', '강감찬', '이순신'];
// object
var obj = {
    name: '홍길동',
    age: 20
};
// tuple
// 고정 길이, 요소들의 타입이 미리 정의된 배열
var tup = ['홍길동', 20];
// any
// 어떤 타입도 모두 허용
// any타입을 쓰면 타입스크립트를 사용할 이유가 없음
// 어떤 타입인지 명확히 알 수 없는 경우에 한해 사용
var at = 100;
at = '백';
at = [1, 2, 3];
// undifined
// undefined는 타입이기도 하고 값이기도 함
var und = undefined;
// function에서의 타입
// 함수에서 파라미터 타입, 반환 타입을 지정해 줘야 함
function getStr(str) {
    return 'hi' + str;
}
getStr('홍길동');
// 함수 호출시에 파라미터 개수와 인자 개수가 동일해야 함
// 반환값이 없으면 void를 명시해 줘야 함
function getInfo1(name, age, hobby) {
    console.log(name, age, hobby);
}
getInfo1('홍길동', 20, '축구');
// optional parameter : 파라미터에 해당하는 인자가 없을때는 ?를 사용
function getInfo2(name, age, hobby) {
    console.log(name, age, hobby);
}
getInfo2('홍길동', 20, '축구');
getInfo2('홍길동', 20);
