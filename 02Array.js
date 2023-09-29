 const marvel_heros = ["thor", "Ironman", "Batman"];
 const dc_heros = ["batman", "superman", "captainAmerica"]

 //push
//  The push method doesn't return the combined array; instead, it returns the new length of the array after the element(s) have been added.
//  let heros = marvel_heros.push(dc_heros);
//  console.log(marvel_heros);
//  console.log(heros);

 //If you want to create a new array that contains both sets of heroes (i.e., concatenate the arrays), you should use the concat method or the spread operator:

//  ****concat method or the spread operator:***
//concat method

let allheros = marvel_heros.concat(dc_heros);
// console.log(allheros);
//[ 'thor', 'Ironman', 'Batman', 'batman', 'superman', 'captainAmerica' ]

// spread
let spreadallheros = [...marvel_heros, ...dc_heros];
// console.log(allheros);
// [ 'thor', 'Ironman', 'Batman', 'batman', 'superman', 'captainAmerica' ]

let anotherarray = [1,2,3,4,[5,6,7,4],[4,5,true,["Raman",4,89]]];

const infinityArray = anotherarray.flat(Infinity); //precision
// console.log(infinityArray);


//to check it is array ot not :  true , false
// console.log(Array.isArray("RishabhYadav")); //false

//to convert a string into array
// console.log(Array.from("RishabhYAdav"));
// [
//     'R', 'i', 's', 'h',
//     'a', 'b', 'h', 'Y',
//     'A', 'd', 'a', 'v'
//   ]

console.log(Array.from({name: "ramanKumar"})); // result is []

const details = {
    name: "Rishabh",
    age : 3,
    lastNAme : "YAdav",
};

const arrayObject = Object.keys(details);
// [ 'name', 'age', 'lastNAme' ]
const arrayObject1 = Object.values(details);
// [ 'Rishabh', 3, 'YAdav' ]
// console.log(arrayObject);
// console.log(arrayObject1);

let score1 = [100]
let score2 = [4588,300,5458]
let score3 = 300

console.log(Array.of(score1, score2, score3));
// [ [ 100 ], [ 4588, 300, 5458 ], 300 ]



























