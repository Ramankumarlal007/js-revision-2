// const myObject = {
//     js : 'javascript',
//     cpp: 'c++',
//     rb:'ruby',
//     swift: 'swift by apple'
// };

// for (const key in myObject) {
//     // console.log(key);
// }
// js
// cpp
// rb
// swift
// for (const key in myObject) {
//     // console.log(myObject[key]);
// }
// for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
// }
/*javascript
c++
ruby
swift by apple*/


const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
};

// for (const key in myObject) {
//     // console.log(`${key} shortcut is for ${myObject[key]}`);
// }


const programming = ["js", "java", "ruby", "rail"]

for (const key of programming) {
   console.log(key);
}

for (const key in programming) {
    console.log(key);
 }

for (const key in programming) {
   console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('Fr', "Feance")
map.set('uk', "Britain")
map.set('IN', "India")

for (const key of map) {
    console.log(key);
}
for (const key in map) {
    console.log(key);
} //not iteratable
















