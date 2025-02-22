// const setUser = (userName) => {
//   this.userName = userName;
// };

// const createUser = (userName, email, password) => {
//   this.email = email;
//   this.password = password;
//   //   this.userName = userName;
// };

// const firstUser = createUser("Ram", "ram@gmail.com", "123");

// console.log(firstUser);

function setUser(userName) {
  this.userName = userName;
  console.log(userName);
}

function createUser(userName, email, password) {
  setUser.call(this, userName);
  this.email = email;
  this.password = password;
}

const firstUser = new createUser("Ram", "ram@gmail.com", "123");

console.log(firstUser);
