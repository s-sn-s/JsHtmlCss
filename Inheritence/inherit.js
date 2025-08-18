class Vehicle{
  maxspeed = 50;

  loading(){
    console.log("vehicle is loading");
  }

}
class Car extends Vehicle{
  maxspeed = 100;
  loading(){
    console.log("car is loading");
  }
  drive(){
    console.log("Car driving");
  }
  stop(){
    console.log("car stoping");
  }
  refule(){
    console.log("car refuling");
  }
}
class Bmw extends Car{
  maxspeed = 200;
  drive(){
    console.log("BMW car driving");
  }
  autoparking(){
    console.log("BMW autoparking");
  }
}

class Cycle extends Vehicle{
  testing(){
    console.log("testing cycle");
  }
}

export{Car,Bmw,Vehicle,Cycle};