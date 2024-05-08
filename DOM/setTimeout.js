const sum = (a,b) =>{
    document.write(a+b);
    }
  
  setTimeout(sum,5000,1,3);
  clearTimeout();
          // OR
  // setTimeout(function(){
  //    document.write("Hi Vishal");
  // },2000);
  