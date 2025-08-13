//pending
//resolved
//rejected

let myPromise = new Promise((resolved,rejected)=>{
  console.log(`Promise is started!`);
  let sucess = false;
  if(sucess){
    resolved();
  }else{
    rejected();
  }
});
myPromise.then(result=>{
  console.log('passed');
}).catch(error=>{
  console.log('failed');
}).finally(()=>{
  console.log('lets have party!');
});