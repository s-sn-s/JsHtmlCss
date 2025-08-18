class TestUtil{

  static counter = 1;
  age = 32;

  static{
    console.log("static block 1");
  }
  
  static{
    console.log("static block 2");
  }

  readData(){
    console.log("Reading data");
  }

  writeData(){
    console.log("Writing data");
  }

  #readCellData(){
    console.log("Reading private cell data");
  }

  static print(){
    console.log("printing..");
    TestUtil.drive();
  }

  static drive(){
    console.log("driving..");
  }

  iife = (()=>console.log("IIFE block"))();

}

export{TestUtil};