// Class syntax
class User {
  constructor(userName, email, password) {
    this.userName = userName;
    this.email = email;
    this.password = password;
  }

  changeUserName() {
    return this.userName.toLowerCase();
  }
}

const firstUser = new User("RAM", "ram@gmail.com", "123");
console.log(firstUser.changeUserName());
console.log(firstUser);

// Function Syntax

// function User(userName, email, password) {
//   this.userName = userName;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.changeUserName = function () {
//   return this.userName.toLowerCase();
// };

// const secUser = new User("PAVAN", "pavan@gmail.com", "321");
// console.log(secUser.changeUserName());
// console.log(secUser);
