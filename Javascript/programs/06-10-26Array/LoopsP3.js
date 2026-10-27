    // ============================================================
// ARRAY ITERATION
// ============================================================

// Iteration means accessing array elements one by one.
//
// Common ways to iterate through an array:
//
// 1. for loop
// 2. while loop
// 3. do...while loop
// 4. for...of loop

// ============================================================
// ARRAY
// ============================================================

let testScenarios = [
    "Login Test",
    "Search Test",
    "Cart Test",
    "Checkout Test",
    "Logout Test"
];


// ============================================================
// 1. FOR LOOP
// ============================================================

// Syntax:
//
// for (initialization; condition; increment/decrement) {
//     // code
// }


// for loop is useful when we need:
// - Index
// - Position of the element
// - Control over the iteration

for (let i = 0; i < testScenarios.length; i++) {

    console.log(`Scenario ${i + 1}: ${testScenarios[i]}`);
}


// Complete Flow:
//
// i = 0 → Scenario 1: Login Test
// i = 1 → Scenario 2: Search Test
// i = 2 → Scenario 3: Cart Test
// i = 3 → Scenario 4: Checkout Test
// i = 4 → Scenario 5: Logout Test
//
// i = 5
// 5 < 5 → false
// Loop stops.


console.log("------------------------------");


// ============================================================
// 2. WHILE LOOP
// ============================================================

// Syntax:
//
// while (condition) {
//     // code
//     // increment/decrement
// }


// In a while loop, the condition is checked first.
// If the condition is true, the loop executes.

let j = 0;

while (j < testScenarios.length) {

    console.log(`Scenario ${j + 1}: ${testScenarios[j]}`);

    j++;
}


// Complete Flow:
//
// j = 0 → Scenario 1: Login Test
// j = 1 → Scenario 2: Search Test
// j = 2 → Scenario 3: Cart Test
// j = 3 → Scenario 4: Checkout Test
// j = 4 → Scenario 5: Logout Test
// j = 5 → Condition false → Loop stops.


console.log("------------------------------");


// ============================================================
// 3. DO...WHILE LOOP
// ============================================================

// Syntax:
//
// do {
//     // code
// } while (condition);
//
// Important:
// do...while executes the code at least once
// because the condition is checked after execution.


let k = 0;

do {

    console.log(`Scenario ${k + 1}: ${testScenarios[k]}`);

    k++;

} while (k < testScenarios.length);


// Complete Flow:
//
// Code executes first
//       ↓
// Condition checked
//       ↓
// If true → execute again
//       ↓
// If false → loop stops


console.log("------------------------------");


// ============================================================
// 4. FOR...OF LOOP
// ============================================================

// Syntax:
//
// for (let variable of arrayName) {
//     // code
// }


// for...of directly gives the VALUE of each array element.
//
// It is useful when we only need the values
// and do not need the index.

for (let test of testScenarios) {

    console.log(`Scenario: ${test}`);
}


// Output:
//
// Scenario: Login Test
// Scenario: Search Test
// Scenario: Cart Test
// Scenario: Checkout Test
// Scenario: Logout Test


// ============================================================
// FOR LOOP vs FOR...OF
// ============================================================

/*

FOR LOOP:

for (let i = 0; i < testScenarios.length; i++) {

    console.log(testScenarios[i]);
}

Here we get:

Index + Value


FOR...OF:

for (let test of testScenarios) {

    console.log(test);
}

Here we get:

Value directly


*/


// ============================================================
// IMPORTANT POINTS
// ============================================================

/*

1. for loop
   - Gives index using i.
   - Useful when index is required.
   - Provides more control.

2. while loop
   - Condition is checked before execution.
   - Useful when the number of iterations is not fixed.

3. do...while loop
   - Executes at least once.
   - Condition is checked after execution.

4. for...of loop
   - Directly gives array values.
   - No need to use array[index].
   - Very useful for arrays when index is not required.

*/