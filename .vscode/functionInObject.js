let student = {
  studentName : 'savin'
}

let breakMe = ()=>console.log('======');

let myObjWithFunct = {
  empName : 'Roopali',
  age: 27,

/**
 * 
 * @param {int} hours 
 */
  work:function working(hours){
    console.log(`${this.empName} is working since ${hours} hours`);
  },

  /**
   * 
   * @param {double} speed 
   */
  walking(speed){
    console.log(`${student.studentName} walking at ${speed}km/h`)
  },

  anonym : function(ok){
    console.log(ok);
  },

  myArrow: num=>console.log(num),

  myIife: (()=>console.log('test iife'))()

}

myObjWithFunct.work(2);
breakMe();
myObjWithFunct.walking(8);
breakMe();
myObjWithFunct.anonym('wonderful annonymous function!');
breakMe();
myObjWithFunct.myArrow('arrow printing!');