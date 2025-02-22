function setUser(userName) {
  this.userName = userName;
}

function createUser(userName, email, password) {
  setUser.call(this, userName);
  this.email = email;
  this.password = password;
}

const firstUser = new createUser("Ram", "ram@gmail.com", "123");

console.log(firstUser);
