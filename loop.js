//iteration also known as loop
//for loop

// for (let kairav = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let kairav = 0; kairav < 10; kairav++) {
    const element = kairav;
    if (element == 5) {
        // console.log(`Dsa is best course to learn`);
    }
    // console.log(element);
    
}

for (let i = 0; i <= 10 ; i++) {
    // console.log(`Outer loop ${i}`);
    for (let j = 0; j <= 10;  j++) {
    //    console.log(`Inner loop ${j} and inner loop ${i}`);
    // console.log(i + '*' + j + '=' + i*j);
    // console.log(`${i} * ${j} = ${i * j}`);
        
    }
    
}


//for loop on array

let myArray = ["Rishabh", 'KAirav', " sukanya", 'Raman', true, 786, false];
console.log(myArray.length);

for (let batman = 0; batman < myArray.length; batman++) {
    const element = myArray[batman];
    console.log(element);
    
}

//break and continue

for (let index = 0; index <= 12; index++) {
    if (index ==5) {
        // console.log('5 is detected');
        break // furthue exection of ccode is halted
    }
    // console.log(`Value of index is ${index}`);
}

for (let index = 0; index <= 12; index++) {
    if (index ==5) {
        console.log('5 is detected');
        continue // it continues the further execution as it is
    }
    console.log(`Value of index is ${index}`);
}



























