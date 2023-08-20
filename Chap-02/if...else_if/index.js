//npm install prompt-sync
const prompt=require("prompt-sync")({sigint:true});

let a = prompt("Enter your age:");
a = Number.parseInt(a);

if(a<0){
    console.log("InValid age!");
}
else if(a>0 && a<18){
    console.log("You are still a kid!");
}
else{
    console.log("Valid age!");
}