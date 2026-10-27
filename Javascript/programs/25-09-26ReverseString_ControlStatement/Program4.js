// ============================================================
// Example 1: Reverse a String Using while Loop
// ============================================================

let word = "Java";
let rev = "";

let lastIndex = word.length - 1;

while (lastIndex >= 0) {
    rev = rev + word[lastIndex];
    lastIndex--;
}

console.log("Original String: " + word);
console.log("Reverse String: " + rev);


/*
Complete Flow:

| lastIndex | Condition       | word[lastIndex] | rev Before | rev After | lastIndex-- |
|-----------|-----------------|-----------------|------------|-----------|-------------|
| 3         | 3 >= 0 -> true  | "a"             | ""         | "a"       | 2           |
| 2         | 2 >= 0 -> true  | "v"             | "a"        | "av"      | 1           |
| 1         | 1 >= 0 -> true  | "a"             | "av"       | "ava"     | 0           |
| 0         | 0 >= 0 -> true  | "J"             | "ava"      | "avaJ"    | -1          |
| -1        | -1 >= 0 -> false| Exit            |            |           |             |

Final Output:
Original String: Java
Reverse String: avaJ
*/


// ============================================================
// Example 2: Sum of Numbers from 1 to 5
// ============================================================

let number = 1;
let sum = 0;

while (number <= 5) {
    sum = sum + number;
    number++;
}

console.log("Sum of Numbers: " + sum);


/*
Complete Flow:

| number | Condition       | sum Before | Calculation | sum After | number++ |
|--------|-----------------|------------|-------------|-----------|----------|
| 1      | 1 <= 5 -> true  | 0          | 0 + 1       | 1         | 2        |
| 2      | 2 <= 5 -> true  | 1          | 1 + 2       | 3         | 3        |
| 3      | 3 <= 5 -> true  | 3          | 3 + 3       | 6         | 4        |
| 4      | 4 <= 5 -> true  | 6          | 6 + 4       | 10        | 5        |
| 5      | 5 <= 5 -> true  | 10         | 10 + 5      | 15        | 6        |
| 6      | 6 <= 5 -> false |            | Exit        |           |          |

Final Sum = 15
*/


// ============================================================
// Example 3: Factorial of a Number
// ============================================================

// 5! = 5 × 4 × 3 × 2 × 1 = 120

let n = 5;
let fact = 1;
let count = 1;

while (count <= n) {
    fact = fact * count;
    count++;
}

console.log("Factorial of " + n + ": " + fact);


/*
Complete Flow:

| count | Condition       | fact Before | Calculation | fact After | count++ |
|-------|-----------------|-------------|-------------|------------|---------|
| 1     | 1 <= 5 -> true  | 1           | 1 * 1       | 1          | 2       |
| 2     | 2 <= 5 -> true  | 1           | 1 * 2       | 2          | 3       |
| 3     | 3 <= 5 -> true  | 2           | 2 * 3       | 6          | 4       |
| 4     | 4 <= 5 -> true  | 6           | 6 * 4       | 24         | 5       |
| 5     | 5 <= 5 -> true  | 24          | 24 * 5      | 120        | 6       |
| 6     | 6 <= 5 -> false |             | Exit        |            |         |

Final Factorial = 120
*/


// ============================================================
// Example 4: Sum of Digits of a Number
// ============================================================

// Number = 123
// 1 + 2 + 3 = 6

let number1 = 123;
let digitSum = 0;
let temp = number1;

while (temp > 0) {
    let digit = temp % 10;
    digitSum = digitSum + digit;
    temp = Math.floor(temp / 10);
}

console.log(`Sum of digits of ${number1} is ${digitSum}`);


/*
Complete Flow:

| temp | Condition       | digit = temp % 10 | digitSum Before | Calculation | digitSum After | temp After |
|------|-----------------|-------------------|-----------------|-------------|----------------|------------|
| 123  | 123 > 0 -> true | 3                 | 0               | 0 + 3       | 3              | 12         |
| 12   | 12 > 0 -> true  | 2                 | 3               | 3 + 2       | 5              | 1          |
| 1    | 1 > 0 -> true   | 1                 | 5               | 5 + 1       | 6              | 0          |
| 0    | 0 > 0 -> false  | Exit              |                 |             |                |            |

Final Digit Sum = 6
*/