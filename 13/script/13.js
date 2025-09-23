// 어제 날짜 가져오기
const getYesterday = () => {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() -1);

  // let year = String(yesterday.getFullYear());   // 년도 4자리
  // let month = String(yesterday.getMonth() + 1).padStart(2, '0'); // 월 1 ~ 12
  // let day = String(yesterday.getDate());         // 일 1 ~ 31
  
  // return (year + "-" + month + "-" + day);

  // ISO 형식 (예: 2025-09-22 09:00:00.000Z)
  return yesterday.toISOString().slice(0, 10);
}

// 박스오피스 가져오기
const getData = (gdt) => {
  let apikey = '320e9ec6bb9f61b093cca2c374c56832';
  let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${gdt}`;

  //fetch
  fetch(url)
    .then(resp => console.log(resp))
    .catch(err => console.err(err));
}

document.addEventListener('DOMContentLoaded', () => {
  // 요소 가져오기
  const dt = document.querySelector("#dt");
  const box = document.querySelector("#box");

  // 어제 날짜
  dt.value = getYesterday();
  dt.setAttribute('max', getYesterday());

  // 초기 박스오피스 가져오기
  getData(dt.value.replaceAll('-', ''));
});