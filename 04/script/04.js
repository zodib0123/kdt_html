
const btnCheck = () => {
    //1. 사용자가 입력한 문자열을 가져오기
    const inputValue = document.getElementById('txt1').value;

    //2. 사용자가 입력한 문자열을 뒤집기
    // console.log(typeof(inputValue));
    // console.log(inputValue.length);
    // console.log(inputValue[0]);
    // console.log(inputValue.charAt(0));

    //입력한 문자열에서 공백 제거
    let temp = inputValue.replaceAll(' ', '');
    let result = '';
    // for (let i = temp.length - 1; i >= 0; i--) {
    //     result = result + temp[i];        
    // }
    //split('') : 문자열 자르기 (기준 : '') / reverse() : 배열 뒤집기 / join('') : 배열 붙이기 (기준 : '')
    result = temp.split('').reverse().join('');
    console.log(result);

    //3. 사용자가 입력한 문자열과 뒤집은 문자열이 같은지 비교
    //3-1. 결과를 input 요소에 출력
    if (temp == result) {
        document.getElementById('txt2').value = `"${inputValue}"는 회문입니다.`;
    } else {
        document.getElementById('txt2').value = `"${inputValue}"는 회문이 아닙니다.`;
    }

    //3-2. 결과를 div 요소에 출력 (innerHTML 사용)
    document.getElementById('msg').innerHTML = `<span>"${inputValue}"</span>는 ${temp == result ? "회문입니다" : "회문이 아닙니다."}`;
}

const btnAdd = () => {
    //1. 사용자가 입력한 문자열을 가져오기
    const inputValue = document.getElementById('txt1').value;

    //2. 문자열에서 숫자 인식해서 더하기
    // let temp = inputValue.replaceAll(' ', '');
    let sum = 0;
    // for (let i = 0; i < inputValue.length; i++) {
    //     if (!isNaN(inputValue[i])) {
    //         sum = sum + parseInt(inputValue[i]);
    //     }
    // }
    for (let c of inputValue) {
        if (!isNaN(c)) {
            sum = sum + parseInt(c);
        }
    }

    //3. 합계 출력
    document.getElementById('txt2').value = sum;
    document.getElementById('msg').innerHTML = `합계 =&nbsp;<span>"${sum}"</span>`;
}

const btnCancle = () => {
    document.getElementById("txt1").value = '';
    document.getElementById("txt2").value = '';
    document.getElementById("msg").innerHTML = '';

    document.getElementById("txt1").focus();
}