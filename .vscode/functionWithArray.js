/**
 * 
 * @param {String} empName 
 */
function getEmpDev(empName){
  console.log('Emp name : ' + empName);
  let dev = [];
  let empN = empName.trim().toLowerCase();
  if(empN==='savin'){
    dev.push('mac','iwatch');
    return dev;
  }else if(empN==='sachin'){
        dev.push('iwatch');  
        return dev;
  }
  else{console.log('invalid emp name');}
  return dev;
}

let empDevList = getEmpDev('sachin');
console.log(empDevList)
