let promise1 = new Promise((resolved)=>{
  resolved('promise 1 passed!');
});
let promise2 = new Promise((resolved)=>{
  resolved('promise 2 passed!');
});
let promise3 = new Promise((resolved)=>{
  resolved('promise 3 passed!');
});

Promise.all([promise1,promise2,promise3])
    .then(result=>{
        console.log(result);
        console.log('all passed');
        })
    .catch(error=>{
        console.log(error);
        console.log('all or some failed');
        })
    .finally(()=>{
        console.log('bye!');
        console.log('=========');
    });