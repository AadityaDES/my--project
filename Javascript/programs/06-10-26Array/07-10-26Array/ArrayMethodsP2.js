// ============================================================
// ARRAY METHODS
// ============================================================

// Common Array Methods:
//
// 1. push()
// 2. pop()
// 3. shift()
// 4. unshift()
// 5. splice()


// ============================================================
// 1. push()
// ============================================================

// push() → Adds one or more elements to the END of an array.
//
// Syntax:
//
// array.push(element1, element2, ...);


let queue = ["Test1", "Test2"];

console.log(queue);


// Add one element at the end

queue.push("Test3");

console.log(queue);


// Add multiple elements at the end

queue.push("Test4", "Test5", "Test6");

console.log(queue);


// Output:
//
// ["Test1", "Test2"]
// ["Test1", "Test2", "Test3"]
// ["Test1", "Test2", "Test3", "Test4", "Test5", "Test6"]


// ============================================================
// 2. pop()
// ============================================================

// pop() → Removes the LAST element from an array.
//
// It also RETURNS the removed element.
//
// Syntax:
//
// array.pop();


let removedTest = queue.pop();

console.log("Removed:", removedTest);
console.log("Array:", queue);


// ============================================================
// 3. shift()
// ============================================================

// shift() → Removes the FIRST element from an array.
//
// It also RETURNS the removed element.
//
// Syntax:
//
// array.shift();


let stack = ["Step1", "Step2", "Step3"];

let removedStep = stack.shift();

console.log("Removed:", removedStep);
console.log("Array:", stack);


// Output:
//
// Removed: Step1
// Array: ["Step2", "Step3"]


// ============================================================
// 4. unshift()
// ============================================================

// unshift() → Adds one or more elements to the START
// of an array.
//
// Syntax:
//
// array.unshift(element1, element2, ...);


stack.unshift("Step1");

console.log(stack);


// Add multiple elements at the beginning

stack.unshift("Start", "Login");

console.log(stack);


// ============================================================
// QUICK SUMMARY
// ============================================================

/*

push()
→ Add element at END

pop()
→ Remove element from END

shift()
→ Remove element from START

unshift()
→ Add element at START

                    END
                     ↑
              push() | pop()
                     |
                     |
START  ← unshift() | shift()
                     |
                     ↓
*/


console.log("------------------------------");


// ============================================================
// 5. splice()
// ============================================================

// splice() → Used to ADD, REMOVE, or REPLACE elements
// at any position in an array.
//
// Syntax:
//
// array.splice(startIndex, deleteCount, item1, item2, ...);


// ============================================================
// 5.1 REMOVE ELEMENT USING splice()
// ============================================================

let features = ["Login", "Search", "Cart", "Payment", "Logout"];

// Remove one element from index 2

let removed = features.splice(2, 1);

console.log("Removed:", removed);
console.log("Features:", features);


// Before:
//
// Index 0 → Login
// Index 1 → Search
// Index 2 → Cart
// Index 3 → Payment
// Index 4 → Logout
//
// splice(2, 1)
//
// Start at index 2
// Remove 1 element
//
// Cart is removed.


console.log("-------------------------");


// ============================================================
// 5.2 REMOVE MULTIPLE ELEMENTS
// ============================================================

features = ["Login", "Search", "Cart", "Payment", "Logout"];


// Remove two elements starting from index 2

removed = features.splice(2, 2);

console.log("Removed:", removed);
console.log("Features:", features);


// Removed:
//
// Cart
// Payment


console.log("-------------------------");


// ============================================================
// 5.3 ADD ELEMENTS USING splice()
// ============================================================

features = ["Login", "Search", "Cart", "Payment", "Logout"];


// Add elements at index 2
// deleteCount = 0 means don't remove anything

features.splice(2, 0, "Test1", "Test2");

console.log(features);


// Result:
//
// Login
// Search
// Test1
// Test2
// Cart
// Payment
// Logout


console.log("-------------------------");


// ============================================================
// 5.4 REPLACE ELEMENTS USING splice()
// ============================================================

// Replace two elements starting from index 0
// with one new element

features.splice(0, 2, "SSO Login");

console.log(features);


// Before:
//
// Login
// Search
// Test1
// Test2
// Cart
// Payment
// Logout
//
// splice(0, 2, "SSO Login")
//
// Start at index 0
// Remove 2 elements
// Add "SSO Login"


console.log("-------------------------");


// ============================================================
// 5.5 REMOVE ALL ELEMENTS AFTER A PARTICULAR INDEX
// ============================================================

features.splice(2);

console.log(features);


// splice(2)
//
// Start from index 2
// deleteCount is omitted
// Removes all elements from index 2 to the end.


// ============================================================
// splice() QUICK REFERENCE
// ============================================================

/*

1. REMOVE

array.splice(2, 3);

Start from index 2
Remove 3 elements


2. ADD

array.splice(2, 0, "New");

Start from index 2
Remove 0 elements
Add "New"


3. REPLACE

array.splice(2, 1, "New");

Start from index 2
Remove 1 element
Add "New"


4. REMOVE EVERYTHING AFTER INDEX

array.splice(2);

Start from index 2
Remove all remaining elements

*/


// ============================================================
// IMPORTANT: splice() RETURNS REMOVED ELEMENTS
// ============================================================

let testCases = ["TC01", "TC02", "TC03", "TC04"];

let deletedTests = testCases.splice(1, 2);

console.log("Deleted Tests:", deletedTests);
console.log("Remaining Tests:", testCases);


// Output:
//
// Deleted Tests: ["TC02", "TC03"]
// Remaining Tests: ["TC01", "TC04"]