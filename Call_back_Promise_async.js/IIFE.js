// IIFE ==> Immediately Invoked Function Expressions;
//          reason 1 : It exicute's Immediately;
//          reason 2 : Global Scope Polution that's why we use IIFE;


// syntax 1 (Named IIFE);
(function PrintWord(name){
    console.log(`Hi ${name}`);
})("Ram");


// syntax 2 (without named IIFE);
((name) =>{
    console.log(`Hello ${name}`);
})("Vishal");