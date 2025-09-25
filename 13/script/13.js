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

const rankInten = (item) => {
  let result;
  if (item < 0) {
    result = `<i class="fa-solid fa-caret-down" style="color: #ff0026;"></i>${item * (-1)}`;  
  } else if (item > 0) {
    result = `<i class="fa-solid fa-caret-up" style="color: #055ffa;"></i>${item}`;
  } else {
    result = "-";
  }
  return result;
}

// 박스오피스 가져오기
const getData = (gdt, box) => {
  let apikey = '320e9ec6bb9f61b093cca2c374c56832';
  let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${gdt}`;

  //fetch
  fetch(url)
    .then(resp => resp.json())
    .then(data => {
      console.log(data);
      const boxs = data.boxOfficeResult.dailyBoxOfficeList;
      let tags = boxs.map(item => `<li class="boxli"><p>${item.rank}</p><span>${rankInten(item.rankInten)}</span>${item.movieNm.slice(0, 20)}</li>`).join('');
      box.innerHTML = tags;
    })
    .catch(err => console.err(err));

  
  console.log(url);
}

document.addEventListener('DOMContentLoaded', () => {
  // 요소 가져오기
  const dt = document.querySelector("#dt");
  const box = document.querySelector("#box");

  // 날짜가 변경될 때
  dt.addEventListener('change', () => {
    getData(dt.value.replaceAll('-', ''), box);
  })

  // 어제 날짜
  dt.value = getYesterday();
  dt.setAttribute('max', getYesterday());

  // 초기 박스오피스 가져오기
  getData(dt.value.replaceAll('-', ''), box);
});