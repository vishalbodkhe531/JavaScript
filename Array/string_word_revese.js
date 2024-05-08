let  str = "Sare Jahase Achha";


// all str reverse;
// let arr = str.split(" ").reverse().join(" ");
// console.log(arr);

// perticular word reverse;
let  result = str.split(" ");
let  ReverseWord = str.split(" ").map((word) =>{
    return word.split("").reverse().join("");
    console.log(word);
})
console.log(ReverseWord.join(" "));

//    Or
// let x = Array.from(str).reverse().join(" ");
// console.log(x);