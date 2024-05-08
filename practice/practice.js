const input = document.querySelector("#input");
const list = document.querySelector("#list");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li><i class="fa-regular fa-circle"></i>${input.value}<i class="fa-regular fa-pen-to-square"></i><i class="fa-solid fa-xmark"></i></li>`;
  const select = document.querySelectorAll(".fa-circle");
  const remove = document.querySelectorAll(".fa-xmark");
  const edite = document.querySelectorAll(".fa-pen-to-square");
  
  Array.from(select).forEach((element) => {
    element.addEventListener("click", () => {
      element.parentElement.classList.toggle("select");
    });
  })

  Array.from(remove).forEach((element) => {
    element.addEventListener("click", () => {
      element.parentElement.remove();
    });
  });


  Array.from(edite).forEach((element) => {
    element.addEventListener("click", () => {
      input.value = element.parentElement.innerText;
         element.parentElement  = `<li><i class="fa-regular fa-circle"></i>${input.value}<i class="fa-regular fa-pen-to-square"></i><i class="fa-solid fa-xmark"></i></li>`;
    });
  });
  
  input.value = ''

})