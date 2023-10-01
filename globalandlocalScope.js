// let a  = 10
// const b = 20 
// var c = 30

// what let var and const?
// let and const came bcoz var was not able to perform the way it was supposed to do in block scope

/* {} this is scope */
let a = 500
if (true) {
let a  = 10
const b = 20 
var c = 30
d=8
console.log(a);
}
console.log(a);
// console.log(b);  
// console.log(c);
// console.log(d);

 //nested scope
 function one () {
 const userName = "Raman";

 function two() {
    const website = "youtube"
    console.log(userName);
 }
//  console.log(website);
two()   

}

one()

if (true) {
    const userName = "Rishabh"
    if (userName === "Rishabh") {
        const website = " youtube"
        console.log(`${userName} ${website}`);
        console.log(userName + website);
    }
    // console.log(website);
}
// console.log(userName);


// ************interesting***********
//this is function
// console.log(addOne(2)); // here function is accessible 
function addOne(num) {
    return num + 1
}
addOne()

 //this is expression
 addTwo(25) // here in expression function  is not accesssible
let addTwo = function (num) {
return num + 5
}
addTwo()























































