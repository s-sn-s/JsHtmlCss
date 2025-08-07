/**
 *  TLC
 *  Trade execution
 *  Trade capture
 *  Trade Validation and Enrichment
 *  Trade confirmation
 *  Trade Settlement 
 *  Trade reconsiliation
 */

function execution(callBack){
  setTimeout(()=>{
    console.log('1. Trade executed!');
    callBack();
  },900)
}

function capture(callBack){
  setTimeout(()=>{
    console.log('2. Trade capture!');
    callBack();
  },800)
}

function validation(callBack){
  setTimeout(()=>{
    console.log('3. Trade Validation!');
    callBack();
  },700)
}

function confirmation(callBack){
  setTimeout(()=>{
    console.log('4. Trade confirmation!');
    callBack();
  },600)
}

function settlement(callBack){
  setTimeout(()=>{
    console.log('5. Trade Settlement!');
    callBack();
  },500)
}

function reconsiliation(callBack){
  setTimeout(()=>{
    console.log('6. Trade reconsiliation!');
    callBack();
  },400)
}

let breakMe = ()=>console.log('================');

execution(()=>{});
capture(()=>{});
validation(()=>{});
confirmation(()=>{});
settlement(()=>{});
reconsiliation(()=>{});

execution(()=>{
  capture(()=>{
    validation(()=>{
      confirmation(()=>{
        settlement(()=>{
          reconsiliation(()=>{
            console.log('TLC finished!');
          });
        });
      });
    });
  });
});