//empty []
let s = [];
//int array
let intA = [10,20,22];

for(let a=0;a<=intA.length;a++){
  console.log(intA[a]);
}
console.log('------------------------------------');

//adding element to end
intA.push('endEle');
console.log(intA);
console.log('------------------------------------');
//adding element to start
intA.unshift('startEle');
console.log(intA);

console.log('------------------------------------');

//removing element to end
let end = intA.pop();
console.log(`new array after removing ${end} - ` + intA);

console.log('------------------------------------');

//removing element to start
let start = intA.shift();
console.log(`new array after removing ${start} - ` + intA);

console.log('------------------------------------');

console.log('Enhanced for loop a.k.a for...of ');
for (let a of intA){
  console.log(a);
}

console.log('------------------------------------');

let intB = [10,20,22];
let intC = [10,20,22];
let intD = [...intB,...intC];
console.log(intD);

console.log('------------------------------------');

console.log(intD.join(' '));

console.log('------------------------------------');

console.log(typeof(intD));
console.log('------------------------------------');
let arry = new Array(4);
console.log(arry);
for(let a of arry){
  a=1
}
console.log('------------------------------------');
//split method returns array
let myStr = 'My_SRTING_WITH_123';
let myAry = myStr.split('_');
console.log(myAry)
for(let a of myAry){
  console.log(typeof(a));
}
console.log('------------------------------------');
// let myNum = 123123123;
// let myNumArray = myNum.split(3);
// console.log(myNumArray);

let myUnsplicedArry = [0,1,2,3,4,5];

let mySplicedArry = myUnsplicedArry
console.log(mySplicedArry);
mySplicedArry.splice(2,2,6,7);
console.log(mySplicedArry);
mySplicedArry.splice(-2,2);
console.log(mySplicedArry);
mySplicedArry.splice(-2);
console.log(mySplicedArry);
mySplicedArry.splice(-1,0,2,3,4,5);
console.log(mySplicedArry);
console.log('------------------------------------');
let myIndexArry = [1,2,5,4,5,6,7,8,9,5];
let indexOfEle = myIndexArry.indexOf(5);
let index = 0;
let counter = 0;
while(myIndexArry.indexOf(5,index+1)!==-1){
  index=myIndexArry.indexOf(5,index+1);
  console.log(index);
  counter++;
  if(counter>10)break;
}

console.log('------------------------------------');
console.log(indexOfEle);
console.log(counter);