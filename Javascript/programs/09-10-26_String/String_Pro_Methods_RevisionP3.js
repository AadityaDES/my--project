// ============================================================
// STRING PROPERTIES AND METHODS - REVISION
// ============================================================

// length
// charAt()
// at()
// toUpperCase()
// toLowerCase()
// trim()
// trimStart()
// trimEnd()
// includes()
// indexOf()
// lastIndexOf()
// startsWith()
// endsWith()
// search()
// slice()


// ============================================================
// 1. indexOf()
// ============================================================

// indexOf() returns the index of the FIRST occurrence
// of a substring.
//
// If the substring is not found, it returns -1.
//
// Syntax:
// string.indexOf(searchValue, startIndex);


let str = "JavascriptJ";

console.log(str.indexOf("J")); // 0
console.log(str.indexOf("J", 1)); // 10


let str1 = "Hello world Hello";

console.log(str1.indexOf("Hello")); // 0
console.log(str1.indexOf("world")); // 6
console.log(str1.indexOf("XYZ"));   // -1


// ============================================================
// 2. lastIndexOf()
// ============================================================

// lastIndexOf() returns the index of the LAST occurrence
// of a substring.
//
// If the substring is not found, it returns -1.
//
// Syntax:
// string.lastIndexOf(searchValue);


let repeated = "abc abc abc";

console.log(repeated.lastIndexOf("c"));   // 10
console.log(repeated.lastIndexOf("a"));   // 8
console.log(repeated.lastIndexOf("abc")); // 8


// Difference:
//
// indexOf()      → Searches from the beginning
// lastIndexOf()  → Searches from the end


// ============================================================
// 3. startsWith()
// ============================================================

// startsWith() checks whether a string starts with
// a specified substring.
//
// Returns true or false.
//
// Syntax:
// string.startsWith(searchValue);


let urlCheck = "https://www.facebook.com/";

console.log(urlCheck.startsWith("https"));  // true
console.log(urlCheck.startsWith("http://")); // false
console.log(urlCheck.startsWith("www"));    // false


// ============================================================
// 4. endsWith()
// ============================================================

// endsWith() checks whether a string ends with
// a specified substring.
//
// Returns true or false.
//
// Syntax:
// string.endsWith(searchValue);


let fileName = "test_report.pdf";

console.log(fileName.endsWith(".pdf"));  // true
console.log(fileName.endsWith(".html")); // false
console.log(fileName.endsWith(".csv"));  // false


// ============================================================
// 5. search()
// ============================================================

// search() searches for a match using a string
// or a regular expression.
//
// It returns the index of the FIRST match.
// If no match is found, it returns -1.
//
// Syntax:
// string.search(regexp);


let sentence = "Searching using regular expression";

let searchIndex = sentence.search(/regular/);

console.log(searchIndex); // 16


// Example using a regular expression

let text1 = "Order12345";

console.log(text1.search(/[0-9]/)); // 5

// [0-9] matches a digit.
// The first digit, "1", is at index 5.


// ============================================================
// 6. slice()
// ============================================================

// slice() extracts a portion of a string
// and returns a NEW string.
//
// Syntax:
// string.slice(startIndex, endIndex);
//
// startIndex → Included
// endIndex   → Excluded
//
// Negative indexes count backward from the end.
//
// slice() does not modify the original string.


let text = "Javascript Programming";

console.log("Original       :", text);

console.log("slice()        :", text.slice());
console.log("slice(0, 10)   :", text.slice(0, 10));
console.log("slice(11)      :", text.slice(11));
console.log("slice(-5)      :", text.slice(-5));
console.log("slice(-11)     :", text.slice(-11));
console.log("slice(0, -12)  :", text.slice(0, -12));
console.log("slice(-5, -1)  :", text.slice(-5, -1));


// ============================================================
// SLICE() INDEX EXPLANATION
// ============================================================

// String: Javascript Programming
//
// Positive indexes start from 0.
// Negative indexes start from the end.
//
// slice(0, 10)
// → "Javascript"
//
// slice(11)
// → "Programming"
//
// slice(-5)
// → "mming"
//
// slice(-5, -1)
// → "mmin"
//
// slice(0, -12)
// → "Javascript"


// ============================================================
// IMPORTANT THEORY POINTS
// ============================================================

/*

1. indexOf()
   Finds the first occurrence of a substring.

2. lastIndexOf()
   Finds the last occurrence of a substring.

3. startsWith()
   Checks the beginning of a string.

4. endsWith()
   Checks the ending of a string.

5. search()
   Searches using a string or regular expression.
   Returns the first matching index or -1.

6. slice()
   Extracts a portion of a string.
   Start index is included; end index is excluded.

7. These methods do not modify the original string.

8. String indexes start at 0.

9. Negative indexes are supported by slice().

10. Search methods are case-sensitive by default.

*/