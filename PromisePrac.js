let myPromise = new Promise((resolve,reject)=>{
  console.log('Hello world');
  let myBool = false;
  if(myBool){
  resolve("resolved!");}
  else{
  reject("rejected!");}
});

myPromise
  .then(x=>console.log(x))
  .catch(x=>console.log(x))
  .finally(()=>console.log("Done"));