let input = parseInt(prompt("Enter a size of arr"));
let arr = [];
for (let i = 0; i < input; i++) {
    arr[i] = parseInt(prompt(`Enter a ${i} element`));
}

console.log(arr);

let newa = arr.filter((even) => {
    return even % 2 == 0;
});

console.log(newa);
console.log(`The Even numbers are : ${newa}`);


