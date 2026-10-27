// ============================================================
// 1. substring()
// ============================================================

/*
substring() extracts a portion of a string.

Syntax:
string.substring(startIndex, endIndex);

1. startIndex is included.
2. endIndex is excluded.
3. Negative indexes are treated as 0.
4. If startIndex is greater than endIndex, the values are swapped.
5. If endIndex is omitted, extraction continues to the end.
*/

let text = "JavaScript Playwright";

console.log(text.substring(0, 4));   // Java
console.log(text.substring(4, 10));  // Script
console.log(text.substring(11));     // Playwright
console.log(text.substring(-6, 4));  // Java
console.log(text.substring(4, 0));   // Java (indexes are swapped)

// Difference between slice() and substring()
console.log(text.slice(-6, -1));      // right
console.log(text.substring(-6, 4));  // Java

/*
slice()      supports negative indexes.
substring()  treats negative indexes as 0.
*/


// ============================================================
// 2. replace()
// ============================================================

/*
replace() replaces the FIRST matching occurrence by default.

Syntax:
string.replace(searchValue, newValue);

It returns a new string. The original string is unchanged.
*/

let text2 = "JavaScript is powerful. JavaScript is simple";

console.log(text2.replace("JavaScript", "Python"));
// Python is powerful. JavaScript is simple

console.log(text2.replace("J", "P"));
// PavaScript is powerful. JavaScript is simple

console.log(text2); // Original string remains unchanged


// ============================================================
// 3. replaceAll()
// ============================================================

/*
replaceAll() replaces ALL matching occurrences.

Syntax:
string.replaceAll(searchValue, newValue);

It returns a new string without modifying the original.
*/

console.log(text2.replaceAll("JavaScript", "Python"));
// Python is powerful. Python is simple

console.log(text2.replaceAll("J", "P"));
// PavaScript is powerful. PavaScript is simple


// ============================================================
// 4. split()
// ============================================================

/*
split() converts a string into an array.

Syntax:
string.split(separator, limit);

separator → Specifies where to split the string.
limit     → Maximum number of array elements to return.

The original string is unchanged.
*/

let sentence = "JavaScript is a programming language";

console.log(sentence);
console.log(typeof sentence); // string

let words = sentence.split(" ");

console.log(words);
// ["JavaScript", "is", "a", "programming", "language"]

console.log(sentence[0]); // J
console.log(words[0]);    // JavaScript

console.log(typeof words); // object (arrays are objects in JavaScript)


// ============================================================
// 5. split() WITH A SEPARATOR
// ============================================================

let date = "12/10/2026";

let dateParts = date.split("/");

console.log(dateParts);
// ["12", "10", "2026"]

console.log(dateParts[0]); // 12
console.log(dateParts[1]); // 10
console.log(dateParts[2]); // 2026


// Splitting using a comma

let sentence2 = "JavaScript,is,a programming,language";

console.log(sentence2.split(","));
// ["JavaScript", "is", "a programming", "language"]

console.log(sentence2.split(",", 1));
// ["JavaScript"]

console.log(sentence2.split(",", 2));
// ["JavaScript", "is"]


// ============================================================
// 6. split() WITH LIMIT
// ============================================================

/*
The limit specifies the maximum number of elements
returned in the resulting array.
*/

let limited = "a,b,c,d,e";

console.log(limited.split(","));
// ["a", "b", "c", "d", "e"]

console.log(limited.split(",", 3));
// ["a", "b", "c"]

console.log(limited.split(",", 1));
// ["a"]

console.log(limited.split(",", 0));
// []


// ============================================================
// 7. EXTRACTING A LIMITED NUMBER OF CHARACTERS
// ============================================================

let str = "JavaScript";
let limit = 4;

console.log(str.slice(0, limit)); // Java

/*
Here, limit is used as the ending index in slice().
The end index is excluded, so four characters are returned.
*/


// ============================================================
// 8. split() WITH DIFFERENT LIMITS
// ============================================================

str = "Java,Python,JavaScript,Cypress";

let result = str.split(",", 2);
console.log(result);
// ["Java", "Python"]

result = str.split(",", 3);
console.log(result);
// ["Java", "Python", "JavaScript"]

result = str.split(",", 1);
console.log(result);
// ["Java"]


// ============================================================
// 9. join()
// ============================================================

/*
join() converts an array into a string.

Syntax:
array.join(separator);

The separator is placed between array elements.
If no separator is provided, a comma is used.
join() returns a string and does not modify the array.
*/

let fruits = ["Apple", "Banana", "Mango", "Cherry"];

console.log(typeof fruits); // object
console.log(fruits);        // ["Apple", "Banana", "Mango", "Cherry"]

let s1 = fruits.join(", ");

console.log(typeof s1); // string
console.log(s1);        // Apple, Banana, Mango, Cherry

console.log(fruits.join("?"));
// Apple?Banana?Mango?Cherry

console.log(fruits.join());
// Apple,Banana,Mango,Cherry

console.log(fruits.join(""));
// AppleBananaMangoCherry


// ============================================================
// 10. join() WITH A DIFFERENT ARRAY
// ============================================================

console.log("------------------------------------");

let test = ["Java", "Python", "JavaScript", "C#", "Ruby"];

console.log(test.length); // 5

let res = test.join(".");

console.log(res);
// Java.Python.JavaScript.C#.Ruby

console.log(typeof res); // string

// Accessing array elements
console.log(test[0]); // Java

// Accessing characters in the joined string
console.log(res[0]); // J
console.log(res[1]); // a


// ============================================================
// 11. STRING CONCATENATION
// ============================================================

/*
Concatenation means joining strings together.

The + operator can concatenate strings.
*/

let firstName = "Ranjeet";
let lastName = "Kendre";

let fullName = firstName + " " + lastName;

console.log(fullName); // Ranjeet Kendre


// Concatenation using join()

let skills = ["JavaScript", "Playwright", "API Testing"];

console.log(skills.join(", "));
// JavaScript, Playwright, API Testing


// Concatenation using a template literal

let course = "Playwright";
let language = "JavaScript";

console.log(`I am learning ${course} with ${language}.`);
// I am learning Playwright with JavaScript.