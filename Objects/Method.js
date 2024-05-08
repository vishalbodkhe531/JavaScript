
//for Symbol decleration;
let sym = Symbol("Sir name");
let obj = {
    name : "Vishal",
    age : 17,
    [sym] : "Bodkhe",
}

console.log(obj);
console.log(typeof (obj[sym]));

//freeze ==> no use can changes in object;
Object.freeze(obj);
obj.name = ("VI");
console.log(obj);

//function
let obj2 = {
    name : "Ram",
    age : 23,
    sir_name : "xyz",
}

obj2 = function(){
    console.log(this.name);
}

console.log(obj2.g());