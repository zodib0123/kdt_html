// DOMContentLoaded는 사이트 랜더링 후 한번만 실행된다.
document.addEventListener('DOMContentLoaded', (event) => {
    //노드 가져오기
    //주사위 이미지 태그 가져오기
    const img = document.querySelector('#diceDiv > img');

    //버튼 태그 가져오기
    const bt = document.querySelector('#btDiv > button');

    //버튼이 클릭될 때
    bt.addEventListener("click", () => {
        let n = Math.floor(Math.random() * 6) + 1;
        img.setAttribute('src', `../img/${n}.png`);
        img.setAttribute('alt', `${n}`);
    });
});

