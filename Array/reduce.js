const arr = [239,2,30,4,5];
let greater = arr.reduce((res,current) =>{
    return res<current ? current : res;
}); 
console.log("the greater is : ",greater);