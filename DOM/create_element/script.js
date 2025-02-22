const body = document.querySelector("body");

// const div = document.createElement("div")

// console.log(div);
// div.className = "main";
// div.setAttribute("title","Js")
// div.id = Math.floor(Math.random() * 10 + 1)
// div.classList.add("addDiv");

// document.body.appendChild(div);

function listHeading(content) {
  const ul = document.createElement("ul");
  document.body.appendChild(document.createTextNode(content));

}
function list(innerContent){
  const list = document.createElement("li")  
  document.ul.append(document.createElement(innerContent));
};

listHeading("Language");
list("JavaScript")
// listHeading(list("JavaScript"));
