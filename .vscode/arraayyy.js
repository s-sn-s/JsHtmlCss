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
