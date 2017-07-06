// 1.
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// Then, write and example of using the function.


/*
1. What do I name it?
2. What parameters or arguments should it take?
3. What should this function send back, or return
4. What logic do I need to write in code to make this work?
5. How do I use this new function?

*/
function max(num1, num2){
  let largest;
   if (num1 > num2){
     largest = num1
   } else {
     largest = num2
   }

  return largest;
}

max(10,1)
max(1,2)

// 2.
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// Then, write and example of using the function.

function maxOfThree(num1, num2, num3){
  let largest;
  if (num1 > num2){
      largest = num1
  } else {
    largest = num2
  }
  //Right here, the biggest number between num1 and num2 is stored in the varialbe largest
  if (num3 > largest){
    largest = num3
  }
  return largest;
}

maxOfThree(1,2,3)

maxOfThree(3,2,1)

// 3.
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// Then, write and example of using the function.

function isVowel(char){
  let vowel = false
  if (char === 'a'){
    vowel = true
  }
  if (char === 'e'){
    vowel = true
  }
  if (char === 'i'){
    vowel = true
  }
  if (char === 'o'){
    vowel = true
  }
  if (char === 'u'){
    vowel = true
  }
return vowel
}
isVowel('g')
console.log(isVowel('g'));

// 4.
// Write a function called `sum` that takes two parameters and returns the sum of those 2 numbers.
// Then, write and example of using the function.
function sum(num1, num2){
  return num1 + num2;
}
let answer1 = sum(1, 4);
console.log(answer1);

// 5.
// Write a function named `avg` that takes 3 parameters and returns the average of those 3 numbers.
// Then, write and example of using the function.
function avg(num1, num2, num3){
  return (num1 + num2 + num3) / 3;
  }
let answer2 = avg(3, 5, 7);
console.log(answer2);

// 6.
// Write a function called `getLength` that takes one parameter (a string) and returns the length
// Then, write and example of using the function.
function getLength(phr){
    return phr.length;
  }
let answer3 = getLength('allrightythen');
console.log(answer3);

// 7.
// Write a function called `greaterThan` that takes two parameters
// and returns `true` if the second parameter is greater than the first.
// Otherwise the function should return `false`.
// Then, write and example of using the function.
function greaterThan(num1, num2) {
    if (num2 > num1); {
      return "True";
    }
    if (num2 < num1); {
      return "False";
    }
  }

let answer4 = greaterThan(3, 9);
console.log(answer4);

// 8.
// Write a function called `greet` that takes a
// single parameter and returns a string that
// is formated like "Hello, Name!" where *Name*
// is the parameter that was passed in.
// Then, write and example of using the function.
function greet(Name) {
  return "Hello, " + Name;
  }

let answer5 = greet('Rocky!');
console.log(answer5);

// 9.
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence.
// Finally the function should return that sentence.
// Note: When I say words and sentence I mean strings. For example:
// words: "quick", "fox", "fence"
// sentence: "quick brown fox jumps over the fence"
// Then, write and example of using the function.
function madlib(word1, word2, word3, word4) {
    return word1 + " the " + word2 + " and " + word3 + " the " + word4;
  }
let answer6 = madlib('Over', 'river', 'through', 'woods');
console.log(answer6);
