let nestedObj = {
  studentName : 'xyz',
  rollNumber : 20,
  marks : {
    maths : 90,
    science : 84
  }
};

let findKeyFor=84;

for(let e in nestedObj){
  if(typeof(nestedObj[e])==='object'){
    console.log(typeof(nestedObj[e]));
    for(let inner in nestedObj[e]){
      console.log(typeof(e[inner]));
      if(e[inner] === findKeyFor){
        console.log(inner);
      }
    }
  }else if(nestedObj[e] === findKeyFor){
    console.log(e);
  }
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