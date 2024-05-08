const check = (element) =>{ 
   if(Array.isArray(element) == true){
     console.log("It is an Array");
   }else{
        console.log("It is an Object");
   }
}

check([1,2,3]);
check({name: "Vishal"});
