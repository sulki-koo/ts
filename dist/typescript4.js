// 타입 호환 (Type Compatability)
// 좁은타입 -> 넓은타입 OK
// 넓은타입 -> 좁은타입 ERROR
let s1 = 'hi';
let s2 = 'hello';
s1 = s2; // s1이 넓은타입
;
;
let i4 = { name: '홍길동' };
let i5 = { name: '강감찬' };
// i4, i5가 I4, I5 타입인 것이 중요하지 않음
// 둘 다 name: string 이라는 것이 중요
i4 = i5;
i5 = i4;
;
;
;
;
let animal5 = { name: '동물' };
let dog5 = { name: '강아지', sound: '왈왈' };
let bird5 = { name: '새', leg: 2 };
// dog5 = bird5; // sound 없어서 에러
// bird5 = dog5; // leg 없어서 에러
animal5 = dog5; // name 있으므로 OK
animal5 = bird5; // name 있으므로 OK
;
;
let dog6 = { name: '갱얼쥐', sound: '왈왈' };
let bird6 = { name: '참새', leg: 2 };
dog6 = bird6; // sound가 옵셔널이므로 OK
bird6 = dog6; // leg가 옵셔널이므로 OK
// 함수타입의 타입 호환
// 파라미터가 적은 쪽에서 많은 쪽으로 호환 가능
let func6 = function (a, b) {
    return a + b;
};
let func7 = function (a) {
    return a;
};
func6 = func7;
// func7 = func6; 
// enum 타입의 타입 호환
// enum 타입은 상호간 타입 호환 불가
var Eunm1;
(function (Eunm1) {
    Eunm1[Eunm1["A"] = 0] = "A";
    Eunm1[Eunm1["B"] = 1] = "B";
    Eunm1[Eunm1["C"] = 2] = "C";
})(Eunm1 || (Eunm1 = {}));
;
var Eunm2;
(function (Eunm2) {
    Eunm2[Eunm2["A"] = 0] = "A";
    Eunm2[Eunm2["B"] = 1] = "B";
    Eunm2[Eunm2["C"] = 2] = "C";
})(Eunm2 || (Eunm2 = {}));
;
let e1 = Eunm1.A;
let e2 = Eunm2.A;
;
let inter1 = 'string';
let inter2 = 30;
// In1인터페이스에서 구조정의를 하지 않았으므로 호환 가능
inter1 = inter2;
inter2 = inter1;
;
let inter3 = { data: 'string' };
let inter4 = { data: 30 };
// In2인터페이스에서 구조정의를 했으므로 string과 number 호환 불가
// inter3 = inter4;
// inter4 = inter3;
