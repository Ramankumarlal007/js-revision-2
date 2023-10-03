const coding = ["js", "java", "ruby", "rail", 'python']
 coding.forEach(function (kairav) {
    console.log(kairav);
 } )

 coding.forEach( (item) => {
    console.log(item);
 } )

 let printME = function (x) {
    console.log(x);
 }

 coding.forEach(printME)


coding.forEach( (item, index, coding) =>{
    console.log(item, index, coding);
} )
/*js 0 [ 'js', 'java', 'ruby', 'rail', 'python' ]
java 1 [ 'js', 'java', 'ruby', 'rail', 'python' ]
ruby 2 [ 'js', 'java', 'ruby', 'rail', 'python' ]
rail 3 [ 'js', 'java', 'ruby', 'rail', 'python' ]
python 4 [ 'js', 'java', 'ruby', 'rail', 'python' ]*/


const myCoding = [
    {languageName: "javascript",
    languageFIleNAme: "js"},

    {languageName: "python",
    languageFIleNAme: "py"}, 
     
    {languageName: "java",
    languageFIleNAme: "java"},
]

myCoding.forEach( (itemSuperMAn) => {
console.log(itemSuperMAn.languageFIleNAme);
})










