let input = document.querySelector("#input");
let form = document.querySelector("#form");
let ol = document.querySelector("#list");

form.addEventListener("submit", (e) => {
     e.preventDefault();
     if (input.value.match(/^[A-Za-z0-9:]+$/)) { // /^[A-Z a-z 0-9:]+$/
          ol.innerHTML += (`<li><i class="fa-regular fa-circle"></i>${input.value}<i class="fa-solid fa-xmark"></i></li>`);
          input.value = '';
          let remove = document.querySelectorAll(".fa-solid");
          let select = document.querySelectorAll(".fa-circle");
          remove.forEach((del) =>{
                del.addEventListener("click", (e) =>{
                    e.target.parentNode.remove(); 
               })
          })
     
          select.forEach((sel) =>{
               sel.addEventListener("click", (e) =>{
                    // sel.classList.add("select");
               e.target.parentNode.classList.toggle("select");
              })
         })
     }
     else{
          alert("Please enter valid input");
     }
});