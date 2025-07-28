// let i = 10;
function hello(){
  console.log("hello" + i);
  pop();
  console.log("popped");
  recur();
}
function pop(){
  console.log("pop");
}
//recursive calling
// let i = 10;
function recur(){
  if(i>0){
  console.log(i--);
  recur();
  }
}
let i = 10;
hello();