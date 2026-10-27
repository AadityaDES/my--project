// ============================================================
// 1. Synchronous Execution
// ============================================================

// Synchronous means JavaScript executes statements one by one.
// Each statement executes before the next statement begins.

/*
1. What is synchronous programming ?
    Synchronous programming means JavaScript executes statements one by one, in sequence.
    The next statement executes after the previous statement finishes.
Example: When you perform three calculations, JavaScript completes them in order.

2. What is asynchronous programming ?
Asynchronous programming allows JavaScript to start an operation that takes time and 
continue executing other code while waiting for that operation to complete.

Real - time example: You order a pizza.While the pizza is being prepared, you can watch TV 
instead of waiting at the counter.
*/

console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

/*
Output:

Task 1
Task 2
Task 3
*/


// ============================================================
// 2. Asynchronous Execution Using setTimeout()
// ============================================================

console.log("Task 1: Started");

setTimeout(() => {
    console.log("Task 2: Operation completed");
}, 1000);

console.log("Task 3: Continue execution");

/*
Output:

Task 1: Started
Task 3: Continue execution
Task 2: Operation completed

Explanation:

- setTimeout() schedules Task 2 to execute after approximately
  1 second.
- JavaScript does not wait for the timer to finish.
- It continues to Task 3.
- Task 2 executes later when the timer expires and the event loop
  can run the callback.
*/


// ============================================================
// 3. What Is a Promise?
// ============================================================

/*
A Promise is a JavaScript object that represents the eventual
success or failure of an operation.

A Promise has three states:

1. Pending   - The operation is still in progress.
2. Fulfilled - The operation completed successfully.
3. Rejected  - The operation failed.
*/


// ============================================================
// 4. What Is async?
// ============================================================

/*
The async keyword makes a function return a Promise.

If we return a normal value from an async function,
JavaScript wraps that value in a fulfilled Promise.
*/

async function demo() {
    return "Hello";
}

console.log(demo());

/*
Output:

Promise { 'Hello' }

Note:
The exact way a Promise is displayed depends on the JavaScript
environment. The returned value is "Hello", inside a Promise.
*/


// ============================================================
// 5. Getting the Value from an async Function
// ============================================================

async function demoResult() {
    return "Hello Students";
}

demoResult().then((result) => {
    console.log(result);
});

/*
Output:

Hello Students

Explanation:
- demoResult() returns a Promise.
- then() receives the fulfilled value.
- The value printed is "Hello Students".
*/