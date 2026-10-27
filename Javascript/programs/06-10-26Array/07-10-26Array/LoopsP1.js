// ============================================================
// ARRAY LOOPS
// ============================================================

// Common loops:
//
// 1. for loop
// 2. while loop
// 3. do...while loop
// 4. for...of loop
// 5. for...in loop


// ============================================================
// FOR...OF LOOP
// ============================================================

// for...of → When you need the VALUE of an array element.
//
// Syntax:
//
// for (let variable of arrayName) {
//     // code
// }


// ============================================================
// 1. BASIC FOR...OF EXAMPLE
// ============================================================

let marks = [80, 90, 56, 99, 100, 105];

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);

console.log("-----------------------");


// for...of directly gives the value

for (let mark of marks) {

    console.log(mark);
}


// Complete Flow:
//
// mark = 80
// mark = 90
// mark = 56
// mark = 99
// mark = 100
// mark = 105


// ============================================================
// 2. CALCULATE TOTAL USING FOR...OF
// ============================================================

marks = [80, 90, 56, 99, 100, 105];

let total = 0;

for (let mark of marks) {

    total = total + mark;
}

console.log("Total:", total);


// Complete Flow:
//
// total = 0
//
// mark = 80  → total = 0 + 80   → 80
// mark = 90  → total = 80 + 90  → 170
// mark = 56  → total = 170 + 56 → 226
// mark = 99  → total = 226 + 99 → 325
// mark = 100 → total = 325 + 100 → 425
// mark = 105 → total = 425 + 105 → 530
//
// Final total = 530


console.log("-----------------------");


// ============================================================
// 3. FIND ODD NUMBERS USING FOR...OF
// ============================================================

let numbers = [10, 15, 20, 25, 30];

for (let number of numbers) {

    if (number % 2 !== 0) {

        console.log(number);
    }
}


// Output:
//
// 15
// 25


console.log("=======================================");


// ============================================================
// FOR...IN LOOP
// ============================================================

// for...in → When you need the INDEX of an array.
//
// Syntax:
//
// for (let index in arrayName) {
//     // code
// }


// ============================================================
// 4. PRINT ARRAY INDEX USING FOR...IN
// ============================================================

let browsers = ["Chrome", "Firefox", "Edge", "Safari", "IE"];

for (let index in browsers) {
    console.log(index);
}


// Output:
//
// 0
// 1
// 2
// 3
// 4


console.log("--------------------");


// ============================================================
// 5. PRINT INDEX AND VALUE USING FOR...IN
// ============================================================

browsers = ["Chrome", "Firefox", "Edge", "Safari", "IE"];

for (let index in browsers) {

    console.log(`Index - ${index}: ${browsers[index]}`);
}


// Output:
//
// Index - 0: Chrome
// Index - 1: Firefox
// Index - 2: Edge
// Index - 3: Safari
// Index - 4: IE


console.log("--------------------");


// ============================================================
// 6. FIND ARRAY VALUES GREATER THAN 50
// ============================================================

marks = [45, 75, 60, 35, 90, 50];

for (let index in marks) {

    if (marks[index] >= 50) {

        console.log(marks[index]);
    }
}


// Output:
//
// 75
// 60
// 90
// 50


// ============================================================
// FOR...OF vs FOR...IN
// ============================================================

/*

FOR...OF
---------

Used when you need the VALUE.

Example:

let browsers = ["Chrome", "Firefox", "Edge"];

for (let browser of browsers) {

    console.log(browser);
}

Output:

Chrome
Firefox
Edge


FOR...IN
--------

Used when you need the INDEX.

Example:

let browsers = ["Chrome", "Firefox", "Edge"];

for (let index in browsers) {

    console.log(index);
}

Output:

0
1
2

*/


// ============================================================
// EASY WAY TO REMEMBER
// ============================================================

/*

for...of
   ↓
VALUE

for...in
   ↓
INDEX / KEY


Example:

let browsers = ["Chrome", "Firefox", "Edge"];

for (let browser of browsers) {
    console.log(browser);
}

→ Chrome
→ Firefox
→ Edge


for (let index in browsers) {
    console.log(index);
}

→ 0
→ 1
→ 2

*/


// ============================================================
// IMPORTANT NOTE
// ============================================================

/*

For Arrays:

for...of → values
for...in → indexes


For Objects:

for...in → keys/properties

Example:

let user = {
    name: "Rahul",
    role: "QA",
    experience: 5
};

for (let key in user) {

    console.log(key);
}

Output:

name
role
experience

*/