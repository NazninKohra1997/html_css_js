let name = "Harry";
console.log(name.length);

console.log(name.toUpperCase());
console.log(name.toLowerCase());

console.log(name.slice(1,4));
console.log(name.slice(2));

let name1 = "Harry Bhai";
console.log(name1.replace("Bhai","Bhau"));


let n = name.concat(" ",name1," How are you? ","Hey!"); 
console.log(n);


let name2 = "     Naznin Kohra Jhora     ";
console.log(name2.trim());


let student = "Raisa";
console.log(student[2]);

for(let i=0; i<student.length; i++){
    console.log(student[i]);
}

//student[2] = 'm';   //This is not possible
//console.log(student[2]);