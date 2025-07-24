/**
 * 
 * @param {String} browser 
 */
function selectBrowser(browser){
  switch(browser.trim().toLowerCase()){
    case "chrome":
      console.log("Browser launched");
      return true;
    case "safari":
      console.log("Browser launched");
      return true;
    case "edge":
      console.log("Browser launched");
      return true;
    default:
      console.log('Invalid browser name!'); 
      return false;
  }
}

let isBroswerLaunched = selectBrowser('chrome');
if(isBroswerLaunched){
  console.log("Test started!");
}else{
  console.log('Test failed!');
}


// let nestedObj2 = {
//   1 : 'xyz',
//   2 : 20,
//   3 : {
//     maths : 90,
//     science : 84
//   }
// };

// for(let a in nestedObj2){
//   console.log(typeof(a));
// }