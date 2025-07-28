function myFuncWithObj(myFuncObj){
  // console.log("In  function call " + myFuncObj);
  myFuncObj.age = 31;
  console.log("In  function call " + myFuncObj.age);
}

let funcObj={
  name:'Savin',
  age:32,
  locatoin:"Mumbai"
}
console.log("Before function call "+ funcObj.age);
myFuncWithObj(funcObj);
console.log("After function call " + funcObj.age);