const userEmail = function() {}

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// flasy value
//false, 0, -0 , BigInt 0n , "", null, undefined , NaN

//truthy valse": in string the thing are different 
// true , "0" , 'false'  , [] ,{} , function() {}

function example(a) {
    console.log(a); // Outputs: undefined,
}
example();

function example(a) {
    console.log(a); // Outputs: 7,
}
example(7);

const emptyArray = [true]

if (emptyArray.length === 0) {
    console.log("Array is empty");
}

// empty object check
const emptyObject = {name : 'raman'}  // {} result is Object is emptyis 

if (Object.keys(emptyArray).length === 0) {
    console.log("Object is empty");
}else {
    console.log("object has some value");
}


//Nullish Coalescing Operator (??) : nulland undefined only to watch on


// it cks the saftey ck in condition of null/undefined
//it is helpul in case of value scoming rom api , dat base , appwrite
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 12
val1 = undefined ?? 100
val1 = null ?? 10 ?? 30

console.log(val1);

//terniary operator
// condition ?? true : false

let icecreamprice = 180;

icecreamprice >= 120 ? console.log("less than 120") : console.log("greater than 120");



























