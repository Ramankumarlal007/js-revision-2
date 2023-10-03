//for of loop

const arr = [1,2,3,4,5,6,7,8];
// console.log(arr);
// console.log(arr[5]);
// for (const iterator of object) {
    
// }

for (const value of arr) {
    console.log(value);
}

const greetings = "Hello world"

// for (const greet of greetings) {
//     if (greet == " ") {
//         // console.log(`space`);
        
//     } else if ( greet === "w") {
//        console.log(` world is sooo beautiful`);
//     } else
    
//     // console.log(`${greet}`);
// };

//Map is an object
// map holds unique values, it doesn't provides repeted values. map is not itertrable

const map = new Map()
map.set('IN', "India")
map.set('Fr', "Feance")
map.set('uk', "Britain")
map.set('IN', "India")

// console.log(map);
//Map(3) { 'IN' => 'India', 'Fr' => 'Feance', 'uk' => 'Britain' }
for (const key of map) {
    console.log(key);
}


// [ 'IN', 'India' ]
// [ 'Fr', 'Feance' ]
// [ 'uk', 'Britain' ]
//this is destructuring of array
for (const [key, value] of map) {
    console.log(`${key} map:- ${value}`);
} 
/*IN :- India
Fr :- Feance
uk :- Britain*/

const myObject = {
    'game1': 'NFS',
     'game2':"spiderman"
}

// console.log(Object.values(myObject));
// console.log(Object.keys(myObject));

// for (const [key, value] of myObject) {
//     console.log(`${key} :- ${value}`);
// } // myObject is not iterable

for (const key in myObject) {
    console.log(`${key}: ${myObject[key]} ` );
    
}
//myObject is  iterable in case of forin






