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


















