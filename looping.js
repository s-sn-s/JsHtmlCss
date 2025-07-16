let l = 2;

while(l>0){
  console.log(`while loop number ${l}`);
  --l;
}

//10 to 1

let l1 = 10;

while(l1>=1){
  console.log(l1);
  l1--;
}

console.log('------------------');

//print even or odd
let l2 = 1;

while(l2<=10){
  if(l2%2===0){
    console.log(`${l2} : even`);
  }
  else if(l2%2===1){
    console.log(`${l2} : odd`);
  }
  l2++;
}

console.log("--------------");
//array
let ary = [1,2,3];
console.log(ary);
console.log('-----------');
//for...of
for(let a of ary){
  console.log(a);
}
console.log('-----------');
//for...in
for(let a in ary){
  console.log(a);
}