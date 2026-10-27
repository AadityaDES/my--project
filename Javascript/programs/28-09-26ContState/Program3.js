// ============================================================
// Types of Loops
// ============================================================

// 1. for loop
// 2. while loop
// 3. do...while loop


// ============================================================
// do...while Loop
// ============================================================

// A do...while loop executes the code block first
// and then checks the condition.

// The do...while loop always executes at least one time,
// even if the condition is false.


/*
Syntax:

do {
    // Code
    // Increment / Decrement
}
while (condition);


Execution Flow:

Step 1 - Execute the loop body
Step 2 - Increment / Decrement
Step 3 - Check the condition

If condition is true:
    Execute the loop again.

If condition is false:
    Exit the loop.
*/


// ============================================================
// Example 1: Condition is False
// ============================================================

let j = 10;

do {
    console.log(j);
    j++;
}
while (j <= 5);


/*
Complete Flow:

| j Before | Action          | j After | Condition       |
|----------|-----------------|---------|-----------------|
| 10       | Print 10        | 11      | 11 <= 5 -> false|

Output:
10

Important:
Even though the condition is false,
the code executes once because do...while
checks the condition AFTER executing the loop body.
*/


// ============================================================
// Example 2: Print Numbers from 5 to 10
// ============================================================

let i = 5;

do {
    console.log(i);
    i++;
}
while (i <= 10);

console.log("-----------------------------------");

/*
Complete Flow:

| i Before | Action       | i After | Condition        |
|----------|--------------|---------|------------------|
| 5        | Print 5      | 6       | 6 <= 10 -> true  |
| 6        | Print 6      | 7       | 7 <= 10 -> true  |
| 7        | Print 7      | 8       | 8 <= 10 -> true  |
| 8        | Print 8      | 9       | 9 <= 10 -> true  |
| 9        | Print 9      | 10      | 10 <= 10 -> true |
| 10       | Print 10     | 11      | 11 <= 10 -> false|

Output:
5
6
7
8
9
10
*/


// ============================================================
// Example 3: Countdown
// ============================================================

let count = 5;

do {
    console.log(`${count} Seconds Remaining...`);
    count--;
}
while (count >= 1);

console.log("Time's up!!");


/*
Complete Flow:

| count Before | Action                    | count After | Condition        |
|--------------|---------------------------|-------------|------------------|
| 5            | Print 5 Seconds Remaining | 4           | 4 >= 1 -> true   |
| 4            | Print 4 Seconds Remaining | 3           | 3 >= 1 -> true   |
| 3            | Print 3 Seconds Remaining | 2           | 2 >= 1 -> true   |
| 2            | Print 2 Seconds Remaining | 1           | 1 >= 1 -> true   |
| 1            | Print 1 Seconds Remaining | 0           | 0 >= 1 -> false  |

Output:

5 Seconds Remaining...
4 Seconds Remaining...
3 Seconds Remaining...
2 Seconds Remaining...
1 Seconds Remaining...
Time's up!!
*/


// ============================================================
// Important Points
// ============================================================

// 1. do...while executes the loop body first.

// 2. The condition is checked after the loop body.

// 3. A do...while loop executes at least once.

// 4. Even if the condition is false initially,
//    the loop body executes once.

// 5. Increment / decrement is normally placed inside
//    the loop body.

// 6. The semicolon after while(condition) is mandatory.

// Example:
// do {
//     console.log("Hello");
// }
// while (condition);


// ============================================================
// Other Loop Concepts
// ============================================================

// for...of  -> Used to get values from iterable objects
//              such as arrays and strings.

// for...in  -> Used to get keys/indexes.

// forEach() -> Array method used to execute a function
//              for each array element.

// break     -> Immediately exits the loop.

// continue  -> Skips the current loop execution
//              and moves to the next iteration.