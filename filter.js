const coding = ["js", "java", "ruby", "rail", 'python']

let values = coding.forEach( (item) => {
    // console.log('i love my baby rishabh yadav ');
})

// console.log(values); // undefined for each doesn,t return any value . wheather you use return or not like

/*let values = coding.forEach( (item) => {
    console.log('i love my baby rishabh yadav ');
    return item
})*/

const myNums = [1,2,3,4,5,16,7,18,9,10]
//filter returns the value but foreach doesn't returns the value.
//in filter we have  to provide condition to check the fulfilling items
// let newNumss = myNums.filter ( (nums)  => nums > 4)

//let newNums = myNums.filter ( (nums)  => {return nums > 4}) // return kehword is required
// console.log(newNums); //
// [ 5, 6, 7, 8, 9, 10 ]

// how to do the above without using filter

let newNumArray = []
let mynewNums = myNums.forEach( (num) => {
    if (num > 4) {
        newNumArray.push(num); // it push the new item to newNumArray.
        console.log(newNumArray.push(num)); // it logs th enew length
    }
} ) 

console.log(`outside value ${newNumArray}`);