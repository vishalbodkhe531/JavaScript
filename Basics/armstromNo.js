// armstom number;

console.time("execution time");
const armstom = (no) => {
  let store = 0;
  while (no != 0) {
    store += (no % 10) * (no % 10) * (no % 10);
    no = Math.floor(no / 10);
  }
  console.log(store);
};

armstom(153);

console.timeEnd("execution time");

// const number = 123;
