const myNums = [1, 2, 3]  

const myTotal = myNums.reduce(function (acc,currentValue) {
    console.log(`acc: ${acc} and the currentval is : ${currentValue}`);
    return acc + currentValue
},5)

// console.log(myTotal);

const mytotal = myNums.reduce( (acc , curVal) => {
console.log(`${acc} and current ${curVal}`);
return acc + curVal }, 0 )

console.log(`outer : ${mytotal}`);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

let CoursePrice = shoppingCart.reduce( (acc, item) =>  {return acc + item.price}, 0);

console.log(CoursePrice);
















