let str = prompt("Enter a string : ");
let Size = 0;
for(let i of str){
    Size++;
    console.log(Size, "=", i);
}
console.log("The size of string is : ",Size);