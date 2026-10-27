// ============================================================
// Nested if - Real-Time Examples
// ============================================================

// ============================================================
// Example 1: Student Exam Eligibility
// ============================================================

// Conditions:
// 1. Attendance must be 75% or above.
// 2. Fees must be paid.
//
// The fees condition is checked only when the
// attendance requirement is satisfied.

let attendance = 80;
let feesPaid = true;

if (attendance >= 75) {
    // 80 >= 75 -> true

    console.log("Attendance requirement met");

    if (feesPaid) {
        // true -> fees are paid

        console.log("Eligible for Examination");
    }
    else {
        console.log("Please pay pending fees");
    }
}
else {
    console.log("Attendance is below 75%");
}

// Output:
// Attendance requirement met
// Eligible for Examination

console.log("--".repeat(50));

// ============================================================
// Example 2: Attendance Below Requirement
// ============================================================

attendance = 70;
feesPaid = true;

if (attendance >= 75) {
    // 70 >= 75 -> false
    // Inner if will not execute.

    console.log("Attendance requirement met");

    if (feesPaid) {
        console.log("Eligible for Examination");
    }
    else {
        console.log("Please pay pending fees");
    }
}
else {
    console.log("Attendance is below 75%");
}

// Output:
// Attendance is below 75%

// ============================================================
// Example 3: Employee Bonus Eligibility
// ============================================================

// Conditions:
// 1. Employee must have at least 5 years of experience.
// 2. Performance rating must be 4.5 or above.
//
// The performance rating is checked only when
// the experience requirement is satisfied.

let experience = 6;
let performanceRating = 4.5;

if (experience >= 5) {
    // 6 >= 5 -> true

    console.log("Experience criteria met");

    if (performanceRating >= 4.5) {
        // 4.5 >= 4.5 -> true

        console.log("Eligible for Bonus");
    }
    else {
        console.log("Performance rating is too low");
    }
}
else {
    console.log("Minimum 5 years of experience required");
}

// Output:
// Experience criteria met
// Eligible for Bonus

// ============================================================
// Example 4: Employee Experience Below Requirement
// ============================================================

experience = 3;
performanceRating = 4.5;

if (experience >= 5) {
    // 3 >= 5 -> false
    // Inner if will not execute.

    console.log("Experience criteria met");

    if (performanceRating >= 4.5) {
        console.log("Eligible for Bonus");
    }
    else {
        console.log("Performance rating is too low");
    }
}
else {
    console.log("Minimum 5 years of experience required");
}

// Output:
// Minimum 5 years of experience required

// ============================================================
// Automation Testing Examples
// ============================================================

// Nested if is useful when one validation depends
// on another validation.

// Examples:
//
// Login:
//     Check username/password
//         ↓
//     Check OTP
//             ↓
//     Login successful
//
// Exam:
//     Check attendance
//         ↓
//     Check fees
//             ↓
//     Exam eligibility
//
// Employee:
//     Check experience
//         ↓
//     Check performance
//             ↓
//     Bonus eligibility
//
// Application:
//     Check user is logged in
//         ↓
//     Check user role
//             ↓
//     Check access permission