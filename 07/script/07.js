document.addEventListener('DOMContentLoaded', (event) => {
    //주사위 이미지 태그 가져오기
    const comImg = document.querySelector('#diceComDiv > img');
    const userImg = document.querySelector('#diceUserDiv > img');

    //버튼 태그 가져오기
    const bt = document.querySelectorAll('#btDiv button');

    //버튼이 클릭될 때
    bt.forEach((btn) => {
        btn.addEventListener("click", () => {
            const comNum = Math.floor(Math.random() * 6) + 1;
            const userNum = parseInt(btn.getAttribute('value'));
            // let userNum = parseInt(btn.innerHTML.charAt(0));
            comImg.setAttribute('src', `../img/${comNum}.png`);
            comImg.setAttribute('alt', `${comNum}`);
            userImg.setAttribute('src', `../img/${userNum}.png`);
            userImg.setAttribute('alt', `${userNum}`);

            (comNum === userNum)
                ? document.getElementById('msg').innerHTML = `맞춤`
                : document.getElementById('msg').innerHTML = `틀림`;
        });
    });
});

