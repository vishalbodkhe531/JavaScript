let input = prompt("Enter a number");
let temp = 0;
let firstNo = 1;
let SecondtNo = 0;

for(let i = 0; i <= input; i++){
    temp = firstNo+SecondtNo;
    firstNo = SecondtNo;
    SecondtNo = temp;
    console.log(`${i} fibbo term is ${temp}`);
}
