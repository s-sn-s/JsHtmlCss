import{Car,Bmw,Vehicle,Cycle} from "../Inheritence/inherit.js";

let bmw = new Bmw();
bmw.loading();
console.log(bmw.maxspeed);
let car = new Car();
car.loading();
console.log(car.maxspeed);
let vehicle = new Vehicle();
vehicle.loading();
console.log(vehicle.maxspeed);
let cycle = new Cycle();
cycle.testing();
console.log(cycle.maxspeed);