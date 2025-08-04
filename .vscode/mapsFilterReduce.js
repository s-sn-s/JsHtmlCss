let marks = [85,90,78,92,88];
let marksAvg = (marks.reduce((total,cur)=>total+cur,0))/marks.length;
console.log(marksAvg);

let filteredMarks = marks.filter(ele=>ele>=88);
let avgFilteredmarks = filteredMarks.map(ele=>ele+5).reduce((total,cur)=>total+cur,0)/filteredMarks.length;
console.log(avgFilteredmarks);

let prices = [25,60,15,80,35,120,45,90];
let filteredprice = prices.filter(ele=>ele<50).map(ele=>ele*0.9).reduce((total,cur)=>total+cur,0);
console.log(filteredprice);

//word length greater than 4
//convert to upper case
//join with -
let myTools = ['selenium','cypress','WDIO','JS','playwright','git'];
let myModifiedAry = myTools.filter(ele=>ele.length>4).map(ele=>ele.toUpperCase()).reduce((supStr,curStr)=>supStr+"-"+curStr);
//not giving default solves issue
console.log(myModifiedAry);
