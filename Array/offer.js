let arr = [250,645,300,900,50];
let result = 0;
for(let i in arr){
    console.log("\nvalue : ",arr[i]);
    result = arr[i]/10;
    arr[i] = arr[i] - result;
    console.log("Offer : ",arr[i]);
}