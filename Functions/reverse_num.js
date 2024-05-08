const rev = (num)=>{
    let rem = 0,res = 0;
    while(num != 0){
        rem = num % 10;
        res = (res * 10)+rem;
        num = Math.floor(num / 10);
    }
    console.log(res);
    //    or
    // let x = 10;
    // let result = Number(num.toString().split("").reverse().join(""));
    // console.log(result);
}

rev(12345);