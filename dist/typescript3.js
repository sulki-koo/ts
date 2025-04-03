// 타입 추론 (type inference)
// 개발자가 타입을 명사하지 않아도 컴파일러가 타입을 추론할 수 있는 경우에는 타입을 명시하지 않아도 됨
// 타입 추론을 사용하면 타입선언 코드가 줄어들어서 코드 가독성이 높아짐
// 변수 초기화, 함수의 매개변수 기본값 설정, 함수 값 반환시에 타입추론이 발생 가능
// 변수 초기화 시 타입 추론
let str1; // any타입으로 추론
let str2 = 'hello'; // str2의 타입은 string타입으로 추론
let num4 = 100; // num2의 타입은 number타입으로 추론
// 함수 반환값 타입 추론
// 함수의 반환타입이 number가 확실하므로 명시하지 않음
function add(a, b) {
    return a + b;
}
// result1의 타입은 number가 확실하므로 명시하지 않음
let result1 = add(1, 2);
// hobby가 string[]이므로 인터페이스의 T는 string[]로 추론
const person3 = {
    name: '홍길동',
    hobby: ['축구', '농구']
};
// 타입 단언 (type assertion)
// 개발자가 직접 타입을 명시
// 이미 개발되어 있는 Javascript코드를 Typescript화 시켜야할때만 사용
// hong의 타입은 string으로 단언
const hong = '홍길동';
;
// human이 Human타입임을 선언 했으나
// name, age가 없으므로 에러
// let human: Human = {};
// human2가 Human타입임을 단언
let human2 = {};
// 파라미터의 타입도 반환 타입도 정의하지 않음
function getId(id) {
    return id;
}
// 파라미터 타입은 string으로 추정
// 반환 타입은 string으로 단언
const myId = getId('hong');
// 타입단언 중첩
// 10을 any타입으로 단언한 후에 다시 number타입으로 단언
const num3 = 10;
// ?. : optional chanining (null -> undefiend, null방지용)
function shuffleBooks(books) {
    const result = books === null || books === void 0 ? void 0 : books.shuffle();
    // const result = books!.shuffle(); // 컴파일 노에러, 실행 에러
    return result;
}
// 타입 가드 (type guard)
// 여러 타입 중 하나인 경우에 원하는 타입으로 타입을 한정
// typeof, instanceof, in 연산자를 통해서 타입의 범위를 좁힘
// v1변수는 hello문자열을 가지므로 string타입
const v1 = 'hello';
// typeof를 사용한 타입 가드
// v1변수가 string타입이 아니면 에러
if (typeof v1 === 'string') {
    console.log(v1.toUpperCase());
}
// 타입단언을 사용한 타입 가드
// param1이 number타입이 아닌 경우 에러 발생!
function func1(param1) {
    console.log(param1.toFixed(2));
}
function Bird(name) {
    this.name = name;
}
function Mammal(name, breastfeed) {
    this.name = name;
    this.breastfeed = breastfeed;
}
const bird = new Bird('독수리');
if (bird instanceof Bird) {
    console.log(bird.name);
}
// bird는 name만 가지고 있으므로 Mammal 호화타입이 아님
console.log(bird instanceof Mammal); // false
// book은 name과 author를 가졌으므로 Book타입
const book = {
    name: '타입스크립트',
    author: '마소'
};
if ('author' in book) { // Book타입
    console.log(book);
}
if ('tutor' in book) { // Lecture타입
    console.log(book);
}
;
;
// someone이 Hong타입이면 true, 아니면 false
// someone이 age를 가지 있다면(Hong타입 이라면) Hong타입인지를 반환
function isHongOrPark(someone) {
    return someone.age != undefined;
}
const programmer = {
    name: '홍길동',
    age: 30,
    jobName: 'programmer'
};
if (programmer.jobName === 'programmer') { // Programmer 타입
    console.log(programmer.jobName);
}
