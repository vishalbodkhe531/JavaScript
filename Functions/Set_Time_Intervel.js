const heading = document.querySelector("h1");
let changer = true;
const change = ()=>{
    if(changer === true){
        heading.innerHTML = ("Hi how are you");
        changer = false;
    }else{
        heading.innerHTML = ("JavaScript Programing");
        changer = true;
        stop
    }
}
const clear = setInterval(change,3000);
// clearInterval(clear); for stop