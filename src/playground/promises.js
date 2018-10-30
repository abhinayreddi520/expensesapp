const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
   //resolve({
     //  name:'abhi',
      // age:35
  // });
  reject('sorry server problem');
    },3000);
});
console.log('before');
promise.then((data)=>{
  console.log(data);
}).catch((e)=>{
   console.log('error:',e);
});
console.log('after');
