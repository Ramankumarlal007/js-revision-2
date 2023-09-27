// primitive data type : 7 categories 
// these are call by value . here copy is given , reference is not given


// String, 
// number, 
//  boolean 

//  BigInt, 
const bigNumber = 565493264468451544n;
// console.log(bigNumber);
//  null, 
//  undefined, 

//  Symbol
 const id  =  Symbol('123');
 const anotherID = Symbol('123');

//  console.log(id);
//  console.log(anotherID);
//  console.log(id === anotherID);

 //reference type (non-primitive data type)
// Array, object and function

// JavaScript is a dynamically typed language, which means that the type of a variable is determined by the value that is assigned to it

 //reference type (non-primitive data type)
// Array, object and function


let array = ["shakitiman", "heman", 'doga']

let object = {
    name : "Rishabh",
    age : 3,
    name1 : "kairav",
    age1 : 2,
}

const  myfunctionExample = function s(object) {
    console.log(object);
    console.table(object);
};

myfunctionExample(object);


let temperature = null;
console.log(typeof temperature);  //nul data type is object

console.log(typeof myfunctionExample);  //datatype of function is  object function

