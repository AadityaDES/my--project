// ============================================================
// Example 1: Login Role
// ============================================================

// if...else if ladder can be used to provide
// different access levels based on the user's role.

let role = "Admin";

if (role === "Admin") {
    // "Admin" === "Admin" -> true

    console.log("Full Access");
}
else if (role === "Manager") {
    console.log("Manage Team");
}
else if (role === "Employee") {
    console.log("Employee Dashboard");
}
else {
    console.log("Guest User");
}

// Output:
// Full Access

// ============================================================
// Role = Employee
// ============================================================

role = "Employee";

if (role === "Admin") {
    // "Employee" === "Admin" -> false

    console.log("Full Access");
}
else if (role === "Manager") {
    // "Employee" === "Manager" -> false

    console.log("Manage Team");
}
else if (role === "Employee") {
    // "Employee" === "Employee" -> true

    console.log("Employee Dashboard");
}
else {
    console.log("Guest User");
}

// Output:
// Employee Dashboard

// ============================================================
// Role = QA
// ============================================================

role = "QA";

if (role === "Admin") {
    // "QA" === "Admin" -> false

    console.log("Full Access");
}
else if (role === "Manager") {
    // "QA" === "Manager" -> false

    console.log("Manage Team");
}
else if (role === "Employee") {
    // "QA" === "Employee" -> false

    console.log("Employee Dashboard");
}
else {
    // All conditions are false.

    console.log("Guest User");
}

// Output:
// Guest User

// ============================================================
// Example 2: Internet Speed
// ============================================================

let speed = 30;

if (speed >= 100) {
    console.log("Speed: Ultra Fast");
}
else if (speed >= 50) {
    console.log("Speed: Fast");
}
else if (speed >= 20) {
    // 30 >= 20 -> true

    console.log("Speed: Moderate");
}
else {
    console.log("Speed: Very Slow - Check Connection");
}

// Output:
// Speed: Moderate

// ============================================================
// Speed = 20
// ============================================================

speed = 20;

if (speed >= 100) {
    console.log("Speed: Ultra Fast");
}
else if (speed >= 50) {
    console.log("Speed: Fast");
}
else if (speed > 20) {
    // 20 > 20 -> false

    console.log("Speed: Moderate");
}
else {
    console.log("Speed: Very Slow - Check Connection");
}

// Output:
// Speed: Very Slow - Check Connection

// Important:
// >= includes the boundary value.
// > does not include the boundary value.

// 20 >= 20 -> true
// 20 > 20  -> false

// ============================================================
// Example 3: Time of Day Greeting
// ============================================================

// 24-hour format:
// 05:00 - 12:00 -> Morning
// 12:00 - 17:00 -> Afternoon
// 17:00 - 21:00 -> Evening
// Otherwise -> Night

let hour = 18;

if (hour >= 5 && hour < 12) {
    // 18 >= 5 -> true
    // 18 < 12  -> false
    // true && false -> false

    console.log("Good Morning");
}
else if (hour >= 12 && hour < 17) {
    // 18 >= 12 -> true
    // 18 < 17  -> false
    // true && false -> false

    console.log("Good Afternoon");
}
else if (hour >= 17 && hour < 21) {
    // 18 >= 17 -> true
    // 18 < 21  -> true
    // true && true -> true

    console.log("Good Evening");
}
else {
    console.log("Good Night");
}

// Output:
// Good Evening

// ============================================================
// Hour = 11
// ============================================================

hour = 11;

if (hour >= 5 && hour < 12) {
    // 11 >= 5 -> true
    // 11 < 12 -> true
    // true && true -> true

    console.log("Good Morning");
}
else if (hour >= 12 && hour < 17) {
    console.log("Good Afternoon");
}
else if (hour >= 17 && hour < 21) {
    console.log("Good Evening");
}
else {
    console.log("Good Night");
}

// Output:
// Good Morning

// Important:
// Using < for the upper boundary avoids overlapping ranges.

// ============================================================
// Example 4: Shipping Charges
// ============================================================

// Business Rules:
// Premium Member -> Free Shipping
// Order >= ₹1000 -> Free Shipping
// Order >= ₹500  -> ₹99 Shipping
// Otherwise      -> ₹199 Shipping

let orderValue = 1200;
let isPremium = true;

if (isPremium === true) {
    // Premium member -> true

    console.log("Shipping: Free (Premium Member)");
}
else if (orderValue >= 1000) {
    console.log("Shipping: Free (Order above ₹1000)");
}
else if (orderValue >= 500) {
    console.log("Shipping: ₹99 (Standard Shipping)");
}
else {
    console.log("Shipping: ₹199 (Express Shipping)");
}

// Output:
// Shipping: Free (Premium Member)

// ============================================================
// Order Value = ₹200 and Premium = true
// ============================================================

orderValue = 200;
isPremium = true;

if (isPremium === true) {
    // true === true -> true
    // First condition is true.
    // Remaining conditions are skipped.

    console.log("Shipping: Free (Premium Member)");
}
else if (orderValue >= 1000) {
    console.log("Shipping: Free (Order above ₹1000)");
}
else if (orderValue >= 500) {
    console.log("Shipping: ₹99 (Standard Shipping)");
}
else {
    console.log("Shipping: ₹199 (Express Shipping)");
}

// Output:
// Shipping: Free (Premium Member)

// ============================================================
// Automation Testing Examples
// ============================================================

// These concepts are commonly used in automation for:
//
// 1. User Role Validation
// 2. API Status Code Validation
// 3. Browser Selection
// 4. Environment Selection
// 5. Test Data Validation
// 6. Order/Payment Status
// 7. Application Access Control
// 8. Different test execution conditions