let input = parseInt(prompt("enter a number : "));
let fact = 1;
for (let i = 1; i < input; i++) {
    fact *= i;
    console.log(i, "fact is : ", fact);
};