const prompt=require("prompt-sync")({sigint:true});

let a = prompt("Enter the age:");
a = Number.parseInt(a);

if(a>10 && a<20){
    console.log("Age is between 10 and 20!");
}
else{
    console.log("Age is not between 10 and 20!");
}