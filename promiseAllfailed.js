let promise11 = new Promise((resolved)=>{
  resolved('promise 1 passed!');
});
let promise22 = new Promise((resolved)=>{
  resolved('promise 2 passed!');
});
let promise33 = new Promise((resolved,reject)=>{
  reject('promise 3 failed!');
});

Promise.all([promise11,promise22,promise33])
    .then(result=>{
        console.log(result);
        console.log('all passed');
        })
    .catch(error=>{
        console.log(error);
        console.log('someone failed');
        })
    .finally(()=>{
        console.log('bye!');
        console.log('=========');
    })