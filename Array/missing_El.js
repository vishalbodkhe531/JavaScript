const arr = [3, 2, 1, 5, 7];

const maxEl = Math.max(...arr);
const minEl = Math.min(...arr);

for (let i = minEl; i <= maxEl; i++) {
  if (!arr.includes(i)) {
    console.log(i);
  }
}
