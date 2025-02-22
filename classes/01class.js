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