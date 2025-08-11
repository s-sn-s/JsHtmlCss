//chaining promisses
function doubleMyMoneyAfterHalfSec(x){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      console.log(`${x} is getting doubled`);
      resolve(x*2);
    },500);
  })
}

doubleMyMoneyAfterHalfSec(10)
.then(result=>{
  // console.log(`${result} to be doubled`);
  return doubleMyMoneyAfterHalfSec(result)
}).then((x)=>{
  console.log(x + " is final income");
});