class Cars{
  #price
  constructor(wheels,price){
    this.wheels = wheels;
    this.#price = price;
  }

  getPrice(){
    return this.#price;
  }
}

let bmw = new Cars(4,40000)
console.log(`BMW has ${bmw.wheels} wheels`);
let price = bmw.getPrice();
console.log(`Cost of the car is ${price}`);

console.log(`Cost of the car is ${bmw.getPrice}`);