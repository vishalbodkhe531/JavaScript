// const compair = (a,b) =>{
//     return a - b;
// }
// let a = [5,4,23,6,3];
// a.sort(compair);
// console.log(a);

// const arr = [5, 4, 3, 8, 9, 2];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
// let temp = arr[i];
// arr[i] = arr[j];
// arr[j] = temp;
//     }
//   }
// }

// bubble Sort
const arr = [1, 8, 5, 1, 3, 4];

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = temp;
    }
  }
}
console.log(arr);
