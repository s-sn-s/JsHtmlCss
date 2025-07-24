let findKeyFor=91;

let nestedObj = {
  studentName : 'xyz',
  rollNumber : 20,
  marks : {
    maths : {
      firstSem : 91,
      secondSem : 91
    },
    science : {
      firstSem : 85,
      secondSem : 91
    }
  }
};

function findKeyInObject(searchValue,nestedObj){
  let searchCounter = 0;
  for(let e in nestedObj){
    let eleObj1 = nestedObj[e];
    if(typeof(eleObj1)==='object'){
      // console.log(typeof(nestedObj[e]));
      // console.log(nestedObj[e]);
      for(let innerKey1 in eleObj1){
        let eleObj2 = eleObj1[innerKey1];
        // console.log(eleObj[innerKey1]);
        // console.log(typeof(eleObj1));
        if(typeof(eleObj2)==='object'){
          for(let innerKey2 in eleObj2){
            if(eleObj2[innerKey2] === searchValue){
              console.log(e+':');
              console.log(innerKey1+':');
              console.log(innerKey2);
              // break;
            } 
          }
        }
        else if(eleObj[innerKey1] === searchValue){
          console.log(innerKey1);
          // break;
        }
      }
    }else if(nestedObj[e] === searchValue){
      console.log(e);
      // break;
    }
  }
  if(searchCounter===0){
    console.log("Value " + findKeyFor + " not present in object!");
  }
}

findKeyInObject(findKeyFor,nestedObj)