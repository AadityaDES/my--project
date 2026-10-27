// ============================================================
// ARRAYS IN JAVASCRIPT
// ============================================================

// A variable normally stores a single value.

let singleUrl = "https://www.facebook.com/";

console.log(singleUrl);


// ============================================================
// ARRAY - STORE MULTIPLE VALUES
// ============================================================

// An array can store multiple values in a single variable.

let urls = [
    "https://www.facebook.com/",
    "https://opensource-demo.orangehrmlive.com/",
    "https://www.google.com/"
];

console.log(urls);


// ============================================================
// 1. ARRAYS MAINTAIN ORDER
// ============================================================

// Arrays maintain the order in which elements are added.

let websites = ["Facebook", "Google", "Amazon", "YouTube"];

console.log(websites);


// ============================================================
// 2. DYNAMIC NATURE OF ARRAY
// ============================================================

// Arrays are dynamic in JavaScript.
// Elements can be added or removed during runtime.

let testCases = ["TC01", "TC02"];

console.log(testCases);


// Add an element at the end using push()

testCases.push("TC03");

console.log(testCases);


// Remove the last element using pop()

testCases.pop();

console.log(testCases);


// ============================================================
// 3. ARRAY SYNTAX
// ============================================================

/*

let arrayName = [element1, element2, element3, ...... elementN];

*/

let browsers = ["Chrome", "Firefox", "Safari", "Edge"];

console.log(browsers);


// Array indexes:
//
// Chrome  → 0
// Firefox → 1
// Safari  → 2
// Edge    → 3


// ============================================================
// 4. ARRAY LENGTH
// ============================================================

// length returns the total number of elements.

console.log("Array:", browsers);
console.log("Length:", browsers.length);

// Indexes:
// 0, 1, 2, 3
//
// Total elements = 4


console.log("----------------------------");


// ============================================================
// 5. ARRAY INITIALIZATION
// ============================================================

// Variable declaration

let a;

// Assigning a value

a = 10;

console.log(a);


// Array declaration and initialization

let testData = [101, 102, 103, 104, 105];

console.log(testData);

console.log("Length:", testData.length);


// Empty array

let result = [];

console.log(result);
console.log("Length:", result.length);


// ============================================================
// 6. MIXED DATA TYPES
// ============================================================

// JavaScript arrays can store different data types
// in the same array.

let mixedData = [
    "TC01",
    200,
    true,
    null,
    undefined,
    { status: "Pass" }
];

console.log(mixedData);


// ============================================================
// 7. ACCESSING ARRAY ELEMENTS USING INDEX
// ============================================================

// Arrays use zero-based indexing.

console.log(mixedData[0]); // TC01
console.log(mixedData[1]); // 200
console.log(mixedData[2]); // true
console.log(mixedData[3]); // null
console.log(mixedData[4]); // undefined
console.log(mixedData[5]); // { status: "Pass" }


// Index 6 does not exist

console.log(mixedData[6]); // undefined


console.log("-----------------------------");


// ============================================================
// 8. CREATING AN ARRAY - METHOD 1
// ============================================================

// Using square brackets []
// Most common and recommended way

let locators = [
    "#pass",
    "#username",
    "#login"
];

console.log(locators);


// ============================================================
// 9. CREATING AN ARRAY - METHOD 2
// ============================================================

// Using Array constructor

let ports = new Array(3000, 4000, 5000);

console.log(ports);


// ============================================================
// 10. ARRAY CONSTRUCTOR WITH SINGLE NUMBER
// ============================================================

// Important:
//
// new Array(5) creates an array with length 5.
// It does NOT create an array containing the value 5.

let emptyArray = new Array(5);

console.log(emptyArray);
console.log("Length:", emptyArray.length);


// ============================================================
// 11. ACCESSING ARRAY ELEMENTS
// ============================================================

// Arrays are zero-indexed.
//
// First element  → index 0
// Last element   → index length - 1

let pages = [
    "Home",
    "Dashboard",
    "Profile",
    "Settings"
];


// Positive Index:
//
// Home      → 0
// Dashboard → 1
// Profile   → 2
// Settings  → 3


console.log(pages[0]);
console.log(pages[1]);
console.log(pages[2]);
console.log(pages[3]);


console.log("----------------------------");


// ============================================================
// 12. NEGATIVE INDEX USING at()
// ============================================================

// The at() method can be used to access elements
// using negative indexes.
//
// -1 → Last element
// -2 → Second last element
// -3 → Third last element
// -4 → Fourth last element

console.log(pages.at(-1)); // Settings
console.log(pages.at(-2)); // Profile
console.log(pages.at(-3)); // Dashboard
console.log(pages.at(-4)); // Home


console.log("----------------------------");


// ============================================================
// 13. TRAVERSING AN ARRAY
// ============================================================

// Traversing means accessing each element
// one by one.

for (let i = 0; i < pages.length; i++) {

    console.log(pages[i]);
}


// Complete Flow:
//
// i = 0 → pages[0] → Home
// i = 1 → pages[1] → Dashboard
// i = 2 → pages[2] → Profile
// i = 3 → pages[3] → Settings
//
// i = 4
// 4 < pages.length (4)
// false → loop stops


// ============================================================
// 14. UPDATING ARRAY ELEMENTS
// ============================================================

let testStatus = [
    "Pending",
    "Pending",
    "Pending"
];

console.log(testStatus);


// Update first element

testStatus[0] = "Passed";

console.log(testStatus);


// Update third element

testStatus[2] = "Failed";

console.log(testStatus);


// ============================================================
// 15. ADD ELEMENT AT A SPECIFIC INDEX
// ============================================================

// Current array:
//
// Index 0 → Passed
// Index 1 → Pending
// Index 2 → Failed

testStatus[3] = "Passed";

console.log(testStatus);


// New array:
//
// Index 0 → Passed
// Index 1 → Pending
// Index 2 → Failed
// Index 3 → Passed


// ============================================================
// IMPORTANT ARRAY POINTS
// ============================================================

/*

1. Array stores multiple values in a single variable.

2. Arrays are zero-indexed.

3. First element is at index 0.

4. Last element is at index:
   array.length - 1

5. Arrays maintain insertion order.

6. Arrays are dynamic in JavaScript.

7. Elements can be added or removed during runtime.

8. Arrays can store different data types.

9. push() adds an element at the end.

10. pop() removes the last element.

11. at() can be used to access elements using
    positive and negative indexes.

12. Array length gives the total number of elements.

13. Array elements can be updated using their index.

14. Traversing means accessing array elements
    one by one.

*/