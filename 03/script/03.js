// 기본 문법
// function hello(n) {
//     if (params == '1') alert("안녕하세요.");
//     else alert('반갑습니다.');

//     console.log('콘솔출력입니다.');
// }

//화살표 함수
const Hello = (params) => {
    // ==, === 비교
    if (params == '1') alert("안녕하세요.");
    else alert('반갑습니다.');

    console.log('콘솔출력입니다.');
}

const CheckVar = () => {
//    변수는 let, 상수는 const
//    x = 10;
//     var x;
    let x;
    x = 'test';
//    상수는 선언과 동시에 값을 넣어줘야된다.
    const y = '20';
//    y = 40;
//    console.log('x = ' + x);
    console.log(`x = ${typeof(x)}, y = ${typeof(y)}`);
    console.log(`문자열 ${x}은 문자인가요? ${isNaN(x)?'예':'아니요'}`);
    console.log(`문자열 ${y}은 문자인가요? ${isNaN(y)?'예':'아니요'}`);
}