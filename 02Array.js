 const marvel_heros = ["thor", "Ironman", "Batman"];
 const dc_heros = ["batman", "superman", "captainAmerica"]

 //push
//  The push method doesn't return the combined array; instead, it returns the new length of the array after the element(s) have been added.
//  let heros = marvel_heros.push(dc_heros);
//  console.log(marvel_heros);
//  console.log(heros);

 //If you want to create a new array that contains both sets of heroes (i.e., concatenate the arrays), you should use the concat method or the spread operator:

//  ****concat method or the spread operator:***
//concat method

let allheros = marvel_heros.concat(dc_heros);
// console.log(allheros);
//[ 'thor', 'Ironman', 'Batman', 'batman', 'superman', 'captainAmerica' ]

// spread
let spreadallheros = [...marvel_heros, ...dc_heros];
// console.log(allheros);
// [ 'thor', 'Ironman', 'Batman', 'batman', 'superman', 'captainAmerica' ]

let anotherarray = [1,2,3,4,[5,6,7,4],[4,5,true,["Raman",4,89]]];

const infinityArray = anotherarray.flat(Infinity); //precision
// console.log(infinityArray);


//to check it is array ot not :  true , false
// console.log(Array.isArray("RishabhYadav")); //false

//to convert a string into array
// console.log(Array.from("RishabhYAdav"));
// [
//     'R', 'i', 's', 'h',
//     'a', 'b', 'h', 'Y',
//     'A', 'd', 'a', 'v'
//   ]

console.log(Array.from({name: "ramanKumar"})); // result is []

const details = {
    name: "Rishabh",
    age : 3,
    lastNAme : "YAdav",
};

const arrayObject = Object.keys(details);
// [ 'name', 'age', 'lastNAme' ]
const arrayObject1 = Object.values(details);
// [ 'Rishabh', 3, 'YAdav' ]
// console.log(arrayObject);
// console.log(arrayObject1);

let score1 = [100]
let score2 = [4588,300,5458]
let score3 = 300

console.log(Array.of(score1, score2, score3));
// [ [ 100 ], [ 4588, 300, 5458 ], 300 ]

/*Notes
`Array.from` and `Array.of` are two methods in JavaScript used to create arrays, but they serve different purposes.

1. `Array.from`:

   `Array.from` is a static method that creates a new array from an iterable or array-like object. It allows you to convert objects that are not arrays into arrays. The method takes two optional arguments:

   - `arrayLike`: The object to be converted into an array.
   - `mapFn` (optional): A function that is applied to each element in the newly created array.

   Here's an example of using `Array.from` to convert a string into an array of its characters:

   ```javascript
   const str = 'hello';
   const arr = Array.from(str); // Creates an array ['h', 'e', 'l', 'l', 'o']
   ```

   You can also use the optional `mapFn` argument to transform the elements as they are being added to the new array.

2. `Array.of`:

   `Array.of` is a static method used to create a new array with the provided arguments as its elements. It's primarily used to ensure that the result is always an array, even when passing a single argument. This can be useful when you want to create an array with a specific number of elements without any ambiguity.

   Here's an example of using `Array.of`:

   ```javascript
   const arr1 = Array.of(1, 2, 3); // Creates an array [1, 2, 3]
   const arr2 = Array.of(5);       // Creates an array with one element [5]
   ```

   In the second example, even though we pass a single argument (5), it still creates an array with that argument as its element. This is different from the behavior of the `Array` constructor, which would interpret a single argument as the length of the array.

In summary, `Array.from` is used to create an array from an iterable or array-like object, and it can transform elements during the conversion. `Array.of` is used to create an array with the provided arguments as elements, ensuring that the result is always an array, even with a single argument.*/




Certainly! Here's an example of how to use the `Array.of` method in JavaScript:

```javascript
const arrayWithArguments = Array.of(1, 2, 3, 4, 5);

console.log(arrayWithArguments);
```

In this example, we're using `Array.of` to create an array called `arrayWithArguments`. The arguments `1, 2, 3, 4, 5` are passed to `Array.of`, and it creates an array with those values as elements. The resulting array, `arrayWithArguments`, will contain these values:

```javascript
[1, 2, 3, 4, 5]
```

Unlike the standard `Array` constructor, which can behave unexpectedly when passed a single numeric argument (treating it as the array length), `Array.of` ensures that the arguments are treated as elements, making it a more predictable way to create arrays with specific values.


Certainly! Here are some examples of how to use `Array.from` in JavaScript:

1. Converting a String into an Array of Characters:

```javascript
const str = 'hello';
const charArray = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
```

2. Converting a Set into an Array:

```javascript
const mySet = new Set([1, 2, 3, 4, 5]);
const arrayFromSet = Array.from(mySet); // [1, 2, 3, 4, 5]
```

3. Mapping Elements during Conversion:

```javascript
const numbers = [1, 2, 3, 4, 5];
const squaredArray = Array.from(numbers, num => num * num); // [1, 4, 9, 16, 25]
```

4. Creating an Array of a Specific Length:

```javascript
const length = 5;
const emptyArray = Array.from({ length }); // [undefined, undefined, undefined, undefined, undefined]
```

5. Copying an Array:

```javascript
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = Array.from(originalArray); // [1, 2, 3, 4, 5]
```

6. Converting an Array-Like Object (e.g., arguments) into an Array:

```javascript
function exampleFunction() {
  const argsArray = Array.from(arguments);
  console.log(argsArray);
}

exampleFunction(1, 2, 3); // [1, 2, 3]
```

These examples demonstrate how `Array.from` can be used to create arrays from various data sources and how you can apply a mapping function during the conversion if needed.




















