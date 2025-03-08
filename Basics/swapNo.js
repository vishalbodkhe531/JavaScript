// first way

let a = 10;
let b = 20;

let c = a;
a = b;
b = c;

console.log(a, b);

// sec way

let x = 32;
let y = 21;

x = x + y;
y = x - y;
x = x - y;

console.log(x, y);

// third way

let p = 90;
let q = 80;

[p, q] = [q, p];

console.log(p, q);
