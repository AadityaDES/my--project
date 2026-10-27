// ============================================================
// Example 1: Sum of Numbers
// ============================================================

// 1 + 2 + 3 + 4 + 5 = 15

let total = 0;

for (let i = 1; i <= 5; i++) {

    // Iteration 1:
    // i = 1
    // 1 <= 5 -> true
    // total = 0 + 1
    // total = 1

    // Iteration 2:
    // i = 2
    // 2 <= 5 -> true
    // total = 1 + 2
    // total = 3

    // Iteration 3:
    // i = 3
    // 3 <= 5 -> true
    // total = 3 + 3
    // total = 6

    // Iteration 4:
    // i = 4
    // 4 <= 5 -> true
    // total = 6 + 4
    // total = 10

    // Iteration 5:
    // i = 5
    // 5 <= 5 -> true
    // total = 10 + 5
    // total = 15

    total = total + i;
}

console.log("First 5 numbers addition is : " + total);


// ============================================================
// Complete Iteration Table - Sum
// ============================================================

/*

Iteration | i | Condition | total Before | Calculation | total After
--------------------------------------------------------------------
    1     | 1 | 1 <= 5 T  |      0       |   0 + 1     |     1
    2     | 2 | 2 <= 5 T  |      1       |   1 + 2     |     3
    3     | 3 | 3 <= 5 T  |      3       |   3 + 3     |     6
    4     | 4 | 4 <= 5 T  |      6       |   6 + 4     |    10
    5     | 5 | 5 <= 5 T  |     10       |  10 + 5     |    15
    6     | 6 | 6 <= 5 F  |     15       | Loop Exit   |    15

*/
console.log("===================Exp2 Factorial===================")
// Factorial of 5:
// 5 * 4 * 3 * 2 * 1 = 120

// We can also calculate it as:
// 1 * 2 * 3 * 4 * 5 = 120

let n = 5;
let factorial = 1;

for (let i = 1; i <= n; i++) {

    factorial = factorial * i;

    // Iteration 1:
    // i = 1
    // factorial = 1 * 1
    // factorial = 1

    // Iteration 2:
    // i = 2
    // factorial = 1 * 2
    // factorial = 2

    // Iteration 3:
    // i = 3
    // factorial = 2 * 3
    // factorial = 6

    // Iteration 4:
    // i = 4
    // factorial = 6 * 4
    // factorial = 24

    // Iteration 5:
    // i = 5
    // factorial = 24 * 5
    // factorial = 120
}

console.log(`Factorial of ${n} is ${factorial}`);


// ============================================================
// Complete Iteration Table - Factorial
// ============================================================

/*

Iteration | i | Condition | factorial Before | Calculation | factorial After
----------------------------------------------------------------------------
    1     | 1 | 1 <= 5 T  |        1         |   1 * 1     |       1
    2     | 2 | 2 <= 5 T  |        1         |   1 * 2     |       2
    3     | 3 | 3 <= 5 T  |        2         |   2 * 3     |       6
    4     | 4 | 4 <= 5 T  |        6         |   6 * 4     |      24
    5     | 5 | 5 <= 5 T  |       24         |  24 * 5     |     120
    6     | 6 | 6 <= 5 F  |      120         | Loop Exit   |     120

*/


console.log("=========Exp-6 factorial 16==========")
n = 16;
factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial = factorial * i;
}

console.log(`Factorial of ${n} is ${factorial}`);

console.log("=======Example 4: Factorial of 20 using BigInt==========")
// 20! = 2,432,902,008,176,640,000

let number = 20n;
let result = 1n;

for (let i = 1n; i <= number; i++) {
    result = result * i;
}

console.log(`Factorial of ${number} is ${result}`);
console.log("=====Exp 5: Find Largest Element in an Array=========")
const prices = [783833, 3230, 424, 29582, 7];

let largest = prices[0];

for (let i = 1; i < prices.length; i++) {

    // If current element is greater than largest,
    // update the largest value.

    if (prices[i] > largest) {
        largest = prices[i];
    }
}

console.log("Largest Number:", largest);


// ============================================================
// Complete Iteration - Largest Number
// ============================================================

/*

Array:
[783833, 3230, 424, 29582, 7]

Initial:
largest = prices[0]
largest = 783833


Iteration 1:
i = 1
prices[1] = 3230

3230 > 783833 -> false

largest = 783833


Iteration 2:
i = 2
prices[2] = 424

424 > 783833 -> false

largest = 783833


Iteration 3:
i = 3
prices[3] = 29582

29582 > 783833 -> false

largest = 783833


Iteration 4:
i = 4
prices[4] = 7

7 > 783833 -> false

largest = 783833


Iteration 5:
i = 5

5 < prices.length
5 < 5 -> false

Loop exits.


Final Answer:
Largest Number = 783833

*/


// ============================================================
// Complete Iteration Table - Largest Number
// ============================================================

/*

Iteration | i | Current Value | largest Before | Condition          | largest After
----------------------------------------------------------------------------------
    1     | 1 |     3230      |     783833     | 3230 > 783833 F   |    783833
    2     | 2 |      424      |     783833     | 424 > 783833 F    |    783833
    3     | 3 |     29582     |     783833     | 29582 > 783833 F  |    783833
    4     | 4 |       7       |     783833     | 7 > 783833 F      |    783833
    5     | 5 |       -       |     783833     | 5 < 5 -> false    |    Exit

*/


// ============================================================
// Important Point
// ============================================================

// Instead of:
// let largest = 0;
//
// Better approach:
// let largest = prices[0];
//
// Why?
// Because the array may contain negative numbers.
//
// Example:
// const numbers = [-50, -20, -100, -10];
//
// If we use:
// let largest = 0;
//
// We may incorrectly get 0.
//
// Correct approach:
// let largest = numbers[0];