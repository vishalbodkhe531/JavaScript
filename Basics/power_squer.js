let input = parseInt(prompt("enter a base : "));
let input2 = parseInt(prompt("enter a squer or cube : "));
for(let i=1;i<=input;i++){
    if(input2 === 2){
        console.log(i ,"squar is : ",i*i);
    }
    else if(input2 == 3){
        console.log(i ,"cube is : ",i*i*i);
    } 
    else if(input2 == 4){
        console.log(i ,"forth power is : ",i*i*i*i);
    } 
    else if(input2 == 5){
        console.log(i ,"fifth is : ",i*i*i*i*i);
    } 
    else if(input2 == 6){
        console.log(i ,"sixth is : ",i*i*i*i*i*i);
    } 
    else if(input2 == 7){
        console.log(i ,"seventh is : ",i*i*i*i*i*i*i);
    } 
    else if(input2 == 8){
        console.log(i ,"eight is : ",i*i*i*i*i*i*i*i);
    } 
    else if(input2 == 9){
        console.log(i ,"nineth is : ",i*i*i*i*i*i*i*i*i);
    } 
}