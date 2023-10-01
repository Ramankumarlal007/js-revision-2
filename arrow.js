const user = {
    userName: "Rishabh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.userName} ,welcome to website`);
        console.log(this); // current context
    }
}
// user.welcomeMessage()
// console.log(user.welcomeMessage());
//undefined will also be logged because console.log() itself doesn't return anything
// console.log(user.price);
// console.log(user.userName);
user.welcomeMessage()

user.userName = "krissh"
console.log(user.userName);
user.welcomeMessage()

console.log(this); //{} here in node it  is empty object and in browser it is window object
//in brower , globl object is window object

const cadbury = () => {
    let username = "sukanya"
    console.log(username.this) // undefined ; same as normal function
    console.log(this);    //{}  important : in cas of arrow function it is {}, but in case of normal function entire value occurs
}
cadbury()

const addTwo = (num1, num2) => {
        return num1 + num2
}       //return must be used in case of {}  tiis si explicit return
console.log(addTwo(5, 5));


//implicit return

const addThre = (num1, num2) =>  num1 + num2
const addThree = (num1, num2) =>  (num1 + num2)   //in case of () return is not i=used

console.log(addTwo(15, 5));


//object return in implicit
const denim = (num1, num2) => ({username: "kairav"})

const addThree1 = (...num1) => num1.reduce((acc, curr) => acc + curr, 0);

console.log(addThree1(15, 5, 52)); // Output: 72


//function

function name(params) {
    
}

() => {} //return required 
() => () //return not required 





