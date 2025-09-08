//오브젝트 (객체)
let obj = {'오렌지' : '🍊'};

//오브젝트에 자료 추가
// obj.'사과' 도 가능.
obj['사과'] = '🍎';
obj['바나나'] = '🍌';
console.log(obj);

// key 값이 있으면 수정, 없으면 추가
obj['사과'] = '🍏';
console.log(obj);

//삭제
delete obj['사과'];
console.log(obj);

//keys 값만 추출
console.log(Object.keys(obj));
for (let k of Object.keys(obj)) {
    console.log(k, obj[k]);
}

//values 값만 추출
console.log(Object.values(obj));
for (let v of Object.values(obj)) {
    console.log(v);
}

//keys, values 같이 추출
console.log(Object.entries(obj));
for (let [k, v] of Object.entries(obj)) {
    console.log(k, v);
}

//오브젝트 병합
let obj1 = {...obj};
console.log("오브젝트복사 : ", obj1);
let obj2 = {'수박' : '🍉'};
let obj3 = {...obj2, ...obj};
console.log(obj3);