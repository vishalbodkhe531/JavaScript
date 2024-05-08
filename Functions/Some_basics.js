function add(x,y){
    const result = x+y;
    return result
}

console.log(add(2,3));


// useing arrow function 
const addtion = (x,y) =>{
    return x+y;
}
console.log(addtion(2,3));



//Default value
const printIsLog = (username = "User") =>{
    if(username){
        console.log(`${username} is logged in`);
    }else{
        console.log(`Please Enter the userName`);
    }
}

printIsLog();
printIsLog("Vishal");


//Rest oprator (...Name_Of_variable);

function calculatValue(...arr){
    let sum = 0;
   for(let i = 0; i < arr.length; i++){
     sum += arr[i];
    }
    console.log(`The sum Of arr is  ==> ${sum}`)
    return arr;
}

const arr = calculatValue(1,2,3,44,5,6,9);
console.log(arr);


// How pass Array In function & access 2 value ?; 
const Arr = [300, 100, 500, 900];
function printArr(ary){
    return ary[1];
}

console.log(printArr(Arr));


//How pass Object In function;

const obj = {
    Name: "Vishal",
    age: 17,
    add: "Pune"
};


// function PrintObj(object){
//     console.log(object.age);
// }

//destructur object;
function PrintObj({Name,age,add} = obj){
    console.log(Name,age,add);
}

PrintObj(obj);