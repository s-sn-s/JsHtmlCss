/**
 * 
 * @param {int} a 
 * @param {int} b 
 */
let myAnyFunc = function(a,b) {
  console.log(a+b);
}

myAnyFunc(1,2);

let triggerBrowser = function(browser){
  switch (browser){
      case 'chrome':
        console.log(`${browser} is selected!`);
      case 'edge':
        console.log(`${browser} is selected!`);
      default:
        console.log('Wrong browser passed!');
  }
}