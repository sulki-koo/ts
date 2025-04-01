// 인터페이스
// 객체의 타입을 정의할때 사용

interface User {
    name: string;
    age: number;
}
// User 타입 객체
const user1: User = {name: '홍길동', age: 20};

// 함수 파라미터, 리턴타입으로 인터페이스 사용
function getUserInfo(user: User): User {
    return user;
}
const kang: User = getUserInfo({name: '강감찬', age: 30});

// 인터페이션 옵셔널 속성
interface User2 {
    name: string,
    age?: number; // optional
}
const lee: User2 = {name: '이순신', age:40};
const choi: User2 = {name: '최영'};

// 인터페이스 상속
interface Animal {
    name: string;
    legCnt: number;
}
interface Bird extends Animal {
    hasWing: boolean;
}
const bird1: Bird = {name: '독수리', legCnt: 2, hasWing: true};
// const bird2: Bird = {name: '독수리', legCnt: 2};

// 객체 프라프티명으로 숫자를 사용
interface Student {
    [key: number]: string;
}
const student: Student = {
    1: '홍길동',
    2: '강감찬'
}

// 객체 프라퍼티명으로 문자를 사용
interface Student2 {
    [key: string]: string;
}
const student2: Student2 = {
    'hong': '홍길동',
    'kang': '강감찬'
}

// 배열 인덱스로 숫자를 사용
interface Student3 {
    [index: number]: string;
}
const student3: Student3 = ['홍길동', '강감찬'];

// 배열 인덱스로 문자를 사용 (불가)
// interface Student4 {
//     [index: string]: string;
// }
// const student4: Student4 = ['홍길동', '강감찬'];

// 유니온 타입 (union type)
let un: string | number;
un = '홍길동';
un = 100;
//un = true;

// 함수 파라미터로 유니언 타입 선언
interface Pen {
    name: string;
    color: string;
}
interface Note {
    name: string;
    pages: number;
}
function getInfo(obj: Pen | Note): void {
    if('color' in obj) { // Pen타입으로 type fuard
        console.log(obj.name, obj.color);
    } else { // Note
        console.log(obj.name, obj.pages);
    }
}
const pen = {name: '볼펜', color: '파랑'};
const note = {name: '연습장', pages: 100};
getInfo(pen);
getInfo(note);

// 인터섹션 (intersection)
// 여러 타입을 하나로 묶음
interface I1 { name: string };
interface I2 { age: number };
interface I3 { hobby: string[] };
const is1: I1 & I2 & I3 = {
    name: '홍길동',
    age: 30,
    hobby: ['축구', '농구']
}
console.log(is1);

// 타입 별칭 (type alias)
type myStr = string;
const str: myStr = '홍길동';
type myNum = number;
const num1: myNum = 30;
type myType = string | number | boolean;
const mt1: myType = '홍길동';
const mt2: myType = 30;
const mt3: myType = true;

// 인터페이스의 선언 병합 (declaration merging)
// 인터페이스를 동일한 이름으로 2개 이상 선언하면
// 프라퍼티들이 합쳐짐 (type에서는 불가능)
interface IT1 { name: string; };
interface IT1 { age: number; };
const it1: IT1 = { 
    name: '홍길동',
    age: 30
};
console.log(it1);

// enum
// 여러 상수들을 정의하기 위한 타입
// 선언된 순서대로 0,1,2... 값을 가짐
enum Planet { MERCURY, VENUS, EARTH, MARS };
console.log(Planet.MERCURY, Planet.EARTH);
// 상수값을 별도로 지정하면 지정한 값을 가짐
enum Planet2 { 
    MERCURY = '수성', 
    VENUS = '금성', 
    EARTH = '지구', 
    MARS = '화성'
};
console.log(Planet2.MERCURY, Planet2.EARTH);

// const enum
// js로 트랜스파일될때 코드양을 줄이는 enum
const enum Planet3 { 
    MERCURY = '수성', 
    VENUS = '금성', 
    EARTH = '지구', 
    MARS = '화성'
};

// 클래스
// 타입스크립트에서는 클래스의 프라퍼티들을 미리 정의해야 함
// 생성자의 파라미터타입과 메서드의 반환타입들을 정의해야 함
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getName(): string {
        return this.name;
    }
    getAge(): number {
        return this.age;
    }
}
const person1: Person = new Person('홍길동', 30);
console.log(person1);

// 제네릭 (generic)
// 타입을 실행시점에 화정하기 위함
function getText<T>(text: T): T {
    return text;
}
console.log(getText<string>('hello'));
console.log(getText<number>(30));

// 인터페이스에 제네릭 사용
interface Animal2<T> {
    name: string;
    body: T
};
// {color: string, legCnt: number} 도 하나의 타입임
const animal2: Animal2<{color: string, legCnt: number}> = {
    name: '호랑이',
    body: {
        color: '얼룩이',
        legCnt: 4
    }
};

// 제네릭 타입 상속
function printName<T extends string>(name: T): T{
    return name;
}
printName('홍길동');

// 인터페이스와 호환타입
// {length: number} : 프라퍼티명이 length이고 타입이 number인 인터페이스
function  lengthOnly<T extends {length: number}>(value: T): number {
    return value.length;
}
console.log(lengthOnly('hello'));
console.log(lengthOnly([1,2,3,4,5]));

// 제네릭과 유니온 결합
function lengthOnly2<T extends string | number>(value: T): number{
    if(typeof value === 'string') {
        return value.length;
    }
    return value;
}
console.log(lengthOnly2('123'));
console.log(lengthOnly2(123));

// keyof
// 객체의 프라퍼티명(키)들을 추출해 문자열 유니언 타입으로 변환
// = 프라퍼티명과 같은 문자열들만 추출
function printKeys<T extends keyof {name: string; skill: string;}>(value: T): void {
    console.log(value);
}
printKeys('name');
printKeys('skill');
//printKeys('hobby');
