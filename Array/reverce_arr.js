const arr = [1, 2, 3, 4, 1];

for (let i = 0; i < Math.floor(arr.length / 2); i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - i - 1];
  arr[arr.length - i - 1] = temp;
}

console.log(arr);
