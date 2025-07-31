let breakMe = ()=>console.log('=====');
let sum = (a,b)=>a+b;
let modNum = u=>u%2;

function calculate(callback,x,y){
    return callback(x,y);
}
console.log(calculate(sum,1,2));

/**
 * 
 * @param {function} callback 
 * @param {int} z 
 * @returns boolean
 */
let isEven = function(callback,z){
  // console.log("----"+callback(z));
  // let result = callback(z);
  // breakMe();
  // console.log(result);
  return callback(z)?false:true;
}

console.log(isEven(modNum,7));
breakMe();
console.log(isEven(modNum,8));