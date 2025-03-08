// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

const student = {
  name: "Ram",
  email: "ram@gmail.com",
  age: 21,
};

const studentPropertyDescritor = Object.getOwnPropertyDescriptor(
  student,
  "name"
);

studentPropertyDescritor.writable = false;

console.log(studentPropertyDescritor);

student.name = "Pavan";

console.log(student);

// console.log(student);
