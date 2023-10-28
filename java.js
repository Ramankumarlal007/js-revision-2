const myObject = {
    'game1': 'NFS',
     'game2':"spiderman"
}



for (const [key, value] of myObject) {
    console.log(`${key} :- ${value}`);
} // myObject is not iterable

for (const key in myObject) {
    console.log(`${key}: ${myObject[key]} ` );
    
}

