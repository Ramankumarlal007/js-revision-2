const name = 'rishabh';
const repoCount = 85;

// console.log(name + repoCount);

// console.log(`hello my name is ${name} and my repocount is ${repoCount}`);


const gameNAme = new String ('Rishabh Yadav');
// console.log(gameNAme);

// console.log(gameNAme[2]);
// console.log(gameNAme.__proto__); //{}
// console.log(gameNAme.length);
console.log(gameNAme.toUpperCase());

// changing to uppercase doesn't changes the original string as it is present in stack memory. her copy of original value is provided.

//to know at what position what character is present we use charAT()

// console.log(gameNAme.charAt(5));  
// console.log(gameNAme.indexOf('Y'));



const gameNAmeOne = new String ('Rishabh-Yadav');
// console.log(gameNAmeOne.substring(1,4));

//we cannot give negative values in substring. negative value canbe given in sliceS

let anotherString = gameNAmeOne.slice(3, 5);
console.log(anotherString);

//trim
const newStringONe = "   rishabh   ";
console.log(newStringONe);
console.log(newStringONe.trim());
console.log(newStringONe.trimEnd());
console.log(newStringONe.trimStart());

//REplace
const url = "https://learncodeonline.com/suubscription%20choudhary";

console.log(url.replace('%20', '-'));
console.log(url.includes('choudhary'));

//split method in string : to get an array from the strinng
//here we  r splitting on th basis of space
let childNAme = "Rishabh kumar yadav"
console.log(childNAme.split(' '));

let String = "The prototype specifies the methods and properties that can be accessed"

console.log(String.split(' '));



















