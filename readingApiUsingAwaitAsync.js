//ac - fecth data from API
//get call url
//json response
//read json

async function readApi(){
  console.log('fetching data : ');
  let myjsondata = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  console.log("Got my data");
  let mydata = await myjsondata.json();
  console.log("my data id: " + mydata.id);
}

readApi();