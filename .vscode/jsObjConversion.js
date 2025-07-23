let nestedObj = {
  studentName : 'xyz',
  rollNumber : 20,
  marks : {
    maths : 90,
    science : 84
  }
};

let jsonStr = JSON.stringify(nestedObj);

console.log(jsonStr);
console.log(typeof(jsonStr));


let nestedJSON = `{
  "studentName" : "abc",
  "rollNumber" : "40",
  "marks" : {
    "maths" : "90",
    "science" : "84"
  }
}`;

console.log(nestedJSON);
console.log(typeof(nestedJSON));

let parseJson = JSON.parse(nestedJSON);

console.log(nestedJSON);
console.log(typeof(nestedJSON));

