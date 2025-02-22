function setUser(userName) {
  this.userName = userName;
  this.email = email;

  console.log(userName);

  console.log(email);
}

setUser.prototype.email = "ram"

console.log(setUser());
