//control flow/logic flow

//if

//operators of comparision are < , >, >=, <= ,==, !=

// === it also checks the type 

if (2 === "2") {
    console.log("executed");
}

const score = 200;

if (score> 100) {
    let power = "fly";
    console.log(`user has power to :${power}`);
}

const balance = 1000

if (balance > 500 ) {
    console.log("test");
}
//implicit  , but it should be in same line
if (balance > 400) console.log("test1"), console.log("test2");

//nesting

// if (condition) {
    
// } else if (condition) {
    
// }
//  else if (condition) {
      
//  } else{ console.log("balance is >4200")};

const userloggedIn = true;
const debitCard = true;
const loggedInFromGooogle = false;
const loggedInFromEmaile = true;




if (userloggedIn && debitCard && 2==4) {
    console.log("Allowed to buy course");
} else { "Please submit ur login and debit card details"}

if(loggedInFromGooogle || loggedInFromEmaile) {
    console.log("User looged in");
}


















 









