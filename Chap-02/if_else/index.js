//npm install prompt-sync
const prompt=require("prompt-sync")({sigint:true});

let a = prompt("Enter your age:");
a = Number.parseInt(a);

if(a>0){
    console.log("Valid age!");
}
else{
    console.log("Non valid age!");
}