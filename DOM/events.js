let button = document.querySelector("button");
button.onclick = (event) => {
    console.log(event);
    console.log(event.clientX,event.clientY);
    alert("Hello vishal sir");
}