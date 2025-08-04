

let myTools = ['selenium','cypress','WDIO','JS','playwright','git'];

let[x,,,,,z]= myTools; // destructuring

let[a,b,c,d,e,f='oHHH',g='WHY']= myTools; // destructuring
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
console.log('==========');
console.log(x);
console.log(z);

let marks = [85,90,78,92,88];
let [mark1, ...markn] = marks;//...markn will be array
console.log(mark1);
// breakme();
console.log(markn);

breakme =  ()=>console.log("======");
//Object Destructuring can be used if we have to add entry without modifiying og obj 
let myObj = {
  objName:'Savin',
  age : 4,
  city : 'mum'
}
let {objName,age,city,isActive = 'true'} = myObj;
console.log(objName);
console.log(age);
//renameing key
let {objName:oname,age:oage,city:ocity} = myObj;
console.log(ocity);
breakme();
function myFunct({age}){
  console.log(age);
}

myFunct(myObj);