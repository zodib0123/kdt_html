document.addEventListener('DOMContentLoaded', () => {
    //0 ~ 100 랜덤숫자 만들기
    const num = Math.floor(Math.random() * 100) + 1;

    //노드 들고오기
    const img1 = document.querySelector('[alt="what"]');
    const btn1 = document.querySelector('#btn1');
    const txt1 = document.querySelector('#txt1');
    const inputDiv = document.querySelector('#inputDiv');
    /* flag 사용 시
     * let flag = false;
     * let n ;
     */
    txt1.focus();
    console.log(num);

    /* flag 사용 시
     * const init = (flagV, txt1v, txt1dis, btV, imgV) => {
     *     plag = flagV;
     *     txt1.value = txt1v;
     *     txt1.style.display = txt1dis;
     *     btn1.textContent = btV;
     *     img1.setAttribute('src', `../img/${imgV}.png`);
     * }
     */

    // 버튼 클릭 시
    btn1.addEventListener('click', (e) => {
        e.preventDefault();
        /* flag 사용 시
         * if(!flag) {
         *     n = Math.floor(Math.random() * 100) + 1;
         *     init(true, '', 'flex', ' 확 인 ', 'what');   
         * }
         */
        if (btn1.value == "end") {
            location.reload()
        }

        if (parseInt(txt1.value) > num) {
            img1.setAttribute('src', '../img/down.png');
            img1.setAttribute('alt', 'down');
        } else if (parseInt(txt1.value) < num) {
            img1.setAttribute('src', '../img/up.png');
            img1.setAttribute('alt', 'up');
        } else if (parseInt(txt1.value) == num) {
            img1.setAttribute('src', '../img/good.png');
            img1.setAttribute('alt', 'good');
            txt1.value = "";
            txt1.type = "hidden";
            btn1.textContent = "숫자를 생성해주세요";
            btn1.value = "end";
            /* flag 사용 시
            * init(false, '', 'none', ' 다시 하기 ', 'good');
            */
            // inputDiv.innerHTML = "<button> 다시 하기 </button>";     <-- 이거는 주소창에 "?" 값이 생성되어서 추천 X
        }

        txt1.focus();
    });
});