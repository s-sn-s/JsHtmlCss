let bmw = {
  "carName" :"a320",
  carPrice  :100000,
  carBrand  :'x series',
  inStock   :false
};

console.log(bmw);

console.log(bmw.carName);

console.log(bmw["carPrice"]);

//adding object key
bmw.manufacturingDate = '21-32-2131';
console.log(bmw);

//imutable

let bmwImmutable = {
  "carName" :"b320",
  'carPrice':200000,
  carBrand  :'y series',
  inStock   :true
};

console.log(bmwImmutable);
Object.seal(bmwImmutable);

bmwImmutable.carName1 = bmwImmutable.carName;
console.log(bmwImmutable);


