let sign_in_btn = document.querySelector("#sign-in-btn");
let sign_up_btn = document.querySelector("#sign-up-btn");
let name = document.querySelector("#name");

sign_in_btn.addEventListener("click",()=>{
    name.style.display = ("none");
    sign_in_btn.classList.add("disable");
    sign_up_btn.classList.remove("disable");
    sign_up_btn.style.color="black"
})
sign_up_btn.addEventListener("click",()=>{
    name.style.display = ("block");
    sign_in_btn.classList.remove("disable");
    sign_up_btn.classList.add("disable");
    sign_up_btn.style.color="white"
})
