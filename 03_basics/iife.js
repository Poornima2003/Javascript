//Immediately Invoked Function Expression (IIFE)
//to remove the effect of global pollution
(function chai(){
    console.log(`DB CONNECTED`);
    
})
() ;


((name)=>{
    console.log(`DB CONNECTED TWISE ${name}`);
})('poornima')


