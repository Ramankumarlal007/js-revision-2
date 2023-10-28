const linkedin = {};  //object literal example 
// console.log(linkedin);

const tinderUser = new Object(); //singleton / constructor example
// console.log(tinder); 

const twitterUser = {};
twitterUser.name = "Rishabh";
twitterUser.isloggedI = false;
twitterUser.age = 3;

// console.log(twitterUser);

let ArrayKey = Object.keys(twitterUser);
// console.log(ArrayKey);

let ArrayValue = Object.values(twitterUser);
// console.log(ArrayValue);



const obj1 = [{ 1: "a", 2: "b" }, { 54: "a", 25: "b" }];  //array
const obj2 = [{ 3: "c", 4: "d" }];  //array
const obj3 = { 5: "e", 6: "f" };
const obj4 = { 7: "e", 8: "f" };

let obj5 = obj1.concat(obj2);
// console.log(obj5); //concat

let obj6 = [...obj1, ...obj2]
// console.log(obj6); //spread

let obj7 = obj3[5];
console.log(obj7);

let obj8 = { ...obj3, ...obj4, ...obj1 };
// console.log(obj8);

// {
//     '0': { '1': 'a', '2': 'b' },
//     '1': { '25': 'b', '54': 'a' },
//     '5': 'e',
//     '6': 'f',
//     '7': 'e',
//     '8': 'f'
//   }

const obj13 = { 5: "e", 6: "f" };
const obj14 = { 7: "e", 8: "f" };

let obj9 = { obj13, obj14 };
// console.log(obj9);



const obj10 = Object.assign({}, obj13, obj14)
// console.log(obj10);


const obj19 = { ...obj13, ...obj14 }
// console.log(obj19);

const users = [
    {
        id: 8021998,
        email: "rkyogi@outlook.in"
},
{
    id: 8021998,
        email: "raman @outlook.in"
},
{
    id: 8021998,
        email: "ritu @outlook.in"
},
{
    id: 8021998,
        email: "rahul @outlook.in"
}
]

// console.log(users);
// console.log(users[1].email)


// console.log(Object.keys(twitterUser));
// console.log(Object.values(twitterUser));

// console.log(Object.entries(twitterUser));
//The Object.entries() method is used to convert an object into an array of its own enumerable property [key, value] pairs. 
// console.log(twitterUser);
// console.log(twitterUser["age"]);
// let entries = Object.entries(twitterUser)[0]
// console.log(entries);

// console.log(tinderUser.hasOwnProperty('islogged'));
//hasOwnProperty: Determines whether an object has a property with the specified name.

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}
//course.courseInstructor

// const {courseInstructor (kya value lena hai :key)} = course(kaha se value lena hahi)

const {courseInstructor : instructor} = course

// console.log(courseInstructor);
console.log(instructor);

//jSon 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

















