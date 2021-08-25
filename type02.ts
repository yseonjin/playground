// let a: Object = {
//     b: "hello"
// }
// TS2339: Property 'b' does not exist on type 'object'. 오류발생
// object type 에서는 객체의 Property 에 접근할 수 없다.
//console.log(a.b);

let cd: { d: string } = {
    d: "world"
}
// 위와 같이 구조자체를 타입으로 명시해 준다.
// 구조기반 타입화 : 덕 타이핑
console.log(cd.d);

// 이 때 정의되지 않은 프로퍼티를 넣거나, 정의된 프로퍼티가 없으면 에러가 발생한다.
// 선택적으로 사용할 수 없을까?
let f: { e: string, g?: string } = {
    e: "no G!"
}
console.log(f.e);
// 없는 값을 호출했다면? -> undefined
console.log(f.g);
// 아주 type 에 조차 없는 값을 호출하려하면 error
// console.log(f.h);

