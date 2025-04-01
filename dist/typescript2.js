// 인터페이스
// 객체의 타입을 정의할때 사용
// User 타입 객체
const user1 = { name: '홍길동', age: 20 };
// 함수 파라미터, 리턴타입으로 인터페이스 사용
function getUserInfo(user) {
    return user;
}
const kang = getUserInfo({ name: '강감찬', age: 30 });
const lee = { name: '이순신', age: 40 };
const choi = { name: '최영' };
const bird1 = { name: '독수리', legCnt: 2, hasWing: true };
const student = {
    1: '홍길동',
    2: '강감찬'
};
const student2 = {
    'hong': '홍길동',
    'kang': '강감찬'
};
const student3 = ['홍길동', '강감찬'];
// 배열 인덱스로 문자를 사용 (불가)
// interface Student4 {
//     [index: string]: string;
// }
// const student4: Student4 = ['홍길동', '강감찬'];
// 유니온 타입 (union type)
let un;
un = '홍길동';
un = 100;
function getInfo(obj) {
    if ('color' in obj) { // Pen타입으로 type fuard
        console.log(obj.name, obj.color);
    }
    else { // Note
        console.log(obj.name, obj.pages);
    }
}
const pen = { name: '볼펜', color: '파랑' };
const note = { name: '연습장', pages: 100 };
getInfo(pen);
getInfo(note);
;
;
;
const is1 = {
    name: '홍길동',
    age: 30,
    hobby: ['축구', '농구']
};
console.log(is1);
const str = '홍길동';
const num1 = 30;
const mt1 = '홍길동';
const mt2 = 30;
const mt3 = true;
;
;
const it1 = {
    name: '홍길동',
    age: 30
};
console.log(it1);
// enum
// 여러 상수들을 정의하기 위한 타입
// 선언된 순서대로 0,1,2... 값을 가짐
var Planet;
(function (Planet) {
    Planet[Planet["MERCURY"] = 0] = "MERCURY";
    Planet[Planet["VENUS"] = 1] = "VENUS";
    Planet[Planet["EARTH"] = 2] = "EARTH";
    Planet[Planet["MARS"] = 3] = "MARS";
})(Planet || (Planet = {}));
;
console.log(Planet.MERCURY, Planet.EARTH);
// 상수값을 별도로 지정하면 지정한 값을 가짐
var Planet2;
(function (Planet2) {
    Planet2["MERCURY"] = "\uC218\uC131";
    Planet2["VENUS"] = "\uAE08\uC131";
    Planet2["EARTH"] = "\uC9C0\uAD6C";
    Planet2["MARS"] = "\uD654\uC131";
})(Planet2 || (Planet2 = {}));
;
console.log(Planet2.MERCURY, Planet2.EARTH);
;
// 클래스
// 타입스크립트에서는 클래스의 프라퍼티들을 미리 정의해야 함
// 생성자의 파라미터타입과 메서드의 반환타입들을 정의해야 함
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
const person1 = new Person('홍길동', 30);
console.log(person1);
// 제네릭 (generic)
// 타입을 실행시점에 화정하기 위함
function getText(text) {
    return text;
}
console.log(getText('hello'));
console.log(getText(30));
;
// {color: string, legCnt: number} 도 하나의 타입임
const animal2 = {
    name: '호랑이',
    body: {
        color: '얼룩이',
        legCnt: 4
    }
};
// 제네릭 타입 상속
function printName(name) {
    return name;
}
printName('홍길동');
// 인터페이스와 호환타입
// {length: number} : 프라퍼티명이 length이고 타입이 number인 인터페이스
function lengthOnly(value) {
    return value.length;
}
console.log(lengthOnly('hello'));
console.log(lengthOnly([1, 2, 3, 4, 5]));
// 제네릭과 유니온 결합
function lengthOnly2(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    return value;
}
console.log(lengthOnly2('123'));
console.log(lengthOnly2(123));
// keyof
// 객체의 프라퍼티명(키)들을 추출해 문자열 유니언 타입으로 변환
// = 프라퍼티명과 같은 문자열들만 추출
function printKeys(value) {
    console.log(value);
}
printKeys('name');
printKeys('skill');
//printKeys('hobby');
