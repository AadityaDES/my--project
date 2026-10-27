
console.log("========Exp 5: Find Smallest Element in an Array======")
const prices = [783833, 3230, 11, 424, 4, 29582, 7];
let smallest = prices[0];
for (let i = 1; i < prices.length; i++) {

    // If current element is smaller than smallest,
    // update the smallest value.

    if (prices[i] < smallest) {
        smallest = prices[i];
    }
}
console.log("Smallest Value: " + smallest);
// ============================================================
// Execution Flow - Find Smallest
// ============================================================

/*
Array:
[783833, 3230, 11, 424, 4, 29582, 7]

Step 1:
smallest = prices[0]
smallest = 783833

Step 2:
Loop starts from index 1.

Iteration 1:
i = 1
prices[1] = 3230
3230 < 783833 -> true
smallest = 3230

Iteration 2:
i = 2
prices[2] = 11
11 < 3230 -> true
smallest = 11

Iteration 3:
i = 3
prices[3] = 424
424 < 11 -> false
smallest = 11

Iteration 4:
i = 4
prices[4] = 4
4 < 11 -> true
smallest = 4

Iteration 5:
i = 5
prices[5] = 29582
29582 < 4 -> false
smallest = 4

Iteration 6:
i = 6
prices[6] = 7
7 < 4 -> false
smallest = 4

Final:
Smallest Value = 4
*/


// ============================================================
// Important Points
// ============================================================

// 1. We initialize smallest with the first array element.
// 2. We start the loop from index 1 because index 0 is already
//    stored in smallest.
// 3. Each element is compared with the current smallest value.
// 4. If the current element is smaller, smallest is updated.
// 5. At the end of the loop, smallest contains the minimum value.
// 6. Using prices[0] is better than using 0 because the array
//    can also contain negative numbers.

console.log("=======Exp 6: Count Positive and Negative Numbers======")

const nums = [10, -5, 20, -8, 1, 14, -2];
let pos = 0;
let neg = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
        pos++;
    }
    if (nums[i] < 0) {
        neg++;
    }
}
console.log("Positive Numbers: " + pos);
console.log("Negative Numbers: " + neg);
// ============================================================
// Execution Flow - Positive and Negative
// ============================================================
/*
Array:
[10, -5, 20, -8, 1, 14, -2]

Initial:
pos = 0
neg = 0

Iteration 1:
10 > 0 -> true
pos++ -> 1
10 < 0 -> false
neg = 0

Iteration 2:
-5 > 0 -> false
pos = 1
-5 < 0 -> true
neg++ -> 1

Iteration 3:
20 > 0 -> true
pos++ -> 2
20 < 0 -> false

Iteration 4:
-8 > 0 -> false
-8 < 0 -> true
neg++ -> 2

Iteration 5:
1 > 0 -> true
pos++ -> 3
1 < 0 -> false

Iteration 6:
14 > 0 -> true
pos++ -> 4
14 < 0 -> false

Iteration 7:
-2 > 0 -> false
-2 < 0 -> true
neg++ -> 3

Final:
Positive Numbers = 4
Negative Numbers = 3
*/


// ============================================================
// Important Points
// ============================================================

// 1. pos is used as a counter for positive numbers.
// 2. neg is used as a counter for negative numbers.
// 3. pos++ increases the positive counter by 1.
// 4. neg++ increases the negative counter by 1.
// 5. Every array element is checked.
// 6. Zero is neither positive nor negative.
// 7. Two separate if conditions are used because we are checking
//    two different conditions.


// ============================================================
// Example 7: Find the Sum of Numbers Greater Than 10
// ============================================================

const values = [5, 1, 2, 8, 20, 15, 2, 25];

let sum = 0;

for (let i = 0; i < values.length; i++) {

    if (values[i] > 10) {
        sum = sum + values[i];
    }
}

console.log("Sum: " + sum);


// ============================================================
// Execution Flow - Sum of Numbers Greater Than 10
// ============================================================

/*
Array:
[5, 1, 2, 8, 20, 15, 2, 25]

Initial:
sum = 0

Iteration 1:
5 > 10 -> false
sum = 0

Iteration 2:
1 > 10 -> false
sum = 0

Iteration 3:
2 > 10 -> false
sum = 0

Iteration 4:
8 > 10 -> false
sum = 0

Iteration 5:
20 > 10 -> true
sum = 0 + 20
sum = 20

Iteration 6:
15 > 10 -> true
sum = 20 + 15
sum = 35

Iteration 7:
2 > 10 -> false
sum = 35

Iteration 8:
25 > 10 -> true
sum = 35 + 25
sum = 60

Final:
Sum = 60
*/


// ============================================================
// Important Points
// ============================================================

// 1. sum is called an accumulator.
// 2. We initialize sum with 0.
// 3. Every array element is checked.
// 4. Only numbers greater than 10 are added.
// 5. If the condition is false, the value is ignored.
// 6. sum = sum + values[i] adds the current value to sum.
// 7. After the loop finishes, sum contains the final result.


// ============================================================
// FOR LOOP - GENERAL EXECUTION FLOW
// ============================================================

/*

Step 1: Initialization
        ↓
Step 2: Condition Check
        ↓
   true ──────────────┐
        ↓             │
Step 3: Loop Body     │
        ↓             │
Step 4: Increment     │
        ↓             │
Step 2: Condition Check
        ↓
   false
        ↓
   Exit Loop


Important:

Initialization -> Runs only once.

Condition -> Checked before every iteration.

Loop Body -> Executes only when condition is true.

Increment -> Executes after the loop body.

When condition becomes false -> Loop terminates.
*/


// ============================================================
// IMPORTANT CONCEPTS USED IN THESE PROGRAMS
// ============================================================

// 1. Counter
//    Used to count how many times a condition is satisfied.
//
//    Example:
//    pos++;
//    neg++;

// 2. Accumulator
//    Used to continuously store/update a result.
//
//    Example:
//    sum = sum + values[i];

// 3. Comparison
//    Used to compare values.
//
//    Example:
//    values[i] > 10
//    prices[i] < smallest

// 4. Array Index
//    Array index starts from 0.
//
//    Example:
//    prices[0]
//    prices[1]
//    prices[2]

// 5. Array Length
//    values.length gives the total number of elements.
//
//    Example:
//    values.length = 8