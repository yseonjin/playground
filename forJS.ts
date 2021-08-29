const forObj = {
    a: 1,
    b: 2,
    c: 3
}
for (let obj in forObj) {
    console.log(obj);
}
// Object 형태는 iterator 가 아님
// for(let obj of forObj){
//     console.log(obj);
// }

const forArray = [1, 2, 3, 4];
// 1. for... in 반복문을 사용 -> 단, for...in 은 iterator 보다 enumerable 한 부분에 적합. 인덱스 보장 X
console.log("1. for...in");
for (let obj in forArray) {
    console.log(`${obj} , ${forArray[obj]}`);
}
// 2. for...of 반복문을 사용 -> iterable 한 부분에만 사용할 수 있다.
console.log("2. for...of");
for (let obj of forArray) {
    console.log(obj);
}

// 3. .foreach 반복문 -> Array 에서만 사용할 수 있으나, ES6 이후로 Map, Set 에서도 사용이 가능하다.
console.log("3. foreach")
forArray.forEach(array => {
    console.log(array);
})