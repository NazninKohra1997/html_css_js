let name = "Raina";
let n = "a";

let sentance = "Raisa is a good girl";

console.log(`${name} is ${sentance.includes(name) ? 'included' : 'not included'} in the sentance`);


console.log(`${n} is ${name.startsWith(n) ? "1st character" : "not 1st character"} in ${name}`);

console.log(`${n} is ${name.endsWith(n) ? "last character" : "not last character"} in ${name}`);