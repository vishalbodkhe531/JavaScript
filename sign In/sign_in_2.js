const fetchData=(async () =>{
    try {
        const res= await fetch("https://backend-todo-wmwo.onrender.com/api/user/check")
    //     ,{
    //     headers:{
    //         "content-type":"application/json"
    //     },
    // })
    const data=await res.json()
    console.log(data.message);
    } catch (error) {
        console.log(`Error while fetch api ${error}`);
    }
})()

// class FormData {
//     constructor(){
//         console.log("active");
//     }
// }

const signUpFormData = {}

const User_Input = document.querySelectorAll(".SU_Input");

User_Input.forEach((input) =>{
     input.addEventListener("change",(e)=>{
        signUpFormData[e.target.name] = e.target.value;
        // console.log(signUpFormData);
     });
});

const SU_form = document.querySelector("#SU-form");
SU_form.addEventListener("submit", async(e) =>{
     e.preventDefault();
     try {
         const res = await fetch("https://backend-todo-wmwo.onrender.com/api/user/register",{
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify(signUpFormData)
         });
         const data = await res.json()
         console.log(data);
         console.log("Hello");
     } catch (error) {
        console.log(`Error while register api ${error}`);
     }
    console.log("Hello");

});

