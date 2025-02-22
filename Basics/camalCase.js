const camaleCaseStr = (str) => {
  const newString = str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1));
  console.log(newString.join(" "));
};

camaleCaseStr("hello everyone I am coder");
