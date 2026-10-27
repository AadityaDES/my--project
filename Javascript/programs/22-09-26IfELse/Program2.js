// ============================================================
// Nested if - Real-Time Example
// Bank ATM Withdrawal
// ============================================================

// ATM Withdrawal Conditions:
// 1. ATM card must be inserted.
// 2. PIN must be correct.
// 3. Withdrawal amount must be less than or equal to balance.
//
// Each condition is checked only when the previous
// condition is satisfied.

// ============================================================
// Example 1: Incorrect PIN
// ============================================================

let hasCard = true;
let pinCorrect = false;
let balance = 5000;
let withdrawal = 2000;

if (hasCard) {
    // true -> ATM card is detected

    console.log("ATM Card Detected");

    if (pinCorrect) {
        // false -> PIN is incorrect
        // The withdrawal validation will not execute.

        console.log("PIN Verified Successfully");

        if (withdrawal <= balance) {
            let remainingBalance = balance - withdrawal;

            console.log("Dispensing Cash: ₹" + withdrawal);
            console.log("Remaining Balance: ₹" + remainingBalance);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else {
        console.log("Incorrect PIN. Please try again");
    }
}
else {
    console.log("Please insert your ATM card");
}

// Output:
// ATM Card Detected
// Incorrect PIN. Please try again

// ============================================================
// Example 2: Correct PIN and Sufficient Balance
// ============================================================

hasCard = true;
pinCorrect = true;
balance = 5000;
withdrawal = 2000;

if (hasCard) {
    // true -> ATM card is detected

    console.log("ATM Card Detected");

    if (pinCorrect) {
        // true -> PIN is correct

        console.log("PIN Verified Successfully");

        if (withdrawal <= balance) {
            // 2000 <= 5000 -> true

            let remainingBalance = balance - withdrawal;

            console.log("Dispensing Cash: ₹" + withdrawal);
            console.log("Remaining Balance: ₹" + remainingBalance);
        }
        else {
            console.log("Insufficient Balance");
        }
    }
    else {
        console.log("Incorrect PIN. Please try again");
    }
}
else {
    console.log("Please insert your ATM card");
}

// Output:
// ATM Card Detected
// PIN Verified Successfully
// Dispensing Cash: ₹2000
// Remaining Balance: ₹3000

// ============================================================
// Example 3: Correct PIN but Insufficient Balance
// ============================================================

hasCard = true;
pinCorrect = true;
balance = 5000;
withdrawal = 8000;

if (hasCard) {
    console.log("ATM Card Detected");

    if (pinCorrect) {
        console.log("PIN Verified Successfully");

        if (withdrawal <= balance) {
            let remainingBalance = balance - withdrawal;

            console.log("Dispensing Cash: ₹" + withdrawal);
            console.log("Remaining Balance: ₹" + remainingBalance);
        }
        else {
            // 8000 <= 5000 -> false

            console.log("Insufficient Balance");
        }
    }
    else {
        console.log("Incorrect PIN. Please try again");
    }
}
else {
    console.log("Please insert your ATM card");
}

// Output:
// ATM Card Detected
// PIN Verified Successfully
// Insufficient Balance

// ============================================================
// Flow of Nested Conditions
// ============================================================

// ATM Card
//     ↓
// Card Detected?
//     ↓ Yes
// PIN
//     ↓
// PIN Correct?
//     ↓ Yes
// Withdrawal Amount
//     ↓
// Sufficient Balance?
//     ↓ Yes
// Dispense Cash
//     ↓
// Display Remaining Balance

// ============================================================
// Automation Testing Connection
// ============================================================

// This type of nested validation is similar to
// real-world automation scenarios:
//
// Login
//     ↓
// Username/Password Valid?
//     ↓ Yes
// OTP Verified?
//     ↓ Yes
// Login Successful
//
// Payment
//     ↓
// User Logged In?
//     ↓ Yes
// Payment Method Valid?
//     ↓ Yes
// Sufficient Balance?
//     ↓ Yes
// Payment Successful