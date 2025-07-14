let browser = 'raizor';

console.log('Switch cases!');

switch(browser){
  case 'yours':
    console.log(`the answer is ${browser}`);
    break;
  case 'ohh':
    console.log(`the answer is ${browser}`);
    break;
  default:
    console.log(`Sorry! 
      the '${browser}' browser is not supported`);
    break;
}

//ternary
let a = 1>0? true: false;
console.log(a);