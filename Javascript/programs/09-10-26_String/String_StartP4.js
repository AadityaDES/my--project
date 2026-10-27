// ============================================================
// STRINGS IN JAVASCRIPT
// ============================================================


// ============================================================
// 1. WHAT IS A STRING?
// ============================================================

// A string is a sequence of characters enclosed in quotes.
//
// Characters can be:
// 1. Letters
// 2. Numbers
// 3. Symbols
// 4. Spaces
//
// A string represents TEXT data in JavaScript.
//
// Strings can be created using:
// 1. Single quotes     ' '
// 2. Double quotes     " "
// 3. Backticks         ` `


let str1 = "Hello";
let str2 = "Hello";
let str3 = `Hello`;

console.log(str1);
console.log(str2);
console.log(str3);


// Check data type

console.log(typeof str1);

// Output:
// string


// ============================================================
// 2. STRING VS NUMBER
// ============================================================

let str4 = "100";
let num = 200;

console.log(typeof str4); // string
console.log(typeof num);  // number


// String + Number

console.log(str4 + 10);

// Output:
// 10010
//
// Because str4 is a string.
// The + operator performs string concatenation
// when one operand is a string.


// Number + Number

console.log(num + 10);

// Output:
// 210
//
// Here both values are numbers,
// so arithmetic addition is performed.


// ============================================================
// 3. STRING CONCATENATION
// ============================================================

// Concatenation means joining strings together.

let firstName = "Ranjeet";
let lastName = "Kendre";

let fullName = firstName + " " + lastName;

console.log(fullName);

// Output:
// Ranjeet Kendre


// ============================================================
// 4. STRING IMMUTABILITY
// ============================================================

// Strings are IMMUTABLE in JavaScript.
//
// Immutable means:
// Once a string is created, its individual characters
// cannot be changed directly.
//
// You can create a NEW string,
// but you cannot modify the existing string.


let name = "JavaScript";

name[0] = "P";

console.log(name);

// Output:
// JavaScript
//
// The original string remains unchanged.


// ============================================================
// 5. CREATING A NEW STRING
// ============================================================

let name1 = "Rohit";

name1 = "Virat";

console.log(name1);

// Output:
// Virat
//
// Here we are not modifying "Rohit".
// We are assigning a completely new string to name1.


// ============================================================
// 6. ANOTHER STRING IMMUTABILITY EXAMPLE
// ============================================================

let name2 = "Rahul";

name2[0] = "T";

console.log(name2);

// Output:
// Rahul
//
// The character at index 0 cannot be changed directly.


// ============================================================
// 7. STRING VS ARRAY - MUTABILITY
// ============================================================

// Strings are immutable.

let name3 = "Rahul";

name3[0] = "T";

console.log(name3);

// Rahul


// Arrays are mutable.

let numbers = [10, 20, 30];

numbers[0] = 100;

console.log(numbers);

// [100, 20, 30]


// Important:
//
// String  → Immutable
// Array   → Mutable


// ============================================================
// 8. STRING INDEXING
// ============================================================

// Strings are zero-indexed.
//
// Example:
//
// "Hello World"
//
// H → 0
// e → 1
// l → 2
// l → 3
// o → 4
// space → 5
// W → 6
// o → 7
// r → 8
// l → 9
// d → 10


let single = "Hello World";

console.log(single[0]);  // H
console.log(single[1]);  // e
console.log(single[2]);  // l
console.log(single[3]);  // l
console.log(single[4]);  // o
console.log(single[5]);  // space
console.log(single[6]);  // W
console.log(single[7]);  // o
console.log(single[8]);  // r
console.log(single[9]);  // l
console.log(single[10]); // d


// Index 11 does not exist.

console.log(single[11]);

// Output:
// undefined


// ============================================================
// 9. STRING LENGTH
// ============================================================

// length returns the total number of characters.
//
// Important:
// length is NOT the last index.
//
// Last index = length - 1


console.log(single.length);

// Output:
// 11

console.log(single[single.length - 1]);

// Output:
// d


// ============================================================
// 10. CONVERT VALUE TO STRING
// ============================================================

// String() can convert other data types into strings.

let str5 = String(true);

console.log(str5);

console.log(typeof str5);

// Output:
//
// true
// string


// More examples

console.log(String(100));
console.log(String(false));
console.log(String(null));


// ============================================================
// 11. EMPTY STRING
// ============================================================

// An empty string contains zero characters.

let emp1 = "";
let emp2 = '';
let emp3 = ``;

console.log(emp1.length);
console.log(emp2.length);
console.log(emp3.length);


// Output:
//
// 0
// 0
// 0


// All three are empty strings.

console.log(emp1 === "");
console.log(emp2 === "");
console.log(emp3 === "");

// true
// true
// true


console.log(emp1 === "Hi");

// false


// ============================================================
// 12. DIFFERENT QUOTES
// ============================================================

// Single quotes

let message1 = 'Hello JavaScript';


// Double quotes

let message2 = "Hello JavaScript";


// Backticks

let message3 = `Hello JavaScript`;

console.log(message1);
console.log(message2);
console.log(message3);


// ============================================================
// 13. TEMPLATE LITERALS
// ============================================================

// Backticks allow us to embed variables
// directly inside a string.
//
// Syntax:
//
// `text ${variable}`


let userName = "Ranjeet";
let experience = 7;

console.log(`My name is ${userName} and I have ${experience} years of experience.`);


// Output:
//
// My name is Ranjeet and I have 7 years of experience.


// ============================================================
// IMPORTANT STRING POINTS
// ============================================================

/*

1. A string represents TEXT data.

2. Strings can be created using:
   ' '
   " "
   ` `

3. Strings are zero-indexed.

4. First character is at index 0.

5. Last index = string.length - 1.

6. String.length returns the number of characters.

7. Strings are IMMUTABLE.

8. Individual characters cannot be changed directly.

9. String + String performs concatenation.

10. String + Number generally results in string concatenation.

11. Number + Number performs mathematical addition.

12. String() can convert a value into a string.

13. An empty string has length 0.

14. Backticks are called template literals.

15. Template literals support ${variable}.

*/
 str2 = "JavaScript Playwright Testing";

let words = str2.split(" ").reverse().join(" ")
//let result = "";
console.log(words)


// for (let i = 0; i < words.length; i++) {

//     let reverseWord = "";

//     for (let j = words[i].length - 1; j >= 0; j--) {
//         reverseWord = reverseWord + words[i][j];
//     }

//     result = result + reverseWord + " ";
// }

// console.log(result.trim());

// console.log("-".repeat(30));
