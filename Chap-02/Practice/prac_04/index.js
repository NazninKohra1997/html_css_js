const prompt=require("prompt-sync")({sigint:true});

let age = prompt("Enter your age:");
age = Number.parseInt(age);

let result = age>18 ? "You can drive!" : "You can not drive!";

console.log(result);