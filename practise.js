// console.log(this);   //{}

function chai() {
    console.log(this);  
}
chai() //all entire value

function coffee() {
    let username = "Raman"
    console.log(this.username);   //undefined
}
// coffee()

//arrow function
const cadbury = () => {
    let username = "sukanya"
    console.log(username.this) // undefined ; same as normal function
    console.log(this);    //{}  important : in cas of arrow function it is {}, but in case of normal function entire value occurs
}
cadbury()