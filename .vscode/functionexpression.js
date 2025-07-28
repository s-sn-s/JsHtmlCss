let myFuncExp = 
  function funcExp(){console.log("testing")};

  myFuncExp();
  // ReferenceError
  // funcExp(); 

  let add = 
  /**
   * 
   * @param {int} num1 
   * @param {int} num2 
   */
  function addMyNumber(num1,num2)
  {
    console.log(num1+num2);
  }

add(1,2);