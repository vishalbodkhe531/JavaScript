const arr = [4, 3, 2, 2, 2, 5, 4, 2];

const obj = {};

arr.forEach((item) => {
  if (obj.hasOwnProperty(item)) obj[item]++;
  else obj[item] = 1;
});

const res = Object.keys(obj).reduce((prev, curr) => {
  console.log(obj[curr]);
  return obj[prev] < obj[curr] ? curr : prev;
});

console.log(res);

console.log(obj);
