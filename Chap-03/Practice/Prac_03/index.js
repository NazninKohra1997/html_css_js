const prompt=require("prompt-sync")({sigint:true});

let n = 7;
let i;

while(i !=n){
    i = prompt("Enter the number");

    if(i == n){
        console.log("correct number!");
    }

    else{
    console.log("Try again!");
    }

}