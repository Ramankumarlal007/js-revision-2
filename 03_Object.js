//singleton
//Object.create : constructor method , singleton

//object literals  example is below
let mySym = Symbol("MickyMouse") 
// The "MickyMouse" description is just for your reference and doesn't affect the value associated with the Symbol.

const JsUser = {
    name: "Rishabh Yadav", // keys are actually string, values can be anything
    age: 3,
    [mySym]: "mykey1", //example for symbol
    "full  name": "Raman kumar",
    location: "Buxar",
    email: "rishabhyadav@ymail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//to change the value
JsUser.email = "raman@chatgpt.com";
JsUser.type = "java"
// console.log(JsUser.email);
Object.freeze(JsUser) // this freezesn the obvj
// console.log(JsUser.name);
// console.log(JsUser.location);
// console.log(JsUser["email"]);
// console.log(JsUser["full  name"]);// imp square notation

//symnbols
const mytSymbol = Symbol("key1")

// console.log(JsUser.mySym);// this is not corrct  (undefined)
// console.log(JsUser[mySym]); //mykey1



JsUser.greeting = function(){
    console.log("Hello world 2023");
}
// console.log(JsUser.greeting); //[Function (anonymous)]
// console.log(JsUser.greeting());

