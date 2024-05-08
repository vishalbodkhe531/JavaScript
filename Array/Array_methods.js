// Push Methode ==> It add element last;
let arr = [1,2,3];
arr.push(4);
console.log("\n\npush Methode = ",arr);


// Pop Methode ==> It remove element from last;
// let brr = [1,2,3,4];
arr.pop();
console.log("\n\npop Methode = ",arr);


//Unshift ==> it add element in starting;
// let crr = [1,2,3,4,5];
arr.unshift(9);
console.log("\n\nunshift Methode = ",arr);


// shift ==> it remove element which present in 1st position;
arr.shift();
console.log("\n\nshift Methode = ",arr);


//includes ==> the element present or not;
let crr = [5,6,7].includes(5);
console.log("\n\nincludes Methode = ",crr);

//index ==> The element present which position;
crr = [5,6,7].indexOf(5);
console.log("\n\nThe index is : ",crr);


//concat ==> it merge two array;
const trr = [1,2,3],srr = [4,5,6];
let result = trr.concat(srr);
console.log("The concat arrays are : ",result);

s
//better way to concat array;
let result2 = [...trr,...srr];
console.log("concat array : ",result2);


//multiple array spreade;
const prr = [1,2,3,[4,5,6],1,[7,8,9,[6,7]]];
let temp = prr.flat(Infinity);
console.log("\n\nspread array now : ",temp);

// convert into array;
let temp2 = ("Hello Vishal !! ");
console.log("\n\nThe convert array is : ",Array.from(temp2));



let American_heros = ["Super man","Bad man"];
let Indian_heros = ["Jivan","krish","Ravan"];
let all_heros = Indian_heros.concat(American_heros);
console.log(all_heros);



console.log(American_heros.toString());//ToString();
