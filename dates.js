//DAte is a object in js
// months start with 0 . january is 0

let todaysDate = new Date();
// console.log(todaysDate);
// console.log(todaysDate.toString() );
// console.log(todaysDate.toLocaleString() );
// console.log(todaysDate.toDateString() );

let myCreatedDAte = new Date(2023, 0, 28);
console.log(myCreatedDAte);
console.log(myCreatedDAte.toDateString());
//2023-01-27T18:30:00.000Z
// Sat Jan 28 2023

let newDAte = new Date("01-14-2023");
console.log(newDAte.toLocaleString());

//timestamp
let myTimeStamp =  Date.now();
console.log(myTimeStamp);
console.log(newDAte.getTime());

//how to convert the value into second
console.log(Math.floor(Date.now()/1000));

const newDAte1 = new Date();
console.log(newDAte1.getMonth());


newDAte1.toLocaleString('default', {
    weekday: 'long',
    // timeZone: 'anotherString'
})







