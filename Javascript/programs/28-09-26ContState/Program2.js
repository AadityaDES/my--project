const process = require("process");
console.log("============Eg1 : Reverse String using for loop==============")

let str = "1234";
let rev = "";

for (let i = str.length - 1; i >= 0; i--) {
process.stdout.write(str[i] + " ");
}

console.log();

console.log("-----------------------------------");

/*
Complete Flow:

| i | Condition       | str[i] | Output |
|---|-----------------|--------|--------|
| 3 | 3 >= 0 -> true  | "4"    | 4      |
| 2 | 2 >= 0 -> true  | "3"    | 3      |
| 1 | 1 >= 0 -> true  | "2"    | 2      |
| 0 | 0 >= 0 -> true  | "1"    | 1      |
| -1| -1 >= 0 -> false| Exit   |        |

Output:
4 3 2 1
*/
console.log("=================Ex 2: Print Numbers from 20 to 1======================")

// Starting Number = 20
// Ending Number = 1
// Decrement = --

let j = 20;

while (j >= 1) {
    console.log(j);
    j--;
}

console.log("----------------------------------");

/*
Complete Flow:

| j  | Condition       | Output | After j-- |
|----|-----------------|--------|-----------|
| 20 | 20 >= 1 -> true | 20     | 19        |
| 19 | 19 >= 1 -> true | 19     | 18        |
| 18 | 18 >= 1 -> true | 18     | 17        |
| ...| ...             | ...    | ...       |
| 2  | 2 >= 1 -> true  | 2      | 1         |
| 1  | 1 >= 1 -> true  | 1      | 0         |
| 0  | 0 >= 1 -> false | Exit   |           |

Output:
20 19 18 17 ... 3 2 1
*/


// ============================================================
// Example 3: Print 50, 45, 40, ... 5
// ============================================================

let num = 50;

while (num >= 5) {
    console.log(num);
    num -= 5;
}

console.log("------------------------------------");

/*
Complete Flow:

| num | Condition       | Output | After num -= 5 |
|-----|-----------------|--------|----------------|
| 50  | 50 >= 5 -> true | 50     | 45             |
| 45  | 45 >= 5 -> true | 45     | 40             |
| 40  | 40 >= 5 -> true | 40     | 35             |
| 35  | 35 >= 5 -> true | 35     | 30             |
| 30  | 30 >= 5 -> true | 30     | 25             |
| 25  | 25 >= 5 -> true | 25     | 20             |
| 20  | 20 >= 5 -> true | 20     | 15             |
| 15  | 15 >= 5 -> true | 15     | 10             |
| 10  | 10 >= 5 -> true | 10     | 5              |
| 5   | 5 >= 5 -> true  | 5      | 0              |
| 0   | 0 >= 5 -> false | Exit   |                |

Output:
50 45 40 35 30 25 20 15 10 5
*/


// ============================================================
// Example 4: Login System - Maximum 3 Attempts
// ============================================================

let maxAttempts = 3;
let attempt = 1;
let loggedIn = false;

let correctPassword = "test12345";

let passwords = [
    "test1234567",
    "wrong2",
    "test12345"
];

while (attempt <= maxAttempts && !loggedIn) {

    console.log(
        `Attempt ${attempt}: Trying password ${passwords[attempt - 1]}`
    );

    if (passwords[attempt - 1] === correctPassword) {

        loggedIn = true;
        console.log("Login Successful!");

    } else {

        console.log("Wrong password");
    }

    attempt++;
}

if (!loggedIn) {
    console.log("Account Locked! Maximum attempts exceeded.");
}


/*
Complete Flow:

Initial Values:

maxAttempts = 3
attempt = 1
loggedIn = false
correctPassword = "test12345"


First Check:

attempt <= maxAttempts && !loggedIn

1 <= 3 && !false
true && true
true

Password:
passwords[1 - 1]
passwords[0]
"test1234567"

"test1234567" === "test12345"
false

Output:
Attempt 1: Trying password test1234567
Wrong password

attempt++ -> 2


Second Check:

2 <= 3 && !false
true && true
true

Password:
passwords[2 - 1]
passwords[1]
"wrong2"

"wrong2" === "test12345"
false

Output:
Attempt 2: Trying password wrong2
Wrong password

attempt++ -> 3


Third Check:

3 <= 3 && !false
true && true
true

Password:
passwords[3 - 1]
passwords[2]
"test12345"

"test12345" === "test12345"
true

loggedIn = true

Output:
Attempt 3: Trying password test12345
Login Successful!

attempt++ -> 4


Final Check:

4 <= 3 && !true
false && false
false

Exit while loop.


Final:

loggedIn = true

if (!loggedIn)

!true -> false

Account Locked message will NOT be printed.
*/


// ============================================================
// Important Points
// ============================================================

// 1. && means BOTH conditions must be true.

// 2. !loggedIn means the opposite of loggedIn.

//    loggedIn = false
//    !loggedIn = true

//    loggedIn = true
//    !loggedIn = false

// 3. passwords[attempt - 1] is used because array indexing
//    starts from 0, while attempt starts from 1.

// 4. Maximum attempts are controlled using:
//    attempt <= maxAttempts

// 5. The login loop stops when:
//    - Maximum attempts are completed, OR
//    - Login becomes successful.

// 6. Once loggedIn becomes true:
//    !loggedIn becomes false,
//    so the while-loop stops.