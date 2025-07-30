function myFuncWithObj(myFuncObj){
  console.log("\nIn  function call \n" + Object.entries(myFuncObj));
  myFuncObj.age = 31;
  console.log("\nIn  function call " + myFuncObj.age);
}

let funcObj={
  name:'Savin',
  age:32,
  locatoin:"Mumbai"
}
console.log("Before function call "+ funcObj.age);
myFuncWithObj(funcObj);
console.log("\nAfter function call " + funcObj.age);