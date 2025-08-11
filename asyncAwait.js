
function execution(){
  return new Promise((resolved)=>{
  setTimeout(()=>{
    console.log('1. Trade executed!');
    resolved();
  },900)
  });
  
}

function capture(){
  return new Promise((resolved)=>{
setTimeout(()=>{
    console.log('2. Trade capture!');
    resolved();
  },800)
  });
  
}

function validation(){
  return new Promise((resolved)=>{
setTimeout(()=>{
    console.log('3. Trade Validation!');
    resolved();
  },700)
  });
  
}

function confirmation(){
  return new Promise((resolved)=>{
    setTimeout(()=>{
    console.log('4. Trade confirmation!');
    resolved();
  },600)
  });
}

function settlement(){
  return new Promise((resolved)=>{
    setTimeout(()=>{
    console.log('5. Trade Settlement!');
    resolved();
  },500)
  });
  
}

function reconsiliation(){
  return new Promise((resolved)=>{
    setTimeout(()=>{
    console.log('6. Trade reconsiliation!');
    resolved();
  },400)
  });
}

//async - await

async function tradeBooked(){
  console.log('Trading started:');
  await execution();
  await capture();
  await validation();
  await confirmation();
  await settlement();
  await reconsiliation();
}

tradeBooked();