let Physics = parseInt(prompt("enter Phisics marks : "));
let Chemistry = parseInt(prompt("enter Chemistry marks : "));
let Math = parseInt(prompt("enter math marks : "));
let Biology = parseInt(prompt("enter Biology marks : "));
let English = parseInt(prompt("enter English marks : "));
  
   console.log("physics marks : ",Physics);
   console.log("Chemistry marks : ",Chemistry);
   console.log("math marks : ",Math);
   console.log("Biology marks : ",Biology);
   console.log("English marks : ",English);

let total = Physics + Chemistry + Math + Biology + English;
let persentage = total/5;
console.log("total is : ",total);
console.log("persentage is : ",persentage);

if(Physics < 34 || Chemistry < 34 || Math < 34 || Biology < 34 || English < 34){
    console.log("Gotya is failll");
}
else{
    console.log("Gotya is passss");
}
