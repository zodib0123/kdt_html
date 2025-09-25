// 관광공사 API Get
const getData = (gdt, content) => {
  let serviceKey = '78f287d64053f2517b6c67b73278242516f296e3bfe16cf05bdeff1c1d6743db';
  let url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?`
    + `serviceKey=${serviceKey}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&`
    + `keyword=${gdt}&_type=json`;

  //fetch
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      //console.log(data);
      const images = data.response.body.items.item;
      let img = images.map(item => `<div class="imgDiv"><img src="${item.galWebImageUrl}" class="imgs">
        <p>${item.galTitle}</p>
        <p>${item.galPhotographyLocation}</p></div>`).join('');
      content.innerHTML = img;
    })
    .catch(err => console.err(err));
}

document.addEventListener('DOMContentLoaded', () => {
  // 요소 가져오기
  const txt1 = document.querySelector("#txt1");
  const btn1 = document.querySelector("#btn1");
  const btn2 = document.querySelector("#btn2");
  const content = document.querySelector("#content");

  // 확인 버튼이 눌러지면 데이터 가져오기
  btn1.addEventListener(('click'), () => {
    getData(encodeURIComponent(txt1.value), content);
  })

  //취소 버튼이 눌러지면 화면 지우기 => 텍스트 내용과 content내용 지우기
  btn2.addEventListener('click', () => {
    txt1.value = "";
    content.innerHTML = "";
  })

})