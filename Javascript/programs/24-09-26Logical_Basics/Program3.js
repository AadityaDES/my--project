console.log("========Javascript While Loop============")

/*
Syntax:
Initialization;
while (condition) {
    // Code to be executed
    // Increment / Decrement
}
Execution Flow:
Step 1 - Initialization

Step 2 - Condition Check
         true  -> Execute loop body
                  Increment / Decrement
         false -> Exit loop
*/
// ============================================================
// Example 1: Print Numbers from 1 to 5
// ============================================================
// Starting Number = 1
// Ending Number = 5
// Increment = 1
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
console.log("PC");
/*
Complete Iteration:

Iteration | i | Condition | Output | After i++
------------------------------------------------
1st       | 1 | 1 <= 5 T  |   1    |    2
2nd       | 2 | 2 <= 5 T  |   2    |    3
3rd       | 3 | 3 <= 5 T  |   3    |    4
4th       | 4 | 4 <= 5 T  |   4    |    5
5th       | 5 | 5 <= 5 T  |   5    |    6
6th       | 6 | 6 <= 5 F  | Exit   |    -
Final Output:
1
2
3
4
5
*/

console.log("================Example 2: Print Numbers from 5 to 10============")
// Starting Number = 5
// Ending Number = 10
// Increment = 1
let num = 5;
while (num <= 10) {
    process.stdout.write(num + " ");
    num++;
}
console.log();

console.log("==========Example 3: Print Even Numbers from 2 to 20=============");

let even = 2;
while (even <= 20) {
    console.log(even);
    even += 2; // even = even + 2
}
console.log("-----------------");

console.log("==========Example 4: Print Multiplication Table of 3============");

let table = 1;
/*
3 X 1 = 3
3 X 2 = 6
3 X 3 = 9
.
.
3 X 10 = 30
*/
console.log("Table of 3");
while (table <= 10) {
    console.log(`3 X ${table} = ${3 * table}`);
    table++;
}
console.log("-----------------");

console.log("=====Example 5: Print Each Character of a String=====");

let word = "Hello";

// Character 0 : H
// Character 1 : e
// Character 2 : l
// Character 3 : l
// Character 4 : o
let index = 0;
while (index < word.length) {
    console.log(`Character ${index} : ${word[index]}`);
    index++;
}
console.log("-----------------");
console.log("==========Example 6: Infinite while Loop========")
/*
while (true) {
    console.log("Hi");
}
The condition is always true,
so the loop will continue indefinitely.
Use a proper condition to avoid an infinite loop.
*/

console.log("=========Example 7: Reverse a String Using while Loop======")
let text = "Playwright";
// Index:
// P -> 0
// l -> 1
// a -> 2
// y -> 3
// w -> 4
// r -> 5
// i -> 6
// g -> 7
// h -> 8
// t -> 9
let reverse = "";
let lastIndex = text.length - 1;
console.log("Last Index: " + lastIndex);
while (lastIndex >= 0) {
    reverse = reverse + text[lastIndex];
    lastIndex--;
}
console.log("Original: " + text);
console.log("Reverse: " + reverse);
/*
Complete Execution:
String = "Playwright"
Last Index = 9

Iteration | lastIndex | Condition        | Character | reverse Before | reverse After
------------------------------------------------------------------------------------------------
1st       | 9         | 9 >= 0 -> true   | "t"       | ""              | "t"
2nd       | 8         | 8 >= 0 -> true   | "h"       | "t"             | "th"
3rd       | 7         | 7 >= 0 -> true   | "g"       | "th"            | "thg"
4th       | 6         | 6 >= 0 -> true   | "i"       | "thg"           | "thgi"
5th       | 5         | 5 >= 0 -> true   | "r"       | "thgi"          | "thgir"
6th       | 4         | 4 >= 0 -> true   | "w"       | "thgir"         | "thgirw"
7th       | 3         | 3 >= 0 -> true   | "y"       | "thgirw"        | "thgirwy"
8th       | 2         | 2 >= 0 -> true   | "a"       | "thgirwy"       | "thgirwya"
9th       | 1         | 1 >= 0 -> true   | "l"       | "thgirwya"      | "thgirwyal"
10th      | 0         | 0 >= 0 -> true   | "P"       | "thgirwyal"     | "thgirwyalP"
11th      | -1        | -1 >= 0 -> false | Exit      |                 |

Final:
Original = Playwright
Reverse = thgirwyalP
*/
// ============================================================
// Example 8: Sum of Numbers from 1 to 5
// ============================================================
// 1 + 2 + 3 + 4 + 5 = 15

let number = 1;
let sum = 0;

while (number <= 5) {
    sum = sum + number;
    number++;
}

console.log("Sum: " + sum);

/*
Complete Iteration:

Iteration | number | Condition | sum Before | Calculation | sum After
-----------------------------------------------------------------------
1st       |   1    | 1 <= 5 T  |      0      |   0 + 1     |    1
2nd       |   2    | 2 <= 5 T  |      1      |   1 + 2     |    3
3rd       |   3    | 3 <= 5 T  |      3      |   3 + 3     |    6
4th       |   4    | 4 <= 5 T  |      6      |   6 + 4     |   10
5th       |   5    | 5 <= 5 T  |     10      |  10 + 5     |   15
6th       |   6    | 6 <= 5 F  |     15      | Loop Exit   |   15
*/
// ============================================================
// Example 9: Sum of Array Elements Using while Loop
// ============================================================
let arr1 = [1, 2, 3, 4, 5];
let total = 0;
let arrIndex = 0;

while (arrIndex < arr1.length) {
    total = total + arr1[arrIndex];
    arrIndex++;
}
console.log("Addition of First 5 Numbers: " + total);
// ============================================================
// Example 10: Same Array Addition Using for Loop
// ============================================================

let arr = [1, 2, 3, 4, 5];

let total1 = 0;
for (let i = 0; i < arr.length; i++) {
    total1 = total1 + arr[i];
}
console.log("Addition of First 5 Numbers: " + total1);

// ============================================================
// Important Points of while Loop
// ============================================================

// 1. Initialization is written before the while loop.

// 2. The condition is checked before every iteration.

// 3. If the condition is true, the loop body executes.

// 4. If the condition is false, the loop exits.

// 5. Increment or decrement must be written manually.

// 6. If the condition never becomes false,
//    an infinite loop can occur.

// 7. while loop is useful when the number of iterations
//    is not known in advance.

// 8. A while loop can be used with:
//    - Numbers
//    - Arrays
//    - Strings
//    - Conditions
//    - Test data

// 9. Array index starts from 0.

// 10. String index starts from 0.


// ============================================================
// while Loop Execution Flow
// ============================================================

/*

Initialization
      ↓
Condition Check
      ↓
   true?
   /   \
 Yes    No
  ↓      ↓
Body    Exit
  ↓
Increment / Decrement
  ↓
Condition Check Again
  ↓
Repeat

*/