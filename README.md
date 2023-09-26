# js-revision-2
Revising javascript from basic to advance 

Q1. why we use .js?
ans:-  if we give .js to the file , the software recognizes it easily.

node.js deno.js  :- Ryan Dahl

 ***01_basics
Q2. let , Var and const?
const : values in  const cannot be changed.
let 
var
console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity]);

{}  this is scope

/*
prefer not to use var bcoz of issue in block scope and functional scope.
*/
 let accountState;  this is undefined in js 

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);
┌─────────┬─────────────────────┐
│ (index) │       Values        │
├─────────┼─────────────────────┤
│    0    │ 'rishabh@yahoo.com' │
│    1    │       4578942       │
│    2    │      57952332       │
│    3    │       'delhi'       │
│    4    │      undefined      │
└─────────┴─────────────────────┘


**Datatypes in js

ECMA makesa  standard and specification for writing the js
tc39 and mdn

string    "rishabh"
number    1623323
boolean  true/false
null     it is a standalone value. eg . tempt. null == empty.   it is an object . console.log(typeof null); 
undefined   when the value is not defined yet.
symbol      unique .... figma tool
bigInt   2 to power 53


//object

console.log(typeof age); 

