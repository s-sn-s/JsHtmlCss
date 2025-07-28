/**
 * 
 * @param {String} empName 
 */
function getEmpDev(empName){
  console.log('Emp name : ' + empName);
  let dev = [];

  if(empName.trim().toLowerCase()==='savin'){
    dev.push('mac','iwatch');
    return dev;
  }else if(empName.trim().toLowerCase()==='sachin'){
        dev.push('iwatch');  
        return dev;
  }
  else{
    console.log('invalid emp name');
  }
  //   case 'savin':
  //     dev.push('mac','iwatch');
  //     break;
  //   case 'sachin':
  //     dev.push('iwatch');
  //     break;
  //   default:
  //     console.log('invalid emp name!');
  //     break;
  // }
  return dev;
}

let empDevList = getEmpDev();
