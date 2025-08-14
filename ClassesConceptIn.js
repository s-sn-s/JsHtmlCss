class className{
  // a = 0;
  constructor(name){
    this.name = name;
  }

  drive(speed){
    console.log(`Hi ${this.name} your speed is ${speed}km/h`);
  }

  getAddress(){
    return "Mumbai, India";
  }
}
let c1 = new className("savin");
c1.drive(120);
let outp = c1.getAddress();
console.log(outp);
console.log(c1.getAddress());
