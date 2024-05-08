const compair = (a,b) =>{
    return a - b;  
}
let a = [5,4,23,6,3];
a.sort(compair);
console.log(a);