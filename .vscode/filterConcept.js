let myArry = [10,9,8,7,6,5,4,3,2,1];
console.log("My original numbers ==>" + myArry);
let eveAry = myArry.filter(ele=>ele%2===0);
let oddAry = myArry.filter(ele=>ele%2!==0);

console.log("My Even numbers ==>" + eveAry);
console.log("My Odd numbers ==>" + oddAry);

let greaterLesserAry = myArry.filter(ele=> ele>2 && ele< 7);
console.log("My filterd numbers ==>" + greaterLesserAry);

let myFooter = ['help','contact us','about us','address'];
let myFilteredFooter = myFooter.filter(ele=>ele.length>5);
console.log("My filterd strings ==>\n" + myFilteredFooter + "\n");

let myAmazonFooter = myFooter.map(ele=>'Amazon ' + ele);
console.log(myAmazonFooter);
let helpFilter = myAmazonFooter.filter(ele=>ele.includes('help'));
console.log(helpFilter);

//marks array

let marksAry = [90,87,98,78,67,56,34,98,78,101,100];
let filteredMarks = marksAry.filter(ele=> ele>70 && ele<=100);
console.log(filteredMarks);

let mixedAry = [-90,-87,98,-78,67,56,-34,98,78,-101,100];

let mixedAryFiltered = mixedAry.filter(ele=> ele>0).filter(ele=> ele>70 && ele<=100);
console.log(mixedAryFiltered);
