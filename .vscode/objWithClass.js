class emplayeeInfo{
  constructor(name,eID,joiningDate){
    this.name = name;
    this.eID = eID;
    this.joiningDate = joiningDate;
  }
}

let obj1 = new emplayeeInfo('Roopali','s21322','12-31-24');
let obj2 = new emplayeeInfo('Savin','s21314','11-31-25');
let obj3 = new emplayeeInfo('Sachin','s21312','02-28-22');

console.log(obj1, "\n----------\n", obj2, "\n----------\n", obj3);
// console.log(obj2);
console.log("------------------------------");

obj3 = obj1;
console.log(obj1, "\n----------\n", obj2, "\n----------\n", obj3);
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
