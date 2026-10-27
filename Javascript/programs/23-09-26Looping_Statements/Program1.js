// LOOPING STATEMENTS

// Definition:
// A loop is used to execute the same block of code repeatedly
// until a specified condition becomes false.

// Without a loop:
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// With a loop:
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// ============================================================
// Why Do We Need Loops?
// ============================================================

// We use loops when:
// 1. We need to repeat the same operation.
// 2. We need to process multiple values.
// 3. We need to execute the same code for multiple test data.
// 4. We need to iterate through arrays or strings.
// 5. We need to perform repetitive testing operations.

// Example:
// In automation testing, if we have 100 test data values,
// we can use a loop instead of writing the same code 100 times.

// ============================================================
// JavaScript Loops
// ============================================================

// Definition:
// A loop is a programming construct used to execute
// the same block of code repeatedly until a specified
// condition becomes false.

// ============================================================
// Types of Loops in JavaScript
// ============================================================

// 1. for Loop
//    -> Used when the number of iterations is known.

// 2. while Loop
//    -> Used when the number of iterations is not known
//       in advance.

// 3. do...while Loop
//    -> Executes the loop body at least once.

// 4. for...of Loop
//    -> Iterates over iterable values such as:
//       Array, String, Map, Set, etc.

// 5. for...in Loop
//    -> Iterates over the enumerable properties/keys of an object.

// 6. forEach()
//    -> Array method used to iterate through array elements.


// ============================================================
// 1. for Loop
// ============================================================

/*
Syntax:

for (initialization; condition; increment/decrement) {
    // Code to be executed
}
*/

console.log("-".repeat(40));
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("PC");

// ============================================================
// How for Loop Works
// ============================================================
/*
Iteration    i    Condition     Output    Next i

1            1    1 <= 5 true      1         2
2            2    2 <= 5 true      2         3
3            3    3 <= 5 true      3         4
4            4    4 <= 5 true      4         5
5            5    5 <= 5 true      5         6
6            6    6 <= 5 false     Exit Loop

*/
// Execution Flow:
//
// Step 1: Initialization -> Runs only once
// Step 2: Condition check
//         true  -> Execute loop body
//         false -> Exit loop
// Step 3: Increment/Decrement
// Step 4: Again check the condition
// Step 5: Repeat until the condition becomes false

console.log("===========Example 1: Print Numbers from 10 to 20===========")

console.log("-".repeat(40));
for (let number = 10; number <= 20; number++) {
    console.log(number);
}
console.log("==========Example 2: Print Square of Numbers==========")
// ============================================================
// Number 1 : Square = 1
// Number 2 : Square = 4
// Number 3 : Square = 9
// ...
console.log("-".repeat(40));
for (let i = 1; i <= 10; i++) {
    console.log(`Number ${i} : Square = ${i * i}`);
}
console.log("========Example 3: Print Multiplication Table of 2=======")
/*
2 X 1 = 2
2 X 2 = 4
2 X 3 = 6
...
2 X 10 = 20
*/
console.log("-".repeat(40));

for (let i = 1; i <= 10; i++) {
    console.log(`2 X ${i} = ${2 * i}`);
}

console.log("============Example 4: Print Multiplication Table of 5========")
/*
5 X 1 = 5
5 X 2 = 10
5 X 3 = 15
...
5 X 10 = 50
*/
console.log("-".repeat(40));

for (let i = 1; i <= 10; i++) {
    console.log(`5 X ${i} = ${5 * i}`);
}
console.log("============Example 5: Print Numbers Divisible by 3=========")
console.log("-".repeat(40));

for (let i = 3; i <= 40; i += 3) {
    console.log(i);
}

/*
Execution:

3 <= 40 -> true  -> 3
6 <= 40 -> true  -> 6
9 <= 40 -> true  -> 9
...
39 <= 40 -> true -> 39
42 <= 40 -> false -> Exit
*/
console.log("==========Example 6: Print Even Numbers from 2 to 100=======")

console.log("-".repeat(40));

for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

// i += 2 means:
// i = i + 2
console.log("=======Example 7: Print Odd Numbers from 1 to 20=========")

console.log("-".repeat(40));

for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

// i += 2 means:
// i = i + 2
// ============================================================
// Important: Execution Flow of for Loop
// ============================================================
/*

Step 1:
Initialization
Runs only once.

Step 2:
Condition Check

true  -> Execute loop body
false -> Exit loop

Step 3:
Increment / Decrement

Step 4:
Again check the condition.

Step 5:
Repeat the process.

*/
console.log("============Example 8: Print Hi 3 Times=========")
console.log("-".repeat(40));

for (let i = 1; i <= 3; i++) {
    console.log("Hi");
}
/*
Execution:
i = 1
1 <= 3 -> true  -> Print Hi
i++    -> i becomes 2

2 <= 3 -> true  -> Print Hi
i++    -> i becomes 3

3 <= 3 -> true  -> Print Hi
i++    -> i becomes 4

4 <= 3 -> false -> Exit Loop
*/

// ============================================================
// Same Example Without for Loop
// ============================================================
/*

let i = 1;

console.log(i);

i++;

console.log(i);

i++;

console.log(i);

*/

// ============================================================
// Important Points
// ============================================================

// 1. Initialization runs only once.
// 2. Condition is checked before every iteration.
// 3. If the condition is true, the loop body executes.
// 4. If the condition is false, the loop stops.
// 5. Increment/decrement executes after the loop body.
// 6. Make sure the condition eventually becomes false,
//    otherwise an infinite loop can occur.