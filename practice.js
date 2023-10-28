const marvel_heros = ["thor", "Ironman", "Batman"];
const dc_heros = ["batman", "superman", "captainAmerica"]
//  let heros = marvel_heros.push(dc_heros);
let allheros = marvel_heros.concat(dc_heros);//concat
let spreadallheros = [...marvel_heros, ...dc_heros];//spread
// const infinityArray = anotherarray.flat(Infinity); //precision
// console.log(Array.isArray("RishabhYadav")); //false
// console.log(Array.from("RishabhYAdav"));
console.log(Array.from({name: "ramanKumar"})); // result is []
const arrayObject = Object.keys(details);
const arrayObject1 = Object.values(details);
console.log(Array.of(score1, score2, score3));
// `Array.from` and `Array.of` are two methods in JavaScript used to create arrays, but they serve different purposes.

const details = {
    name: "Rishabh",
    age : 3,
    lastNAme : "YAdav",
};
let createdArray = Array.from(details) //this is not  the correct way as array.from is primarily meant  for converting iterable objects and array-like structures into arrays. 
// console.log(createdArray); result is []
// 
// console.log((Object.keys(details)))
// console.log((Object.keys(details)).concat(Object.values(details)));
console.log("three",(Object.keys(details)), (Object.values(details))); //three [ 'name', 'age', 'lastNAme' ] [ 'Rishabh', 3, 'YAdav' ]
// console.log("four",...(Object.keys(details)), ...(Object.values(details))); //four name age lastNAme Rishabh 3 YAdav

let combinedArray = [...(Object.keys(details)), ...(Object.values(details))]
// console.log(combinedArray);


const combinedArray2 = [...Object.keys(details), ...Object.values(details)];
// console.log(combinedArray);


let difference = "In this output, the keys are printed first, followed by the values, but they are not combined into a single array.";
let newArray = difference.split(' '); //split method is used to split a string into an array of substrings
// console.log(newArray);

const arr1 = Array.from(1, 2, 3); //this will not create an array as .from expects an iterable object first to work on.
const arr2 = Array.from(5); 


const arr3 = Array.of(1, 2, 3); 
console.log(arr3); //Output: [1, 2, 3]
// This is a more concise and predictable way to create arrays with specific elements, especially when dealing with a small number of elements.

let obj9 = { obj13};
console.log(obj9);

const obj10 = Object.assign({}, obj13, obj14)
console.log(obj10);

const obj19 = { ...obj13, ...obj14 }
console.log(obj19);


const myNums = [1, 2, 3] 

const mytotal = myNums.reduce( (acc , curVal) => {
    console.log(`${acc} and current ${curVal}`);
    return acc + curVal }, 0 )
    
    console.log(`outer : ${mytotal}`);


    const shoppingCart = [
        {
            itemName: "js course",
            price: 2999
        },
        {
            itemName: "py course",
            price: 999
        },
        {
            itemName: "mobile dev course",
            price: 5999
        },
        {
            itemName: "data science course",
            price: 12999
        },
    ]
    
    let CoursePrice = shoppingCart.reduce( (acc, item) =>  {return acc + item.price}, 0);
    
    console.log(CoursePrice);