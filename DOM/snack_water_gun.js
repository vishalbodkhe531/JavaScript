let user = prompt("enter Snake = 1  Gun = 2   Water = 3");
let Cpu = Math.floor(Math.random()*3);
console.log(Cpu);

if(Cpu == 0 && user == 1){
    console.log(`HP = Snake and Vishal = Snake`);
    console.log("Drow Mach");
}

else if(Cpu == 0 && user == 2){
    console.log(`HP = Snake and Vishal = Gun`);
    console.log("Winner is Vishal");
}

else if(Cpu == 0 && user == 3){
    console.log(`HP = Snake and Vishal = Water`);
    console.log("Winner is HP");
}

// for 2

else if(Cpu == 1 && user == 1){
    console.log(`HP = Gun and Vishal = Snake`);
    console.log("Winner is HP");
}

else if(Cpu == 1 && user == 2){
    console.log(`HP = Gun and Vishal = Gun`);
    console.log("Drow Mach");
}

else if(Cpu == 1 && user == 3){
    console.log(`HP = Gun and Vishal = Water`);
    console.log("Winner is Vishal");
}

// for 3
else if(Cpu == 2 && user == 1){
    console.log(`HP = Water and Vishal = Snake`);
    console.log("Winner is Vishal");
}

else if(Cpu == 2 && user == 2){
    console.log(`HP = Water and Vishal = Gun`);
    console.log("Winner is HP");
}

else if(Cpu == 2 && user == 3){
    console.log(`HP = Water and Vishal = Water`);
    console.log("Drow Mach");
}
