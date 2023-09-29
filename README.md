# js-revision-2
Revising javascript from basic to advance 

Q1. why we use .js?
ans:-  if we give .js to the file , the software recognizes it easily.

node.js deno.js  :- Ryan Dahl

 ***01_basics***
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


***Datatypes in js***

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

***conversion***

let score = "52anf";

console.log(typeof score); //string
console.log(typeof (score)); //string

//to exclusively get number onle we use the below

let valueInNUmber = Number(score);
console.log(typeof valueInNUmber); //number
console.log(valueInNUmber);  //NaN

//"52" => 52
//54fgg => nan
//true = > 1 false = 0
//undefined => undefined , nan
// null => 0

// 1 => true, 0 => false
//""  false , "lkdsnfnd" => true


let somenumber = 85;
let stringConverion = String(somenumner);
console.log(stringConverion);
console.log(typeof stringConverion); 

let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

prefix
postfix


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

=== it cks datatype also


***datatype summary***
2 types only on the basis by which these are stored in the memory and the way by which they are alllocated
the way by which data is stored in the memory and how it is accessed from the memory :- 2 categories are defined 
primitive and non-primitive data type


***stack and heap memory***
2 types of memory r their ; 
stack and heap memory

 stack memory (primitive)  copy of original value is given
 heap memory   (non-primitive)  reference of original value is given 


primitive data type example :copy is given

let myyoutubechannel = "raman@youtube.com";
let anotheryoutubeChannnel = myyoutubechannel;

anotheryoutubeChannnel = "rishabh@youtube.com";

console.log(myyoutubechannel);
console.log(anotheryoutubeChannnel);

***heap memory   (non-primitive)  reference of original value is given ***



***string*** 
''  , "" 

please go through the entire methods of string present on browser

***math***

const min = 10;
const max = 20;  

console.log(Math.floor(Math.random()* (max - min +1 ))+ min);


***dates***

JavaScript Date objects represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

***array***
JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.



