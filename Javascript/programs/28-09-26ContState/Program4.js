// ============================================================
// break Statement / Keyword
// ============================================================

// The break statement immediately terminates the current
// loop or switch statement.

// Once break executes, the loop stops completely,
// and control moves to the next statement after the loop.


/*
Syntax:

for (..........) {

    if (condition) {
        break;
    }
}
*/


// ============================================================
// Example 1: Print Numbers from 1 to 10
// Stop when Number Becomes 5
// ============================================================

for (let i = 1; i <= 10; i++) {

    console.log(i);

    if (i === 5) {
        console.log(`Found ${i}! Breaking Loop`);
        break;
    }
}

console.log("Loop completed");


// :: contentReference[oaicite: 0]{ index = 0 }


/*
Complete Flow:

| i | Condition       | Output | if (i === 5) | Action       |
|---|-----------------|--------|--------------|--------------|
| 1 | 1 <= 10 -> true | 1      | false        | Continue     |
| 2 | 2 <= 10 -> true | 2      | false        | Continue     |
| 3 | 3 <= 10 -> true | 3      | false        | Continue     |
| 4 | 4 <= 10 -> true | 4      | false        | Continue     |
| 5 | 5 <= 10 -> true | 5      | true         | break        |

After break:
Control moves outside the loop.

Output:

1
2
3
4
5
Found 5! Breaking Loop
Loop completed
*/


// ============================================================
// Example 2: Find the First Failed Test Case
// ============================================================

let result = ["PASS", "PASS", "FAIL", "PASS", "FAIL"];

for (let i = 0; i < result.length; i++) {

    console.log(`TC${i + 1}: ${result[i]}`);

    if (result[i] === "FAIL") {
        console.log(`First Failure found at TC${i + 1}`);
        break;
    }
}

console.log("---------------------------------------");

/*
Complete Flow:

| i | Test Case | Result | Condition           | Action   |
|---|-----------|--------|---------------------|----------|
| 0 | TC1       | PASS   | PASS === FAIL -> false | Continue |
| 1 | TC2       | PASS   | PASS === FAIL -> false | Continue |
| 2 | TC3       | FAIL   | FAIL === FAIL -> true  | break    |

Output:

TC1: PASS
TC2: PASS
TC3: FAIL
First Failure found at TC3

TC4 and TC5 are not executed
because break terminates the loop.
*/


// ============================================================
// Example 3: while(true) with break
// ============================================================

let score = 0;
let round = 0;

while (true) {

    round++;
    score += 5;

    console.log(`Round ${round}: score = ${score}`);

    if (score >= 100) {
        console.log("Target score Reached");
        break;
    }
}


/*
Complete Flow:

while (true)

The condition is always true,
so normally this would create an infinite loop.

The break statement provides the exit condition.

When:

score >= 100 -> true

break executes.

Control moves outside the while loop.

Final:

score = 100
round = 20

Output ends with:

Round 20: score = 100
Target score Reached
*/


// ============================================================
// Important Points
// ============================================================

// 1. break immediately terminates the loop.

// 2. After break, control moves to the statement
//    immediately after the loop.

// 3. break can be used with:
//    - for loop
//    - while loop
//    - do...while loop
//    - switch statement

// 4. break is useful when:
//    - Required value is found
//    - First failure is found
//    - Login is successful
//    - Target condition is reached
//    - Search operation is completed

// 5. break stops the complete loop.
//    It does NOT move to the next iteration.