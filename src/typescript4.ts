// 타입 호환 (Type Compatability)

// 좁은타입 -> 넓은타입 OK
// 넓은타입 -> 좁은타입 ERROR
let s1: string = 'hi';
let s2: 'hello' = 'hello';
s1 = s2; // s1이 넓은타입
//s2 = s1; // s2가 좁은타입

// 구조적 타이핑 (Structural typing)
// 타입이 무엇인지가 중요한게 아니라 타입이 가지는 프라퍼티명과 프라퍼티타입이 중요
interface I4 { name: string; };
interface I5 { name: string; };
let i4: I4 = { name: '홍길동' };
let i5: I5 = { name: '강감찬' };
// i4, i5가 I4, I5 타입인 것이 중요하지 않음
// 둘 다 name: string 이라는 것이 중요
i4 = i5;
i5 = i4;
interface I6 { name: number; };
// i4 = i6;
// i5 = i6;

// 객체간 타입 호환
// 할당받는 쪽의 타입을 만족해야 호환
interface Animal5 { name: string; };
interface Dog5 { name: string; sound: string; };
interface Bird5 { name: string; leg: number; };
let animal5: Animal5 = { name: '동물' };
let dog5: Dog5 = { name: '강아지', sound: '왈왈'};
let bird5: Bird5 = { name: '새', leg: 2 };
// dog5 = bird5; // sound 없어서 에러
// bird5 = dog5; // leg 없어서 에러
animal5 = dog5; // name 있으므로 OK
animal5 = bird5; // name 있으므로 OK

// 옵셔널을 활용한 타입 호환
interface Dog6 { name: string; sound?: string; };
interface Bird6 { name: string; leg?: number };
let dog6: Dog6 = { name: '갱얼쥐', sound: '왈왈' };
let bird6: Bird6 = { name: '참새', leg: 2 };
dog6 = bird6; // sound가 옵셔널이므로 OK
bird6 = dog6; // leg가 옵셔널이므로 OK

// 함수타입의 타입 호환
// 파라미터가 적은 쪽에서 많은 쪽으로 호환 가능
let func6 = function(a: number, b:number): number {
    return a + b;
}
let func7 = function(a: number): number {
    return a;
}
func6 = func7;
// func7 = func6; 

// enum 타입의 타입 호환
// enum 타입은 상호간 타입 호환 불가
enum Eunm1 { A, B, C };
enum Eunm2 { A, B, C };
let e1: Eunm1 = Eunm1.A;
let e2: Eunm2 = Eunm2.A;
// e1 = e2;
// e2 = e1;

// 제네릭의 타입 호환
interface In1<T> {};
let inter1: In1<string> = 'string';
let inter2: In1<number> = 30;
// In1인터페이스에서 구조정의를 하지 않았으므로 호환 가능
inter1 = inter2;
inter2 = inter1;

interface In2<T> { data: T };
let inter3: In2<string> = { data: 'string' };
let inter4: In2<number> = { data: 30 };
// In2인터페이스에서 구조정의를 했으므로 string과 number 호환 불가
// inter3 = inter4;
// inter4 = inter3;














