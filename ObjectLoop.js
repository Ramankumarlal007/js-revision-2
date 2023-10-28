// const myObject = {
//     js : 'javascript',
//     cpp: 'c++',
//     rb:'ruby',
//     swift: 'swift by apple'
// };

// for (const key in myObject) {
//     // console.log(key);
// }
// js
// cpp
// rb
// swift
// for (const key in myObject) {
//     // console.log(myObject[key]);
// }
// for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
// }
/*javascript
c++
ruby
swift by apple*/


const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
};

// for (const key in myObject) {
//     // console.log(`${key} shortcut is for ${myObject[key]}`);
// }


const programming = ["js", "java", "ruby", "rail"]

for (const key of programming) {
   console.log(key);
}

//for (const key of programming) { ... }: This line starts a for...of loop. The loop variable key will take on the value of each element in the programming array during each iteration.

for (const key in programming) {
    console.log(key);
 }

 //1. `for (const key in myObject)`: This line initiates a `for...in` loop. It declares a loop variable `key`, which will be used to iterate through the properties of `myObject`.


for (const key in programming) {
   console.log(programming[key]);
}


const map = new Map()
map.set('IN', "India")
map.set('Fr', "Feance")
map.set('uk', "Britain")
map.set('IN', "India")

for (const key of map) {
    console.log(key);
}
for (const key in map) {
    console.log(key);
} //not iteratable




/*The `for...in` loop in JavaScript is used to iterate over the enumerable properties of an object. In your example, you're using it to iterate over the properties of an object called `myObject` and log the values associated with those properties. Here's how the loop works:

```javascript
const myObject = {
    name: "John",
    age: 30,
    city: "New York"
};

for (const key in myObject) {
    console.log(myObject[key]);
}
```

Here's how the loop operates:

1. `for (const key in myObject)`: This line initiates a `for...in` loop. It declares a loop variable `key`, which will be used to iterate through the properties of `myObject`.

2. The loop iterates over the enumerable properties of `myObject`. In each iteration, it assigns the name of the property to the `key` variable.

3. Inside the loop, `myObject[key]` is used to access the value associated with the current property named by `key`.

4. `console.log(myObject[key])` prints the value of the current property to the console during each iteration.

In the example provided, the loop iterates through the properties of `myObject` (e.g., "name," "age," and "city") and logs the corresponding values. So, the output of the code will be something like:

```
John
30
New York
```

Each value associated with the properties is logged to the console one by one. The `for...in` loop is particularly useful when you need to iterate over the properties of an object, but be cautious when using it to avoid iterating over inherited properties or non-enumerable properties, as it will include all properties that are enumerable, including those from the object's prototype chain.*/



//map
/*In your code, you're using a `Map` object to store key-value pairs, and then you're trying to iterate through the map using a `for...of` loop and a `for...in` loop. Here's what happens:

```javascript
const map = new Map();
map.set('IN', "India");
map.set('Fr', "France");
map.set('uk', "Britain");
map.set('IN', "India");  // This line updates the value for the 'IN' key.

for (const key of map) {
    console.log(key);
}
```

Now, let's discuss the two loops you're using:

1. `for...of` loop:

   This loop is designed for iterating over the entries (key-value pairs) of a Map. When you use `for (const key of map)`, it iterates over the entries in the Map, and `key` in this case is an array where the first element is the key, and the second element is the value.

   The output will look something like this:

   ```
   [ 'IN', 'India' ]
   [ 'Fr', 'France' ]
   [ 'uk', 'Britain' ]
   ```

   You can access the key and value separately like this:

   ```javascript
   for (const [key, value] of map) {
       console.log(key, value);
   }
   ```

2. `for...in` loop:

   This loop is typically used for iterating over the properties of an object, but it's not meant for iterating over a Map. In the case of a Map, it will iterate over its methods and properties, not the key-value pairs.

   The output will be the names of the Map's methods and properties:

   ```
   size
   get
   set
   has
   delete
   clear
   ```

If you want to iterate specifically over the key-value pairs in a Map, use the `for...of` loop as shown in the first example or use the `map.forEach()` method, which is designed for iterating over a Map's entries.*/







