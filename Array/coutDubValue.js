const check = (str) => {
  let obj = {};
  str.split("").forEach((el) => {
    if (obj.hasOwnProperty(el) === false) {
      obj[el] = 1;
    } else {
      obj[el]++;
    }
  });

  return obj;
};

console.log(check("apple"));
