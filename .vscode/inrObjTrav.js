let searchFor = 381; 

let myObj = {
    obj1Ele1 : 132,
    innerObj2 : {
      obj2Ele1 : 230,
      innerObj3 : {
      obj3Ele1 : 380,
      obj3Ele2 : 381
    }
  }
};

for(let layer1 in myObj){
  let layer1Value = myObj[layer1];
  if(typeof(layer1Value)==='object'){
    for(let layer2 in layer1Value){
      let layer2Value = layer1Value[layer2];
      if(typeof(layer2Value)==='object'){
        for(let layer3 in layer2Value){
          if(layer2Value[layer3]===searchFor){
            console.log(layer3);
          }
        }
      }else if(layer2Value===searchFor){
        console.log(layer2);
      }
    }
  }else if(layer1Value===searchFor){
    console.log(layer1);
  }
}