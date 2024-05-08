let Name = document.querySelector("#name");
let ol = document.querySelector("#ol");
let table = document.querySelector("table");
let create_btn = document.querySelector("#create");
let IPC = document.querySelector("#IPC");
let monny = document.querySelector("#Monny");
let account = document.querySelector("#account");
let sr_no = 1;
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
     e.preventDefault()
     table.innerHTML += (`<tr><th>${sr_no++}</th><th>${Name.value}</th><th>${monny.value}</th><th>${IPC.value}</th><th>${account.value}</th></tr>`);
     Name.value = '';
     monny.value = '';
     account.value = '';
     IPC.value = '';
}); 