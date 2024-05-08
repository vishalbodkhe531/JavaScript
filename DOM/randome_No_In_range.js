const min = 10;
const max = 20;

let random = Math.floor(Math.random()* (max - min) + max); // down 2.2234234 ==> 2
let random2 = Math.ciel(Math.random()* (max - min) + max); // up  2.234234534 ==> 3
console.log(random);