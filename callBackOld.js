// let breakMe = ()=>console.log('==========');

// //call back example

// function myOGfunction(callBack){
//   console.log('Hello world!');
//   callBack();
// }

// myOGfunction(()=>{
//   console.log("Arrow!");
// });
// breakMe();
// myOGfunction(function(){
//   console.log("Anonymous function!");
// })
// breakMe();
// function myParameterisedCallBack(callBack){
//   console.log('Getting details');
//   callBack('ohh');
// }
// myParameterisedCallBack(x=>console.log(x));

// mycallbackFunc(url,myCalBack){
//   console.log(`my url : ${url}`);
//   let myString = myCalBack('nameis');
//   return true;
// }

// let finalVar = mycallbackFunc('myUrl',(x)=>{
//   console.log('my param passed : ' + x);
//   return 'myCallBackReturn';
// });

// setTimeout(()=>{
//   console.log('waiting for page load!');
// },5000);

// breakMe();

function stepOutHome(callBack){
  setTimeout(
  ()=>{
    console.log('1. Stepping out of Home');
    callBack();  
  },600);
  
}
function startBike(callBack){
  setTimeout(
  ()=>{
    console.log('2. Starting bike');
    callBack();
  },500);
}
function giveThrottle(callBack){
  setTimeout(
  ()=>{
    console.log('3. revv revv revv...')
    callBack();
  },400);
  
}
function reachShop(callBack){
  setTimeout(
  ()=>{
    console.log('4. break the bike at shop');
    callBack();
  },300);
}
function buyGoods(callBack){
  setTimeout(
  ()=>{
    console.log('5. buy re buy(--money)');
    callBack();
  }
  ,200);
  
}
function rideHome(callBack){
  setTimeout(
  ()=>{
    console.log('6. home coming');
    callBack();
  }
  ,100);
}

// async calls
stepOutHome(()=>{});
startBike(()=>{});
giveThrottle(()=>{});
reachShop(()=>{});
buyGoods(()=>{});
rideHome(()=>{});

// breakMe();

//callBackHell
stepOutHome(()=>{
  startBike(()=>{
    giveThrottle(()=>{
      reachShop(()=>{
        buyGoods(()=>{
          rideHome(()=>{
            console.log('Netflix and chill!');
          })
        })
      })
    })
  });
})