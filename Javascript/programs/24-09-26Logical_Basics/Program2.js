console.log("===============Example 1: Print Numbers from 1 to 10============")
/*
Syntax:
for (initialization; condition; increment/decrement) {
    // Code
}
Starting Number = 1
Ending Number = 10
*/
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
console.log("================Example 2: Print Numbers from 10 to 1=============")
// Starting Number = 10
// Ending Number = 1
// Decrement = i--

console.log("--------------------");
const process = require("process");
for (let i = 3; i >= 1; i--) {
    // console.log(i); -> Adds a new line automatically
    process.stdout.write(i + " "); // Does not add a new line automatically
}
console.log();
/*
Complete Iteration:
Iteration | i | Condition | Output | After i--
------------------------------------------------
1st       | 3 | 3 >= 1    |   3    |    2
2nd       | 2 | 2 >= 1    |   2    |    1
3rd       | 1 | 1 >= 1    |   1    |    0
4th       | 0 | 0 >= 1    | Exit   |    -
Output:
3 2 1
*/
console.log("====================Example 3: Countdown Timer==============")
/*
Expected Output:
5 Seconds Remaining
4 Seconds Remaining
3 Seconds Remaining
2 Seconds Remaining
1 Seconds Remaining
Time's up
*/
console.log("--------------------");
for (let i = 5; i >= 1; i--) {
    console.log(`${i} Seconds Remaining`);
}
console.log("Time's up");

 console.log("Example 4: Reverse a String Using for Loop")

let str = "Play";

// String:
// Index:  0  1  2  3
//        ----------------
// String: P  l  a  y
//
// str.length = 4
// Last index = str.length - 1
// Last index = 4 - 1
// Last index = 3

let rev = "";

console.log("String Length:", str.length);

for (let i = str.length - 1; i >= 0; i--) {

    // First iteration:
    // i = 3
    // str[3] = "y"
    // rev = "" + "y"
    // rev = "y"

    // Second iteration:
    // i = 2
    // str[2] = "a"
    // rev = "y" + "a"
    // rev = "ya"

    // Third iteration:
    // i = 1
    // str[1] = "l"
    // rev = "ya" + "l"
    // rev = "yal"

    // Fourth iteration:
    // i = 0
    // str[0] = "P"
    // rev = "yal" + "P"
    // rev = "yalP"

    rev = rev + str[i];
}
console.log("Original String: " + str);
console.log("Reversed String: " + rev);
// ============================================================
// Complete Iteration - Reverse String
// ============================================================

/*

String = "Play"

Iteration 1:
i = 3
str[3] = "y"
rev = "" + "y"
rev = "y"

Iteration 2:
i = 2
str[2] = "a"
rev = "y" + "a"
rev = "ya"

Iteration 3:
i = 1
str[1] = "l"
rev = "ya" + "l"
rev = "yal"

Iteration 4:
i = 0
str[0] = "P"
rev = "yal" + "P"
rev = "yalP"

Final:
Original String = Play
Reversed String = yalP
*/


// ============================================================
// Important Points
// ============================================================

// 1. A for loop can run in increasing or decreasing order.

// Increasing:
// for (let i = 1; i <= 10; i++)

// Decreasing:
// for (let i = 10; i >= 1; i--)

// 2. process.stdout.write() prints on the same line.
// 3. console.log() automatically moves to the next line.
// 4. console.log() can be used after process.stdout.write()
//    to move to the next line.

// 5. String index starts from 0.

// Example:
// "Play"
// P -> index 0
// l -> index 1
// a -> index 2
// y -> index 3

// 6. Last index of a string:
// str.length - 1

// 7. To reverse a string, start the loop from the last index
//    and move towards index 0.

// 8. rev = rev + str[i] adds each character to the result string.


// ============================================================
// General Execution Flow - Decreasing for Loop
// ============================================================

/*

Initialization
     ↓
Condition Check
     ↓
   true
     ↓
Execute Loop Body
     ↓
Decrement (i--)
     ↓
Condition Check Again
     ↓
   false
     ↓
Exit Loop

Example:

i = 3
3 >= 1 -> true -> Print 3 -> i-- -> 2

i = 2
2 >= 1 -> true -> Print 2 -> i-- -> 1

i = 1
1 >= 1 -> true -> Print 1 -> i-- -> 0

i = 0
0 >= 1 -> false -> Exit Loop
*/