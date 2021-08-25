function squareOf(n: number) {
    return n * n;
}

// 아래와 같이 작성하게 되면 type checker 에 의해 type error 발생
// console.log(squareOf("hello"));

console.log(squareOf(2));