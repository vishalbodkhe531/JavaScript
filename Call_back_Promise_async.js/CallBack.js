//We can use arro function in callback
//const GateData = (data,GateData) =>{....};
function GateData(data,GateData){
    setTimeout(() =>{
      if(GateData){
          console.log("The Data succesfully connected");
          GateData();
     }else{
       return;
     }
    },2000);
  }
  
  // console.log("one");
  //known as Calback Hells;
  GateData(1,() => {
      console.log("fetching data1...\n");
      GateData(2, ()=>{
          console.log("fetching data2...\n");
          GateData(3,() =>{
              console.log("fetching data3...\n");
              GateData(4,()=>{
                  console.log("fetching data4...\n");
              })
          })
      });
  });


//   Callback argument;
  function sum(firstNO, SecondNo) {
    console.log(firstNO + SecondNo);
}

function calculat(a, b, sumCallback) {
    sumCallback(a, b);
}

calculat(2, 4, sum);