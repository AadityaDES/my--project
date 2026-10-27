// ============================================================
// continue Statement / Keyword
// ============================================================

// The continue statement skips the current iteration
// and immediately moves to the next iteration.

// Unlike break,
// continue DOES NOT terminate the loop.

// break    -> Terminates the complete loop
// continue -> Skips only the current iteration


/*
Syntax:

for (..........) {

    if (condition) {
        continue;
    }

    // Code
}
*/


// ============================================================
// Example 1: Print Only Odd Numbers
// ============================================================

for (let i = 2; i <= 10; i++) {

    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}

console.log("----------------------");

/*
Complete Flow:

| i  | Condition          | Action   | Output |
|----|--------------------|----------|--------|
| 2  | 2 % 2 === 0 -> true  | continue |        |
| 3  | 3 % 2 === 0 -> false | Print    | 3      |
| 4  | 4 % 2 === 0 -> true  | continue |        |
| 5  | 5 % 2 === 0 -> false | Print    | 5      |
| 6  | 6 % 2 === 0 -> true  | continue |        |
| 7  | 7 % 2 === 0 -> false | Print    | 7      |
| 8  | 8 % 2 === 0 -> true  | continue |        |
| 9  | 9 % 2 === 0 -> false | Print    | 9      |
| 10 | 10 % 2 === 0 -> true | continue |        |

Output:
3
5
7
9

The even numbers are skipped.
*/


// ============================================================
// Example 2: Process Only Passed Test Cases
// ============================================================

let result = ["PASS", "PASS", "FAIL", "PASS", "FAIL"];

let passCount = 0;

for (let i = 0; i < result.length; i++) {

    if (result[i] === "FAIL") {
        console.log(`TC ${i + 1}: Skipping Failed Test`);
        continue;
    }

    passCount++;

    console.log(`TC ${i + 1}: Processing Passed Test`);
}

console.log(`Total Passed Test Cases: ${passCount}`);


/*
Complete Flow:

| i | Test Case | Result | Condition          | Action                    |
|---|-----------|--------|--------------------|---------------------------|
| 0 | TC1       | PASS   | PASS === FAIL -> false | Process Passed Test   |
| 1 | TC2       | PASS   | PASS === FAIL -> false | Process Passed Test   |
| 2 | TC3       | FAIL   | FAIL === FAIL -> true  | continue              |
| 3 | TC4       | PASS   | PASS === FAIL -> false | Process Passed Test   |
| 4 | TC5       | FAIL   | FAIL === FAIL -> true  | continue              |

passCount:

TC1 -> 1
TC2 -> 2
TC3 -> skipped
TC4 -> 3
TC5 -> skipped

Final:

Total Passed Test Cases: 3
*/


// ============================================================
// Example 3: Skip Multiples of 3
// ============================================================

for (let i = 1; i <= 30; i++) {

    if (i % 3 === 0) {
        continue;
    }

    console.log(i);
}


/*
Complete Flow:

Multiples of 3 are skipped:

3  -> continue
6  -> continue
9  -> continue
12 -> continue
15 -> continue
18 -> continue
21 -> continue
24 -> continue
27 -> continue
30 -> continue

Output:

1
2
4
5
7
8
10
11
13
14
16
17
19
20
22
23
25
26
28
29
*/


// ============================================================
// Important Points
// ============================================================

// 1. continue skips only the current iteration.

// 2. After continue, the remaining statements in the
//    current iteration are skipped.

// 3. The loop does NOT terminate.

// 4. The next iteration starts.

// 5. break vs continue:
//
//    break    -> Stops the complete loop
//    continue -> Skips current iteration and continues loop

// 6. continue is useful when we want to skip:
//    - Failed test cases
//    - Invalid test data
//    - Specific numbers
//    - Specific records
//    - Unwanted values