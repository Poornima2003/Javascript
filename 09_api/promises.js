const promiseOne=new Promise(function(resolve,reject){
    //do an async task
    //DB calls,cryptograph,
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
})

const promiseTwo=new Promise(function(resolve,reject){
    //do an async task
    //DB calls,cryptograph,
    setTimeout(function(){
        console.log('async task2 is complete');
        resolve()
    },1000)
})

promiseTwo.then(function(){
    console.log("promise consumed");
})

const promiseThree=new Promise(function(resolve,reject){
    //do an async task
    //DB calls,cryptograph,
    setTimeout(function(){
        console.log('async task is complete');
        resolve({username:"poornima",email:"poornima@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    //do an async task
    //DB calls,cryptograph,
    setTimeout(function(){
      let error=true
      if(!error){
       resolve({username:"poornima",password:"12345"}) 
      }
      else{
        reject('error:something went wrong')
      }
        
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
 console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(function(){
    console.log("the promise is resolved")
})

const promiseFive=new Promise(function(resolve,reject){
    //do an async task
    //DB calls,cryptograph,
    setTimeout(function(){
      let error=true
      if(!error){
       resolve({username:"poornima",password:"12345"}) 
      }
      else{
        reject('error:something went wrong')
      }
        
    },1000)
})

async function consumePromiseFive(){
    const response=await promiseFive
    console.log(response);
}
consumePromiseFive()