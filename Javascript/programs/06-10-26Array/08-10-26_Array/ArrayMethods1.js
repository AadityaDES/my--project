// ============================================================
// 7. concat()
// ============================================================

// concat() combines two or more arrays
// and returns a NEW array.
//
// Important:
// concat() does NOT modify the original arrays.
//
// Syntax:
//
// array1.concat(array2, array3, ...);


let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr4 = [7, 8, 9];

let arr3 = arr1.concat(arr2, arr4);

console.log(arr3);


// Output:
//
// [1, 2, 3, 4, 5, 6, 7, 8, 9]


console.log(arr1); // [1, 2, 3]
console.log(arr2); // [4, 5, 6]
console.log(arr4); // [7, 8, 9]


// ============================================================
// 8. join()
// ============================================================

// join() converts all array elements into a STRING.
//
// Syntax:
//
// array.join(separator);
//
// If separator is not provided,
// comma (,) is used by default.


let pathParts = [
    "Home",
    "User",
    "Credentials"
];

console.log(pathParts);

let path = pathParts.join("/");

console.log(path);


// Output:
//
// Home/User/Credentials


// Another example

let names = ["Rahul", "Amit", "Ketan"];

console.log(names.join(", "));

// Output:
//
// Rahul, Amit, Ketan


// Important:
//
// join() returns a string.
// It does NOT modify the original array.


// ============================================================
// 9. reverse()
// ============================================================

// reverse() reverses the order of elements.
//
// Important:
// reverse() MODIFIES the original array.
//
// Syntax:
//
// array.reverse();


let order = [1, 2, 3, 4, 5, 6];

order.reverse();

console.log(order);


// Output:
//
// [6, 5, 4, 3, 2, 1]


// Before:
//
// [1, 2, 3, 4, 5, 6]
//
// After reverse():
//
// [6, 5, 4, 3, 2, 1]


// ============================================================
// 10. sort()
// ============================================================

// sort() sorts the elements of an array.
//
// By default, sort() sorts values as STRINGS.
//
// Syntax:
//
// array.sort();


let fruits = ["Mango", "Banana", "Orange", "Apple"];

fruits.sort();

console.log(fruits);


// Output:
//
// ["Apple", "Banana", "Mango", "Orange"]


// ============================================================
// sort() WITH NUMBERS
// ============================================================

// Important:
//
// JavaScript sort() converts elements to strings
// when no compare function is provided.

let numbers = [10, 5, 25, 2, 100];

numbers.sort();

console.log(numbers);


// Do NOT expect numerical sorting from the above.


console.log("----------------------------");


// Numerical Ascending Order

numbers.sort((a, b) => a - b);

console.log(numbers);


// Output:
//
// [2, 5, 10, 25, 100]


// Numerical Descending Order

numbers.sort((a, b) => b - a);

console.log(numbers);


// Output:
//
// [100, 25, 10, 5, 2]


// ============================================================
// 11. includes()
// ============================================================

// includes() checks whether an element exists in an array.
//
// Returns:
//
// true  → Element exists
// false → Element does not exist
//
// Syntax:
//
// array.includes(value);


let supportBrowsers = ["Chrome", "Firefox", "Safari", "Edge", "IE"];

console.log(supportBrowsers.includes("Firefox"));
// true

console.log(supportBrowsers.includes("Test"));
// false


// includes() is case-sensitive.

console.log(supportBrowsers.includes("chrome"));
// false

console.log(supportBrowsers.includes("Chrome"));
// true


// ============================================================
// 12. indexOf()
// ============================================================

// indexOf() returns the FIRST index of a specified element.
//
// If the element is not found, it returns -1.
//
// Syntax:
//
// array.indexOf(searchElement);


// Example

let logs = ["info", "error", "warn", "error", "info", "error"];

let firstIndex = logs.indexOf("error");

console.log("First error index:", firstIndex);


// Output:
//
// First error index: 1


// ============================================================
// FIND SECOND OCCURRENCE
// ============================================================

// Start searching after the first occurrence.

let secondIndex = logs.indexOf(
    "error",
    firstIndex + 1
);

console.log("Second error index:", secondIndex);


// Output:
//
// Second error index: 3


// ============================================================
// FIND THIRD OCCURRENCE
// ============================================================

let thirdIndex = logs.indexOf(
    "error",
    secondIndex + 1
);

console.log("Third error index:", thirdIndex);


// Output:
//
// Third error index: 5


// Complete Flow:
//
// logs
//
// Index →  0       1       2       3       4       5
// Value → info   error    warn    error    info    error
//
// First error  → index 1
// Second error → index 3
// Third error  → index 5


// ============================================================
// 13. lastIndexOf()
// ============================================================

// lastIndexOf() returns the LAST index
// of a specified element.
//
// If the element is not found, it returns -1.
//
// Syntax:
//
// array.lastIndexOf(searchElement);


console.log(
    logs.lastIndexOf("error")
);


// Output:
//
// 5


console.log(
    logs.lastIndexOf("info")
);


// Output:
//
// 4


// ============================================================
// indexOf() vs lastIndexOf()
// ============================================================

/*

indexOf()
   ↓
Finds the FIRST occurrence

lastIndexOf()
   ↓
Finds the LAST occurrence


Example:

let data = ["A", "B", "A", "C", "A"];

data.indexOf("A");
// 0

data.lastIndexOf("A");
// 4

*/


// ============================================================
// 14. at()
// ============================================================

// at() is used to access an array element
// using positive or negative indexes.
//
// Syntax:
//
// array.at(index);


// Positive index

let data = [10, 20, 30, 40, 50];

console.log(data.at(2));

// Output:
// 30


// Negative index

console.log(data.at(-3));

// Output:
// 30


// Index positions:
//
// Value →  10   20   30   40   50
// Index →   0    1    2    3    4
//         -5   -4   -3   -2   -1


// ============================================================
// QUICK SUMMARY
// ============================================================

/*

concat()
→ Combines arrays
→ Returns a new array
→ Original arrays are not modified


join()
→ Converts array into a string
→ Returns a string
→ Original array is not modified


reverse()
→ Reverses array elements
→ Modifies original array


sort()
→ Sorts array elements
→ Modifies original array
→ Default sorting is string-based


includes()
→ Checks whether an element exists
→ Returns true or false


indexOf()
→ Finds first occurrence
→ Returns index
→ Returns -1 if not found


lastIndexOf()
→ Finds last occurrence
→ Returns index
→ Returns -1 if not found


at()
→ Accesses element using index
→ Supports positive and negative indexes

*/