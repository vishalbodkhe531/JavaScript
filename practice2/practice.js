const obj1 = {
  name: "vishal",
  age: 32,
};

const obj2 = {
  phone: 9328746234,
};

const newObj = { ...obj1, obj2 };

console.log(newObj);
