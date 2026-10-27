// ============================================================
// STRINGS IN JAVASCRIPT
// ============================================================

let str = "Hello, World!";

console.log(str);


// ============================================================
// 1. WHAT IS A STRING?
// ============================================================

/*
A string is a  of collection of characters  used to represent text.

Strings are enclosed in:

1. Single quotes   ' '
2. Double quotes   " "
3. Backticks       ` `

Strings can contain:
- Alphabets
- Numbers represented as text
- Special characters
- Spaces
- A combination of all these

Strings are commonly used for:
- Displaying messages
- Storing user input
- Working with text data
*/


// ============================================================
// 2. MULTILINE STRING
// ============================================================

// Backticks allow us to create multiline strings.

let multiline = `String is a collection of characters used to represent text.
In programming, strings are typically enclosed in quotes
(single, double, or backticks) and can include letters,
numbers, symbols, and whitespace.
Strings are commonly used for displaying messages,
storing user input, and manipulating text data.`;

console.log(multiline);


// ============================================================
// 3. STRING INDEXING
// ============================================================

// Strings use zero-based indexing.
//
// String:  H   E   L   L   O
// Index:   0   1   2   3   4
// Negative:-5  -4  -3  -2  -1
//
// First character → Index 0
// Last character  → Index length - 1


let s1 = "Hello";

console.log(s1[0]); // H
console.log(s1[1]); // e
console.log(s1[2]); // l
console.log(s1[3]); // l
console.log(s1[4]); // o


// ============================================================
// 4. ACCESSING CHARACTERS USING charAt()
// ============================================================

// charAt() returns the character at the specified index.

console.log(s1.charAt(0)); // H
console.log(s1.charAt(1)); // e
console.log(s1.charAt(4)); // o


// ============================================================
// 5. ACCESSING CHARACTERS USING at()
// ============================================================

// at() supports both positive and negative indexes.

console.log(s1.at(0));  // H
console.log(s1.at(1));  // e
console.log(s1.at(-1)); // o
console.log(s1.at(-2)); // l
console.log(s1.at(-3)); // l


// ============================================================
// 6. DIFFERENCE: [] vs charAt() vs at()
// ============================================================

// Using square brackets

console.log(s1[10]); // undefined

// Using charAt()

console.log(s1.charAt(10)); // Empty string: ""

// Using at()

console.log(s1.at(10)); // undefined


// Important:
//
// []       → Supports positive indexes
// charAt() → Supports positive indexes
// at()     → Supports positive and negative indexes


// ============================================================
// 7. TYPES OF CHARACTERS IN STRINGS
// ============================================================

// Alphabets

let alphabets = "ASDFGHJ";

console.log(alphabets);


// Numbers represented as text

let numbersAsText = "12235";

console.log(numbersAsText);
console.log(typeof numbersAsText); // string


// Special characters

let specialCharacters = "@#$%^&*";

console.log(specialCharacters);


// Combination of letters, numbers and symbols

let password = "Ranjeet@1234";

console.log(password);


// ============================================================
// 8. IMPORTANT STRING POINTS
// ============================================================

/*
1. A string represents text data.

2. Strings can use single quotes, double quotes,
   or backticks.

3. Backticks support multiline strings.

4. Strings use zero-based indexing.

5. Negative indexing is supported by at().

6. Strings are immutable.

7. length returns the total number of UTF-16 code units
   in a string.

8. [] and at() return undefined for an out-of-range index.

9. charAt() returns an empty string for an out-of-range index.
*/


// ============================================================
// STRING THEORY - IMPORTANT NOTES
// ============================================================

/*
1. WHAT IS A STRING?
--------------------
A string is a sequence of characters used to represent text.
It can contain letters, numbers, symbols, spaces, and special
characters.


2. WAYS TO CREATE A STRING
--------------------------
JavaScript supports three ways to create strings:

Single quotes  → 'Hello'
Double quotes  → "Hello"
Backticks      → `Hello`

All three create string values.

Backticks also support multiline strings and template literals.


3. STRING IMMUTABILITY
----------------------
Strings are immutable in JavaScript.

This means individual characters of an existing string
cannot be changed directly.

Example:

let name = "Rahul";
name[0] = "T";

console.log(name); // Rahul

To change the text, create a new string and assign it.


4. STRING INDEXING
------------------
Strings use zero-based indexing.

Example:

let str = "Hello";

H → 0
e → 1
l → 2
l → 3
o → 4

The first character is at index 0.

The last index is string.length - 1.


5. NEGATIVE INDEXING
--------------------
Negative indexes can be used with the at() method.

Example:

let str = "Hello";

str.at(-1); // o
str.at(-2); // l

-1 represents the last character.
-2 represents the second-last character.

Square-bracket indexing and charAt() do not support
negative indexes in the same way.


6. STRING LENGTH
----------------
The length property returns the number of UTF-16 code units
in a string.

Example:

let str = "Hello";

console.log(str.length); // 5

Important:
length is a property, not a method.
Use str.length, not str.length().


7. STRING VS NUMBER
-------------------
A number inside quotes is a string.

Example:

let a = "100";
let b = 100;

console.log(typeof a); // string
console.log(typeof b); // number

"100" + 10 → "10010"
100 + 10   → 110


8. STRING CONCATENATION
-----------------------
Concatenation means joining strings together.

Example:

let firstName = "Rahul";
let lastName = "Sharma";

console.log(firstName + " " + lastName);

// Output: Rahul Sharma


9. TEMPLATE LITERALS
--------------------
Template literals use backticks.

They allow variables and expressions to be embedded
using ${ }.

Example:

let name = "Rahul";
let age = 25;

console.log(`My name is ${name} and I am ${age} years old.`);


10. STRINGS ARE PRIMITIVE VALUES
-------------------------------
JavaScript strings are primitive values.

They are not arrays, even though they support indexing
and have a length property.

Example:

let str = "Hello";

console.log(str[0]); // H
console.log(Array.isArray(str)); // false


11. ACCESSING CHARACTERS
------------------------
Characters can be accessed using:

str[index]
str.charAt(index)
str.at(index)

Example:

let str = "Hello";

console.log(str[0]);      // H
console.log(str.charAt(0)); // H
console.log(str.at(-1));  // o


12. OUT-OF-RANGE INDEX
---------------------
When an index is outside the string:

str[10]       → undefined
str.at(10)    → undefined
str.charAt(10) → ""


13. EMPTY STRING
----------------
An empty string contains no characters.

Example:

let str = "";

console.log(str.length); // 0
console.log(typeof str); // string

An empty string is different from:
undefined, null, and " " (a space).


14. CASE SENSITIVITY
--------------------
String comparisons are case-sensitive.

Example:

console.log("Hello" === "hello"); // false

Uppercase and lowercase letters are treated differently.


15. STRING COMPARISON
---------------------
Strings can be compared using comparison operators.

Example:

console.log("JavaScript" === "JavaScript"); // true
console.log("JavaScript" === "Java");       // false


16. STRING METHODS
------------------
JavaScript provides built-in methods to work with strings.

Examples:

toUpperCase() → Converts to uppercase
toLowerCase() → Converts to lowercase
includes()    → Checks whether text exists
indexOf()     → Finds the first matching position
slice()       → Extracts part of a string
replace()     → Replaces matching text
trim()        → Removes whitespace from both ends
split()       → Splits a string into an array


17. STRING METHODS AND IMMUTABILITY
-----------------------------------
String methods generally return a new string rather than
modifying the original string.

Example:

let text = "hello";

let upperText = text.toUpperCase();

console.log(upperText); // HELLO
console.log(text);      // hello


18. CONVERTING VALUES TO STRINGS
--------------------------------
String() converts a value into a string.

Example:

let value = String(100);

console.log(value);        // "100"
console.log(typeof value); // string


19. ESCAPE CHARACTERS
---------------------
Escape characters allow special characters to be represented
inside strings.

Examples:

\\n → New line
\\t → Tab
\\" → Double quote
\\' → Single quote
\\\\ → Backslash

Example:

console.log("Hello\\nWorld");

Output:
Hello
World


20. STRING VS ARRAY
-------------------
String:
- Immutable
- Stores text
- Individual characters cannot be changed directly

Array:
- Mutable
- Stores multiple elements
- Elements can be updated using indexes

Example:

let text = "Hello";
text[0] = "Y";
console.log(text); // Hello

let arr = ["H", "e", "l", "l", "o"];
arr[0] = "Y";
console.log(arr); // ["Y", "e", "l", "l", "o"]
*/