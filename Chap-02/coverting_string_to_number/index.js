//npm install prompt-sync
const prompt=require("prompt-sync")({sigint:true});

let a = prompt("What's your age?");
console.log(a);
console.log(typeof a);

console.log();

a = Number.parseInt(a);
console.log(a);
console.log(typeof a);