/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]

// Copy of an object 'movies'
const moviesDel = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
]

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.

*/
console.log('\n<=== Ex.A ===>\n')
let test = `Test`
console.log(test)

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
console.log('\n<=== Ex.B ===>\n')
let sum 
sum = 10+ 20
console.log(sum)

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
console.log('\n<=== Ex.C ===>\n')
let random = Math.round(Math.random()*(20-0)+0)
console.log(random)

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
console.log('\n<=== Ex.D ===>\n')
let me = {
  name: 'your name',
  surname: 'your surname',
  age: 'your age'
}
console.log(me)

/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
console.log('\n<=== Ex.E ===>\n')
delete me.age
console.log(me)

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
console.log('\n<=== Ex.F ===>\n')

me.skills = ['HTML', 'CSS','JavaScript']
console.log(me)

/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
console.log('\n<=== Ex.G ===>\n')

me.skills.pop()
console.log(me)


// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
console.log('\n<=== Ex.1  ===>\n')
function dice (){
  return Math.round(Math.random()* ( 6-1)+1)
}
console.log(dice())

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
console.log('\n<=== Ex.2  ===>\n')
function whoIsBigger (a,b){
  if (a > b){
    return a
  }
  if ( a < b) {
    return b
  }
  if ( a === b) {
    return 'They are equal'
}
}
console.log(whoIsBigger(1,2))
console.log(whoIsBigger(3,2))
console.log(whoIsBigger(2,2))


/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
console.log('\n<=== Ex.3  ===>\n')
function splitMe(a){
  let x = a.split(' ')
  return x
}
console.log(splitMe('Hello mate, how its goin?'))
/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
console.log('\n<=== Ex.4  ===>\n')
function deleteOne(a,b){
  if (typeof a === 'string'){
  if ( b === true){
    return a.slice(1)
  }
  if ( b === false){
    return a.slice(0,-1)
  }
} else {return 'not a string'}
}
console.log(deleteOne('Hello', true))
console.log(deleteOne('Hello', false))

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
console.log('\n<=== Ex.5  ===>\n')

function onlyLetters(a){
  return a.replace(/[0-9]/g, '')
}
console.log(onlyLetters('Hello 4 all my2 frien3ds'))

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
console.log('\n<=== Ex.6  ===>\n')
function isThisAnEmail(a){
  return /\S+@\S+\.\S+/.test(a)
}
console.log(isThisAnEmail('smth@gmail.com'))
console.log(isThisAnEmail('smth'))

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
console.log('\n<=== Ex.7  ===>\n')
function whatDayIsIt(){
  let day
  switch (new Date().getDay()) {
    case 0: day = "Sunday"; break;
    case 1: day = "Monday"; break;
    case 2: day = "Tuesday"; break;
    case 3: day = "Wednesday"; break;
    case 4: day = "Thursday"; break;
    case 5: day = "Friday"; break;
    case 6: day = "Saturday";
  }
  return day
}
console.log(whatDayIsIt())

/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
console.log('\n<=== Ex.8  ===>\n')

function rollTheDices(par){
  let x = {
    sum: 0,
    values: []
  }
    for ( i=0; i< par; i++){
      let y = dice()
      x.values.push(y)
      x.sum += y
    }
  return x
  }

console.log(rollTheDices(3))

// /* Ex.9
//    Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
// */
console.log('\n<=== Ex.9  ===>\n')

function howManyDays(dys){
  let previous = new Date(dys.getFullYear(), dys.getMonth()-1, dys.getDate());
  let current = new Date()

  return Math.ceil((current - previous) / 86400000 - 1) 
}    
console.log(howManyDays(new Date(2021, 5, 10)))



/* Ex.10
  Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
console.log('\n<=== Ex.10  ===>\n')

function isTodayMyBirthday(dys){
  let myBD = new Date(dys.getFullYear(), dys.getMonth()-1, dys.getDate())
  let current = new Date()
  let year = current.getFullYear() - myBD.getFullYear()
  current.getMonth() == myBD.getMonth() && current.getDate() === myBD.getDate() ? console.log(`Happy birthday dear firend! It's your: ${year} year!`) : console.log('nope, not today :3')
}
isTodayMyBirthday(new Date(2000, 6, 28))
isTodayMyBirthday(new Date(2000, 6, 18))



// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
    Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
console.log('\n<=== Ex.11  ===>\n')

function deleteProp(a, b){

  for (i=0; i < a.length; i++){
    delete a[i][b]
  }
  console.log(a)
}

deleteProp(moviesDel, "Title") //Using "moviesDel" object, because in another key the code under will not work (cause its deleting the title)
/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
console.log('\n<=== Ex.12  ===>\n')
function olderMovie(){
  let x = movies

  function srt(a, b){
    if ( a.Year < b.Year ){
      return -1;
    }
    if ( a.Year > b.Year ){
      return 1;
    }
    return 0;
  }
  x.sort(srt);

  for (i=0; i<x.length; i++){
    console.log('Movie name: '+x[i].Title, 'Year: ' + x[i].Year)
  }
}
olderMovie()
/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
console.log('\n<=== Ex.13  ===>\n')

function countMovies(){
  console.log('There are: ' + movies.length + ' movies')
}
countMovies()

/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
console.log('\n<=== Ex.14  ===>\n')
function onlyTheTitles(){
  let title = []
  for(i=0; i<movies.length; i++){
    title.push(movies[i].Title)
  }
  console.log(title)
}
onlyTheTitles()

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
console.log('\n<=== Ex.15  ===>\n')

function onlyInThisMillennium(){
  let x = []

  for( i=0; i<movies.length;i++){
    if(movies[i].Year >= 2000){
      x.push(movies[i])
    }
  }
  console.log(x)
}
onlyInThisMillennium()
/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
console.log('\n<=== Ex.16  ===>\n')

function getMovieById(id){
  for(i=0; i<movies.length; i++){
    
    if( id === movies[i].imdbID){
      console.log(movies[i])
    }
}
}
getMovieById('tt0355702')
/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/
console.log('\n<=== Ex.17  ===>\n')

function sumAllTheYears(){
let sum = 0
  for ( i=0;i<movies.length; i++){
    sum += parseInt(movies[i].Year)
  }
  console.log(sum)
}
sumAllTheYears()
/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/
console.log('\n<=== Ex.18  ===>\n')

function searchByTitle(a){
  for (i=0;i<movies.length;i++){
    let x = movies[i].Title.search(a)

    if( x >=0 ){
      console.log(movies[i])
    }
  }
}
searchByTitle('Flies')
/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/
console.log('\n<=== Ex.19  ===>\n')

function searchAndDivide(a){
let total = {
  match: '',
  unmatch: ''
}
for (i=0;i<movies.length;i++){
  let x = movies[i].Title.search(a)

  if( x >=0 ){
    total.match += `${movies[i].Title}, `
  } else {
    total.unmatch += `${movies[i].Title}, `
  }
}

  console.log(total)
}
  searchAndDivide('Flies')
/* Ex.20
  Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/
console.log('\n<=== Ex.20  ===>\n')

function removeIndex(a){
  movies.splice(a,1)
  console.log(movies)
}
  removeIndex(0)

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/
console.log('\n<=== Ex.21  ===>\n')
function halfTree(a){
  let y = 0
  for (i=0; i < a; i++){
    y += a
    console.log(y)

  }

}
halfTree(3)

/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

/* This movies array is used throughout the exercises. Please don't change it :)  */
