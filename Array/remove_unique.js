//first way
let arr = [1, 2, 3, 4, 5, 2, 1, 3];

// Remove duplicates
arr = [...new Set(arr)];

console.log(arr); // Output: [1, 2, 3, 4, 5]

// secound way

let brr = [1, 2, 3, 4, 5, 2, 1, 3];

brr = brr.filter((value, index, self) => self.indexOf(value) === index);

console.log(brr); // Output: [1, 2, 3, 4, 5]

// third way
// let arr = [1, 3, 2, 1, 5, 3, 2];

// const brr = [];

// arr.forEach((item) => {
//   if (!brr.includes(item)) {
//     brr.push(item);
//   }
// });

// arr = brr;
// console.log(arr);
