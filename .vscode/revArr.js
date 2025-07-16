let ogArr = [1,2,'b','a'];
console.log(ogArr);
let len = ogArr.length-1;
let revArrWithlogic = [];

console.log('------------------------------------');
for(let l of ogArr){
  l = len;
  // console.log(ogArr[l]);
  revArrWithlogic.push(ogArr[l]);
  len--;
}
console.log(revArrWithlogic);

console.log('------------------------------------');
let revArrayWithUnshift = [];
for(let a of ogArr){
  revArrayWithUnshift.unshift(a);
}
console.log(revArrayWithUnshift);


