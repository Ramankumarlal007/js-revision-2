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
    //you should note that the this keyword in JavaScript doesn't work as you might expect in this context. When you use this inside a function, it refers to the context of the function, which is typically the global context or the context in which the function is called. It doesn't automatically give you access to variables defined within the function.

    console.log(this);    //{}  important : in case of arrow function it is {}, but in case of normal function entire value occurs
}
cadbury()

const addTwo = (num1, num2) => {
        return num1 + num2
}       //return must be written in case of {}  this is  explicit return
console.log(addTwo(5, 5));


//implicit return

const addThre = (num1, num2) =>  num1 + num2
const addThree = (num1, num2) =>  (num1 + num2)   //in case of () return is not i=used

console.log(addTwo(15, 5));


//object return in implicit 
//() is required for an object to get executed in function simply using {} scope cannot be used.

const denim = (num1, num2) => ({username: "kairav"})

console.log(denim(2,2));

const addThree1 = (...num1) => num1.reduce((acc, curr) => acc + curr, 0);

console.log(addThree1(15, 5, 52)); // Output: 72


//function

function name(params) {
    
}

() => {} //return required 
() => () //return not required 

const arrowFunction = function () {
    console.log(this);
  };
  
  arrowFunction();   
  /*in case of arrow function = {}

  in case of regular function = entire value*/




// In JavaScript, `console.log(this);` behaves differently in the context of an arrow function and a regular (or "normal") function because they handle the `this` keyword differently. Let's explain the differences:

// 1. **Normal Function:**
//    In a regular function, the value of the `this` keyword depends on how the function is called. It can vary dynamically. The value of `this` is determined by the caller or the context in which the function is invoked. If the function is a method of an object, `this` refers to that object. If it's a standalone function, `this` can refer to the global object (e.g., `window` in a browser environment) or `undefined` in strict mode.

//    Example:
//    ```javascript
//    function regularFunction() {
//      console.log(this);
//    }

//    regularFunction(); // In a browser environment, 'this' will refer to 'window'.
//    ```

// 2. **Arrow Function:**
//    Arrow functions have a fixed, lexically determined `this`. They capture the value of `this` from their surrounding context when they are created and do not change it when they are called. This makes arrow functions especially useful for working within the context of a particular object or closure.

//    Example:
//    ```javascript
//    const arrowFunction = () => {
//      console.log(this);
//    };

//    arrowFunction(); // 'this' inside an arrow function refers to the 'this' of the surrounding context (e.g., the global 'this' if not in a specific context).
//    ```

// In the case of `console.log(this);` inside an arrow function, the value of `this` is determined by the context in which the arrow function was created, which might be the global context if there's no surrounding object or function context. In the case of a regular function, `this` is determined dynamically when the function is called, so its value can vary.

// It's important to choose between regular functions and arrow functions carefully, based on your intended use and the behavior you want to achieve with the `this` keyword, as they have different scoping rules for `this`. Arrow functions are often used in situations where you want to maintain a specific context, while regular functions are more flexible and adapt to their caller's context.
