//immediately invoked function expressions(IIFE)
//global scope ke pollution hoti hai bahot baar, toh uske pollution ko hatane ke liye iife ka use kiya
(function chai(){ //names iife
    console.log(`DB CONNECTED`)
})();


( (name)=>{//simple iife or unnamed iife
    console.log(`DB CONNECTED 2 ${name}`);
    
})('Simran')