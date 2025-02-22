const perent = document.querySelector(".perent");

// console.log(perent);

//Children
console.log(perent.children);

console.log(perent.children[0].innerHTML)

for (let i of perent.children) {
    console.log(i.innerHTML);
}

const dayOne = document.querySelector(".day")
console.log(dayOne.innerHTML)
console.log(dayOne.nextElementSibling)


