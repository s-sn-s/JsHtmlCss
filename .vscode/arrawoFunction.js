
//arrow funtion
let letsPrint = ()=>{
  console.log("Holla duniya!");
}
letsPrint();

let breakMe = ()=>console.log('========');

let play = ()=>console.log('lets play with Arrow!');
play();

breakMe();

let sumIs = (a,b)=>a+b;
console.log(sumIs(2,3));

breakMe();

let isOdd = num => !(num%2===0);
console.log(isOdd(5));
console.log(isOdd(10));

breakMe();

//IIFE with =>
(name=>console.log(name))('Roopali');

breakMe();
//forEach with =>
let numAr = [1,2,3,4,5]
numAr.forEach(num=>console.log(num));

breakMe();

numAr.forEach(numIs=>{
  console.log(numIs);
  if(numIs===2){console.log(`My number is ${numIs}!`)}
});

//we can not use break or return in forEach
breakMe();
let checkNum = numAr.some(numIs=>{
  if(numIs===3){
    return true;
  }
});
if(checkNum){console.log('Number found!')}
else{console.log('Number not found!')}

breakMe();
//invalid
//function(a)=>{console.log(a)};
let c = 4;
(c)=>{console.log(c)};
let b = (a=>a*a)(c); //Arrow with IIFE  
console.log(b);

let myNumAr = [5,4,3,2,1];
myNumAr.some(n=>{
  console.log(n);  
  if(n===c){
    console.log(`${c} found in ${myNumAr}`);
    return true;
  }
})