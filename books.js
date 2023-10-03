const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userbook = books.filter( (bookSelection) => (bookSelection.genre === `History`) )
//  console.log(userbook);

let newBookStore = []
 let loop = books.forEach( (book1) => {
        if (book1.edition === 2010) {
            newBookStore.push(book1) 
        }
        
 } )
// console.log(newBookStore);
// console.log(loop);

 userbook = books.filter( (bookSelection) => (bookSelection.edition === 2010) )

//  console.log(userbook);

userbook = books.filter( (bookSelection) => (bookSelection.edition >= 1995 && bookSelection.genre === `History`) )
console.log(userbook);
 