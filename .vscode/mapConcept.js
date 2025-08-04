let myArry = [4,3,2,1];
console.log(myArry);
let newArry = myArry.map(ele=>ele*ele);
console.log(newArry);

let alphaNumericAry = ['axp','BYz','c21','dRz'];
console.log(alphaNumericAry);
let newAlphaNumericAry = alphaNumericAry.map(ele=>ele.toUpperCase());
console.log(newAlphaNumericAry);

//get first char of each element in array
let myFirstChars = newAlphaNumericAry.map(ele=>ele[0]).map(ele=>ele.toLowerCase());
console.log(myFirstChars);

//add string to every element
let myFooter = ['help','contact us','about us','address'];
console.log(myFooter);
let myAmazonFooter = myFooter.map(ele=>'Amazon ' + ele);
console.log(myAmazonFooter);