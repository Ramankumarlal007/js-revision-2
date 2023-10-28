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

/*Yes, the `filter` method in JavaScript is used to filter elements from an array based on a given condition that evaluates to `true` or `false`. 

Here's how it works:

1. The `filter` method iterates through each element in an array.

2. For each element, it applies a provided function (often referred to as a callback function) to that element.

3. The callback function should return `true` or `false` based on a specified condition. If the function returns `true`, the element is included in the new array. If it returns `false`, the element is excluded from the new array.

4. The `filter` method returns a new array containing only the elements for which the callback function returned `true`.

Here's an example:

```javascript
const numbers = [1, 2, 3, 4, 5, 6];

// Filter even numbers from the array
const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]
```

In this example, the `filter` method filters out all the elements that are not even (i.e., where the condition `num % 2 === 0` evaluates to `true`), and it returns a new array containing only the even numbers.*/