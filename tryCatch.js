let myPromise = function myFunc(){
  return new Promise((resolve,reject)=>{
    console.log('Hello world');
    let myBool = true;
    if(myBool){
    resolve("resolved!");}
    else{
    reject("rejected!");}
  });
}

async function myImpFunc(){
  try{
  console.log("called prime");
  let myResult = await myPromise();
  console.log(myResult);
  }catch(error){
    console.log(error);
  }
}

myImpFunc()