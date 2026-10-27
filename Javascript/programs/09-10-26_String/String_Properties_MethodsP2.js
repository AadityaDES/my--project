// ============================================================
// STRING PROPERTIES AND METHODS
// ============================================================

// ============================================================
// 1. length PROPERTY
// ============================================================

// length returns the number of UTF-16 code units in a string.
// Spaces are also counted.
//
// Syntax:
// string.length

let text = "JavaScript Playwright";

console.log(text.length); // 21

let emptyString = "";
console.log(emptyString.length); // 0

let empstr = "   ";
console.log(empstr.length); // 3


// ============================================================
// 2. CHARACTER INDEXING
// ============================================================

// Strings use zero-based indexing.
//
// String:  H   e   l   l   o
// Index:   0   1   2   3   4
// Negative:-5  -4  -3  -2  -1

let word = "Hello";

console.log(word[0]); // H
console.log(word[1]); // e
console.log(word[2]); // l
console.log(word[3]); // l
console.log(word[4]); // o
console.log(word[5]); // undefined


// ============================================================
// 3. ACCESS CHARACTERS USING BRACKET NOTATION
// ============================================================

// Syntax:
// string[index]
//
// Bracket notation supports positive indexes.
// Negative indexes do not access characters from the end.

console.log(word[1]);  // e
console.log(word[4]);  // o
console.log(word[-1]); // undefined


// ============================================================
// 4. charAt() METHOD
// ============================================================

// charAt() returns the character at the specified index.
//
// Syntax:
// string.charAt(index)
//
// Negative indexes are not treated as positions from the end.
// An invalid index returns an empty string.

console.log(word.charAt(1));  // e
console.log(word.charAt(4));  // o
console.log(word.charAt(-2)); // ""
console.log(word.charAt(5));  // ""


// ============================================================
// 5. at() METHOD
// ============================================================

// at() returns the character at the specified index.
//
// It supports both positive and negative indexes.
//
// Negative index:
// -1 → Last character
// -2 → Second-last character

console.log(word.at(1));  // e
console.log(word.at(-1)); // o
console.log(word.at(-2)); // l
console.log(word.at(5));  // undefined


// ============================================================
// 6. DIFFERENCE: [], charAt(), at()
// ============================================================

/*
Operation          []             charAt()       at()

Positive index     Character      Character      Character
Negative index     undefined      Empty string   Character
Invalid index      undefined      Empty string   undefined

Example:

word[5]          → undefined
word.charAt(5)   → ""
word.at(5)       → undefined

word[-1]         → undefined
word.charAt(-1)  → ""
word.at(-1)      → "o"
*/


console.log("----------------------------------");


// ============================================================
// 7. toUpperCase()
// ============================================================

// Converts lowercase letters to uppercase.
//
// Important:
// It returns a new string.
// The original string remains unchanged.

let lower = "hellO World";

let upper = lower.toUpperCase();

console.log(upper); // HELLO WORLD
console.log(lower); // hellO World


// ============================================================
// 8. toLowerCase()
// ============================================================

// Converts uppercase letters to lowercase.

let upperstr = "HeLLo";

let lowerstr = upperstr.toLowerCase();

console.log(lowerstr); // hello
console.log(upperstr); // HeLLo


console.log("----------------------------------");


// ============================================================
// 9. trim()
// ============================================================

// trim() removes whitespace from BOTH ends of a string.
//
// It does not remove whitespace from the middle.

let padded = "              Hello world             ";

console.log(padded);
console.log(padded.trim()); // "Hello world"

// Original string remains unchanged.
console.log(padded);


// ============================================================
// 10. trimStart()
// ============================================================

// Removes whitespace from the beginning of a string.

padded = "              Hello world             ";

console.log(padded.trimStart());

// Output:
// "Hello world             "


// ============================================================
// 11. trimEnd()
// ============================================================

// Removes whitespace from the end of a string.

console.log(padded.trimEnd());

// Output:
// "              Hello world"


console.log("----------------------------------");


// ============================================================
// 12. includes()
// ============================================================

// includes() checks whether a substring exists.
//
// Returns:
// true  → Substring exists
// false → Substring does not exist
//
// It is case-sensitive.

let sentence = "The quick brown fox jumps over the lazy dog";

console.log(sentence.includes("fox"));    // true
console.log(sentence.includes("cat"));    // false
console.log(sentence.includes("  fox"));  // false
console.log(sentence.includes("Fox"));    // false


// ============================================================
// IMPORTANT THEORY POINTS
// ============================================================

/*
1. length is a property, not a method.
   Correct: text.length
   Incorrect: text.length()

2. Strings use zero-based indexing.

3. at() supports negative indexes.

4. charAt() does not support negative indexing
   from the end.

5. Strings are immutable.

6. toUpperCase() and toLowerCase() return new strings.

7. trim() removes whitespace from both ends.

8. trimStart() removes whitespace from the beginning.

9. trimEnd() removes whitespace from the end.

10. includes() returns a Boolean: true or false.

11. includes() is case-sensitive.

12. Spaces count toward string.length.
*/