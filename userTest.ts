// extends를 이용해서 여러 interface 를 확장해 사용할 수 있다.
interface User extends Info{
    name: string;
    id: number;
}

interface Info{
    age: number;
}

// 이때 type 으로 지정한 interface 에 맞지 않는 객체를 생성하면 경고가 발생한다.
const user: User = {
    name: "john",
    id: 0,
    age:20
}




