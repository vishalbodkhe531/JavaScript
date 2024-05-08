function GateData() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            console.log("done");
            res("success");
        }, 3000)
    });
}

async function data() {
    await GateData();

    console.log("\nGating Data 2....");
    await GateData();

    console.log("\nGating Data 3....");
    await GateData();
    
    console.log("\nGating Data 4....");
    await GateData();
}

data();

//Example Two 
// const GateData = () => {
//     return new Promise((resolve, reject) => {
//         let error = true;
//         setTimeout(() => {
//             if (error) {
//                 console.log("done");
//                 resolve({ UserName: "vishal", Age: 17, address: "Shevgaon" });
//             } else {
//                 reject("Some error");
//             }
//         }, 1000)
//     });
// }

// async function data() {
//     try {
//         const response = await GateData();
//         console.log({UserName : Name,Age,address} = response) ;
//     } catch (error) {
//         console.log(error);
//     }
// }

// data();