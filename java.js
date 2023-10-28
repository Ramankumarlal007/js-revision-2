


const map = new Map();
map.set('IN', "India");
map.set('Fr', "France");
map.set('uk', "Britain");
map.set('IN', "India");  // This line updates the value for the 'IN' key.

// for (const key of map) {
//     console.log(key);
// }

// for (const [key, value] of map) {
//     console.log(key, value);
// }
for (const [key, value] of map.entries()) {
    console.log(` key of :- ${key}, Value of : ${value}`);
}

























































































































    // console.log(Object.keys(myObject));
    // console.log(Object.values(myObject));
    