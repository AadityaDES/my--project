// ============================================================
// SLICE() METHOD
// ============================================================

// slice() is used to extract a portion of an array
// and return it as a NEW array.
//
// Important:
// slice() DOES NOT modify the original array.
//
// Syntax:
//
// array.slice(startIndex, endIndex);
//
// startIndex → Included
// endIndex   → Excluded
//
// If endIndex is not provided,
// elements are extracted until the end of the array.


// ============================================================
// 1. BASIC slice() EXAMPLE
// ============================================================

let numbers = [10, 20, 30, 40, 50, 60];

let result = numbers.slice(1, 3);

console.log(result);


// Output:
//
// [20, 30]
//
// Index 1 → 20 → Included
// Index 2 → 30 → Included
// Index 3 → 40 → Excluded


// ============================================================
// 2. slice() WITHOUT END INDEX
// ============================================================

result = numbers.slice(1);

console.log(result);


// Output:
//
// [20, 30, 40, 50, 60]
//
// Starts from index 1
// Extracts all elements until the end


// ============================================================
// 3. EXTRACT FIRST THREE ELEMENTS
// ============================================================

result = numbers.slice(0, 3);

console.log(result);


// Output:
//
// [10, 20, 30]


// ============================================================
// 4. EXTRACT LAST TWO ELEMENTS
// ============================================================

result = numbers.slice(4);

console.log(result);


// Output:
//
// [50, 60]


// ============================================================
// 5. EXTRACT LAST TWO ELEMENTS USING NEGATIVE INDEX
// ============================================================

result = numbers.slice(-2);

console.log(result);


// Output:
//
// [50, 60]
//
// -1 → 60
// -2 → 50


// ============================================================
// 6. POSITIVE AND NEGATIVE INDEX
// ============================================================

numbers = [10, 20, 30, 40, 50, 60];

/*

Positive Index:

Value →  10   20   30   40   50   60
Index →   0    1    2    3    4    5


Negative Index:

Value →  10   20   30   40   50   60
Index →  -6   -5   -4   -3   -2   -1

*/


// ============================================================
// 7. slice() USING NEGATIVE START AND END INDEX
// ============================================================

result = numbers.slice(-4, -1);

console.log(result);


// Output:
//
// [30, 40, 50]
//
// -4 → 30 → Included
// -3 → 40 → Included
// -2 → 50 → Included
// -1 → 60 → Excluded


// ============================================================
// 8. slice() USING ARRAY LENGTH
// ============================================================

let length = numbers.length;

result = numbers.slice(2, length);

console.log(result);


// Output:
//
// [30, 40, 50, 60]


// ============================================================
// IMPORTANT POINTS ABOUT slice()
// ============================================================

/*

1. slice() extracts a portion of an array.

2. slice() returns a NEW array.

3. slice() does NOT modify the original array.

4. startIndex is INCLUDED.

5. endIndex is EXCLUDED.

6. If endIndex is not provided,
   elements are extracted until the end.

7. slice() supports negative indexes.

8. Negative index starts from the end.

*/


// ============================================================
// slice() vs splice()
// ============================================================

/*

slice()
-------

Used to EXTRACT elements.

Does NOT modify the original array.

Returns a NEW array.


splice()
--------

Used to ADD, REMOVE, or REPLACE elements.

MODIFIES the original array.

Returns the REMOVED elements.


Example:

let numbers = [10, 20, 30, 40, 50];

let result = numbers.slice(1, 3);

console.log(result);
// [20, 30]

console.log(numbers);
// [10, 20, 30, 40, 50]


-------------------------------


let numbers = [10, 20, 30, 40, 50];

let result = numbers.splice(1, 2);

console.log(result);
// [20, 30]

console.log(numbers);
// [10, 40, 50]

*/


// ============================================================
// EASY WAY TO REMEMBER
// ============================================================

/*

slice()
   ↓
Extract
   ↓
Original array NOT changed


splice()
   ↓
Add / Remove / Replace
   ↓
Original array IS changed

*/

/*
1. Array index starts from 0.

2. Last index = array.length - 1.

3. Invalid index returns undefined.

4. Arrays are dynamic in JavaScript.

5. Arrays can store multiple data types.

6. Array.isArray() is used to check whether a value is an array.

7. includes() checks whether a value exists.

8. indexOf() returns the index of a value.
   If not found → -1.

9. push() adds at the end.
10. pop() removes from the end.
11. shift() removes from the beginning.
12. unshift() adds at the beginning.

13. splice() modifies the original array.

14. slice() does not modify the original array.
*/