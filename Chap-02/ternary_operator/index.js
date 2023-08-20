//npm install prompt-sync
const prompt=require("prompt-sync")({sigint:true});

let a = prompt("Enter your age:");
a = Number.parseInt(a);

let b = a<0 ? "not valid!" : "valid";

console.log("Your age is ", b);