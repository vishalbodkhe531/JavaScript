let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let turnO = true;

let msg = document.querySelector(".msg");
const WinPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8], 
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        CheckWinner();
    });
});

const disabledbox = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const ShowWinner = (winner) =>{
    msg.innerText = (`Congractulation the Winner is : ${winner}`);
    msg.classList.remove("hide");
    disabledbox ();
}


const CheckWinner = () =>{
        for(let pattern of WinPattern){
                let posi1 = boxes[pattern[0]].innerText;
                let posi2 = boxes[pattern[1]].innerText;
                let posi3 = boxes[pattern[2]].innerText;

                if(posi1 != "" && posi2 != "" && posi3 != ""){
                    if(posi1 === posi2 && posi2 === posi3){
                        console.log("winner",posi1);
                        ShowWinner(posi1);
                    }
                }
        }
}