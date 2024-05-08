let promise = new Promise((res, rej) => {
    // res("success");
    // res(rej());
    // rej("error");
    // res();
    rej();
});

promise.then((ans) => {
    // console.log("ans");
    return console.log(ans);       // res
}).catch((error) => {
    console.log("error");     // rej
}).finally(()=>{              /// for default;
    console.log("default");
})


// 2nd Example 
const P1 = new Promise((res,rej) =>{
    setTimeout(()=>{
        console.log("P1 Done");
        res("success")
    },1000);
})
const P2 = new Promise((res,rej) =>{
    setTimeout(()=>{
        console.log("P2 Done");
        rej("reject")
    },2000);
})
const P3 = new Promise((res,rej) =>{
    setTimeout(()=>{
        console.log("P3 Done");
        res("success")
    },3000);
})

const AllPromise = Promise.allSettled([P1,P2,P3]); 
AllPromise.then((value)=>{
    console.log(value);
});
