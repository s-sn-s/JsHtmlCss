(function(browser){
  console.log(`${browser} selected!`);
})('chrome');

//storing IIFE return in a variable
let myEmpName = (function(empName){
  console.log(`Employee name is ${empName}`);
  return empName.toUpperCase();
})('Roopali');
console.log(myEmpName);
