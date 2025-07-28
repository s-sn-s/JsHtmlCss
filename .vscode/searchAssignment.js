/**
  search()
  name 
  name price 
  name price color
  name price color quantity
 */
function search(){
  let argSize = arguments.length;
  switch (argSize){
    case 0 :
      console.log("invalid search!");
      break;
    case 1 :
      console.log(`Product found with\nname: ${arguments[0]}`);
      break;
    case 2 :
      console.log(`Product found with\nname: ${arguments[0]};\nprice: ${arguments[1]}`);
      break;
    case 3 :
      console.log(`Product found with\nname: ${arguments[0]};\nprice: ${arguments[1]};\ncolor: ${arguments[2]}`);
      break;
    case 4 :
      console.log(`Product found with\nname: ${arguments[0]};\nprice: ${arguments[1]};\ncolor: ${arguments[2]};\nquantity: ${arguments[3]}`);
      break;
    default:
      console.log("=====invalid aruguments====");
      break;
  }
}

search();
console.log("=========\n");
search('samsung');
console.log("=========\n");
search('apple','$100000');
console.log("=========\n");
search('nothing','$30000','grey');
console.log("=========\n");
search('mi','$3000', 'black', 4);
console.log("=========\n");