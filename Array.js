//array []

const array = [1,2,3,4,true,false, "rishabh"  ["raman"], {}];

// console.log(array);
// console.log(typeof array);

let myarr = new Array(1,2,3,4,5,6,true,"rishabh");
// console.log(myarr[1]);

//Array methods

myarr.push(6)
myarr.push(7,8)
// console.log(myarr);

myarr.pop()
// console.log(myarr);


myarr.unshift(48);   //it get shifted to 0 th position
// console.log(myarr);

myarr.shift();  //removes the first element
// console.log(myarr);


// console.log(myarr.includes(4));
// console.log(myarr.indexOf(48)); //-1 means value is not present 

let newArray = myarr.join(); // join changes an array to  string

// console.log(newArray);
// console.log(typeof newArray);



// *********slice and splice******
// slice : =-doesn't manipulates the original array but splice does
console.log("original", myarr);

let mynewArr1 = myarr.slice(1, 5);
console.log("original-slice", myarr);
console.log("slice", mynewArr1);

let myspliceArray = myarr.splice(1,5);
console.log("splice", myarr);
console.log("splice", myspliceArray);

result//
/*original [ 1, 2, 3, 4, 5, 6, true, 'rishabh', 6, 7 ]
original-slice [ 1, 2, 3, 4, 5, 6, true, 'rishabh', 6, 7 ]
slice [ 2, 3, 4, 5 ]
splice [ 1, true, 'rishabh', 6, 7 ]
splice [ 2, 3, 4, 5, 6 ]*/