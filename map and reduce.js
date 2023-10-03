const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let mynewNums = myNumers.map( (num) => num +10 );
// console.log(mynewNums);

// let mynewNums1 = myNumers.map( (num) => (num +10) );
// console.log(mynewNums1);

// let mynewNumss = myNumers.map( (num) => {return num +10} );
// console.log(mynewNumss);

//chaining//

const myNumer2s = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNumer2s.map((num) => num*10).map((rishu) => rishu +2).filter((sukanya) => sukanya >50)

console.log(newNums);
// filter is the game of true and false 