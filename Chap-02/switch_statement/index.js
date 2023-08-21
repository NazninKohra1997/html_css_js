//npm install prompt-sync
const prompt=require("prompt-sync")({sigint:true});

let age = prompt("Enter your age:");
age = Number.parseInt(age);



switch(age){
    
    case -1:
        console.log("Invalid age!");
        break;
    case 18:
        console.log("Valid age!");
        break;
    case 10:
        console.log("Still a kid!");
        break;
    default:
        console.log("No age is found!");
}



