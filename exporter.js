
let a = 10;

function myfunc(){
  console.log(`my num ${a}`);
}

function doubleMe(){
  console.log(`my num ${a*2}`);
}

(()=>{console.log(a*a)})();

doubleMe();

export {a,myfunc};