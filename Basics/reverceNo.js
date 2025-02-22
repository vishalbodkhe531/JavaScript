// const reverseNo = (no) => {
//   const res = no.toString().split("").reverse().join("");
//   return Number(res);
// };

// const number = 123;

// console.log(reverseNo(number));

// -----------------------------------------------------------

const reversNo = (no) => {
  let res = 0;
  rem = 0;
  while (no != 0) {
    rem = no % 10;
    res = res * 10 + rem;
    no = Math.floor(no / 10);
  }
  console.log(res);
};

reversNo(123);

// let res = 0,
//   rem = 0,
//   no = 123;
// while (no >= 0) {
//   rem = no % 10;
//   res = res * 10 + rem;
//   no = Math.floor(no / 10);
//   console.log(res);
// }
// console.log(res);
