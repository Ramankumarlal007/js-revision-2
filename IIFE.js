// Immediately invoked function expression
//it is used to avoid polluting of th function from the global variable from the global scope  and also to immediately execute the function when the data base connection starts. atleast for this function 


// ()() iife
const denim = (num1, num2) => ({username: "kairav"})

console.log(denim(2,2)); //{ username: 'kairav' }

//Named IIFE example//
(function chai() {
    console.log(`Database connected`);
})(); // important ; is reuired to be given for the below iife to work properly . ; is required for the iife to get stop execution 

//arrow functionas iife / unnamed  iife

((kairav) => {console.log(`kuarav is a good little boy.`);} )();

((rishabh) => {console.log(`Rishabh is a good little boy.`);} )();

((nameParameter) => {
    console.log(`Database get connected ${nameParameter}`);
}) ('RishabhKumarYAdav');
















