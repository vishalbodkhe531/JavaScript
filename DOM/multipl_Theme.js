let black = document.querySelector("#black");
let green = document.querySelector("#green");
let red = document.querySelector("#red");
let body = document.querySelector("body");

black.addEventListener("click",() =>{
    document.body.style.background = ("black");

});
red.addEventListener("click",() =>{
    document.body.style.background = ("red");

})
green.addEventListener("click",() =>{
    document.body.style.background = ("green");
})
