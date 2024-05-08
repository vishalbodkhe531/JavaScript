let btn = document.createElement("button");
btn.innerText = ("Change Mode");

let body = document.querySelector("p");
body.append(btn);

let mode = "light";
btn.addEventListener("click",() =>{
   if(mode === "light"){
      body.classList.add("dark");
      body.classList.remove("light");
      mode = "black";
   }
   else if(mode){
       mode = "light";
       body.classList.add("light");
      body.classList.remove("dark");
   }
});