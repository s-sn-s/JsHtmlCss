async function getUser(){
  return new Promise(resolved=>{
    setTimeout(()=>{
      resolved(
        {id:1,uname:"savin"}
      )
    },1500);
  })
}

async function getOrder(){
  return new Promise(resolved=>{
    setTimeout(()=>{
      resolved([
        {pid:2232,pname:"apple"},
        {pid:3121,pname:"samsung"}
      ])
    },2000);
  })
}

let myProm1 = getUser();
let myProm2 = getOrder();

let [myP1R,myP2R] = 
  await Promise.all([myProm1,myProm2]);

console.log(myP1R);
console.log(myP2R);

// let myPR =Promise.all(myProm1,myProm2);
// console.log(myPR);