let paragraph = document.createElement("p");
paragraph.innerHTML = ("<i><b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam similique animi officia exercitationem soluta, commodi earum cumque ea doloremque veniam impedit nihil nisi necessitatibus in mollitia saepe illum quibusdam ratione!</b></i>");
console.log(paragraph);
let body = document.querySelector("body");
body.prepend(paragraph);
console.log(paragraph.setAttribute("class","par"));
// getAttribute(paragraph);
paragraph.style.backgroundColor = ("red");
paragraph.style.border = ("2px dotted black");
paragraph.style.borderRadius = ("10%");
paragraph.style.margin = ("20px 20px");
paragraph.style.width = ("40%");