function addTwoNumbers(number1, number2) {
    // console.log(number1 + number2);  //97
}

// addTwoNumbers() //Nan
// addTwoNumbers(89, 42)  //131
let result = addTwoNumbers(52,45)
// console.log("Result:", result);   // Result: undefined  

function addNumbers(number1, number2) {
    let resultNumber = number1 + number2
    return resultNumber;
}
// console.log(addNumbers(4, 5));
let result2 = addNumbers(2,8);
// console.log(result2);


function loginUserMessage(userNAme) {
    return `${userNAme} just loggedIN`
}

//console.log(loginUserMessage(`Rishabh`)); //Rishabh just loggedIN
//console.log(loginUserMessage()); //undefined just loggedIN

// console.log(loginUserMessage(`Rishabh`));

function loginUserName(userNAme = "Sam") {
    if (userNAme === undefined) {
        console.log("please enter your username");
        return
    }
    return `${userNAme} just logged IN`
}
    //!undefined
console.log(loginUserName("ritu"));


function calculateCardPrice(val1, val2, ...num1) {
    return [val1 ,val2, num1]
}
console.log(calculateCardPrice(200, 5, 123,47,245,458,524));

//object and function//

const cartItem = {
    product : 'MAc-mini',
    price: 200,
}

function AmazonShopping(anyObject) {
    return (`i have bought ${anyObject.product} and the price is ${anyObject.price}`)
}

//refereinf the object from above
console.log(AmazonShopping(cartItem));

//directly putting the object
let AmazonShoppingList = (
    {
        product: "macairbook pro",
        price : 2000
    }
)
console.log(AmazonShoppingList);

//Using Array and function

let myArray = [200,500,85,4,false]

function arrayfunction (kite){
    console.log(kite[3]);
}
arrayfunction(myArray)

let kuldeep = function (robort) {
    return (robort[4])
}
let rajdeep = kuldeep(myArray);
console.log(rajdeep);


















