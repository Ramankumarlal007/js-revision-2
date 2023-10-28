function chai() {
    console.log(this);
}
// chai()
// console.log(chai())

// console.log(this);


function coffee(user) {
    let username = "kairav";
    console.log(this.username); //undefined , this is used in the contexyt of object nt in context of function
}
// coffee()

const cadbury = () => {
    let username = "kairav";
    console.log(this.username); //undefined
    console.log(this);  //{}
}
cadbury();

console.log(this); 

/*In JavaScript, when you define a function using an arrow function (`() => {}`), the value of `this` inside that function is determined by the surrounding lexical context, and it does not have its own `this`. Arrow functions do not bind their own `this` but instead inherit the `this` value from their containing (enclosing) context.

In your case, when you call the `chai` arrow function, it inherits the `this` value from its containing context, which is typically the global context in a browser environment. If you are running this code in a browser, the global context will be the `window` object.

So, when you call `chai()`, it logs the `window` object, which might appear as an empty object in some cases, but it's actually a reference to the global object in a browser environment.

If you run the same code in a Node.js environment, the output might be different because the global context in Node.js is different from the browser environment, but it would still be the global context.*/














