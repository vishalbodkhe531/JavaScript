const str = "Hello I am Ram";

const spArray = str.split(" ").map((e) => e.split("").reverse().join(""));
console.log(spArray.join(" "));
