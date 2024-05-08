//Promises is an object in JavaScript;

// Handlers 
// 1 => resolve;
// 2 => reject;


// state of Promise
// resolve,reject and pendding;



//Promis Syntax;

let promise = new Promise((resolve,reject) =>{
    console.log("Hi, I am Promise");
    resolve("success");
    // reject("reject");
});

// Create Promise example 

function GateData(data, NextData) {
    return new Promise((resove, reject) => {
        setTimeout(() => {
            console.log("\n\nData", data);
            resove("success");
            if (NextData) {
                NextData();
            } else {
                return;
            }
        }, 5000);
    })
}

const result =  GateData(1234);


// .then () and catch()
// promise.then((res) =>{...})
// promise.catch((err) =>{...})

const getPromise = ()=>{
    new Promise((resolve,reject)=>{
        console.log("Hey I am Promise");
        resolve("success");
    });
}

let promise2 = getPromise();

promise2.then(() =>{
    console.log("Promise fullfiled");
})


// const btn = document.querySelector("#btn");
// const contener = document.querySelector("#contener");
// btn.addEventListener("click",joksGenerator);

// function joksGenerator(){
//     fetch("https://icanhazdadjoke.com/",{
//         headers :{
//             'Accept':'application/json'
//         }
//     })
//     .then((value)=>{
//         return value.json()
//     })
//     .then((data)=>{
//         console.log(data.joke);
//     }) 
// }
                

fetch(API_URL,requirements).then(res=>res.json()).then(data=>console.log(data)).catch(err=>console.log(err))
