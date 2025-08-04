let myArry = [10,9,8,7,6,5,4,3,2,1];
console.log("My original numbers ==>" + myArry);
let sumArry = myArry.reduce((total,num)=>total+num,0);
console.log(sumArry);
let mulArry = myArry.reduce((total,num)=>total*num,1);
console.log(mulArry);

let myFooter = ['help','contact us','about us','address'];
let myCombinedFooter = myFooter.reduce((superStr,curStr)=>superStr + " " + curStr);
console.log(myCombinedFooter);
let myComaSepFooter = myFooter.reduce((superStr,curStr)=>superStr + curStr,);
console.log(myComaSepFooter);

let marks = [85,90,78,92,88];
let marksAvg = (marks.reduce((total,cur)=>total+cur,0))/marks.length;
console.log(marksAvg);