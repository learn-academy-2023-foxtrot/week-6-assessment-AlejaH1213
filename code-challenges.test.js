// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("capWords",  () =>{
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
  
      const hitchhikersCharacters = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
    expect(capWords(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// Good failure: ReferenceError: capWords is not defined
// b) Create the function that makes the test pass.

// Pseudo code:
//name: capWords
//input and output: array of objects, returns array with sentences
//Process:
// Im going to use iteration to access the values and the name of the person
//im going to take that name and use charAt and toUpperCase to access and modify the first letter


const capWords = (array) => {
  let capitalizedSentence = array.map((person) => {
    const name = person.name
    const capitalizedName = name.charAt(0).toUpperCase()
    return `${capitalizedName} is ${person.occupation}`
  })
  return capitalizedSentence
}
console.log(capWords(hitchhikersCharacters));

//test didnt passed, I dont understand how I can do to access the first letter of the name and also get to print the whole name. 
// I found some resources that suggest to use split, but Im not sure how to use it. 


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("remainders", () =>{
  it("that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(remainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(remainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
} )
//good failure: ReferenceError: remainders is not defined
// b) Create the function that makes the test pass.

// Pseudo code:
//name: remainders
//input and output: takes in an array and returns an array
//process: 
//use filter and typeof to get all the values in the array that are numbers
// use map to go through those numbers and get the remainders

const remainders = (array) => {
  const numbersOnly = array.filter((value) => typeof value === 'number')
  const remainders = numbersOnly.map((value) => value % 3)
  return remainders
}
// TEST PASSED
// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("cubedSum", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(cubedSum(cubeAndSum1)).toEqual(99)
    expect(cubedSum(cubeAndSum2)).toEqual(1125)
  })
})
// good failure:  ReferenceError: cubedSum is not defined
// b) Create the function that makes the test pass.

// Pseudo code:
// name: cubedSum
// input and output: takes in an array and returns a number
// process:
// map to iterate through the array and cube the numbers
//a for loop to iterate through the cubed numbers and add them together
const cubedSum = (array) => {
  let cubed = array.map((value) => value * value * value)
  let total = 0
  for (let index = 0; index < cubed.length; index++) {
    total += cubed[index]
  }
  return total
}
// TEST PASSED

