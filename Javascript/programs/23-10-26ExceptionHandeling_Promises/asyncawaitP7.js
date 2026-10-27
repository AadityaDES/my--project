// ============================================================
// Example 1: async and await with a normal value
// ============================================================

function orderPizza() {
    return "Pizza";
}

async function getPizza() {

    console.log("Ordering pizza");

    let result = await orderPizza();

    console.log(result);
    console.log("Eat pizza");
}

getPizza();

/*
Output:

Ordering pizza
Pizza
Eat pizza
*/

/*
Explanation:
1. getPizza() starts executing.
2. "Ordering pizza" is printed.
3. orderPizza() returns the string "Pizza".
4. await receives that value. Since it is not a Promise, there is no asynchronous waiting.
5. "Pizza" and "Eat pizza" are printed.
*/


// ============================================================
// Example 2: async and await with a Promise
// ============================================================

function orderPizza() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve("Pizza is ready");
        }, 2000);

    });
}

async function getPizza() {

    console.log("Ordering pizza");

    let result = await orderPizza();

    console.log(result);
    console.log("Eat pizza");
}

getPizza();

/*
Output:

Ordering pizza
(wait approximately 2 seconds)
Pizza is ready
Eat pizza
*/

/*
getPizza() starts, and "Ordering pizza" is printed immediately.
orderPizza() returns a Promise. The pizza is not ready yet.
await pauses the execution of getPizza() while the Promise is pending.
After approximately two seconds, resolve("Pizza is ready") fulfills the Promise.
The result is stored in result, and the program prints "Pizza is ready" followed by "Eat pizza".
*/


/*
JavaScript Theory: Promise, Async and Await
1. What is synchronous programming?
Synchronous programming means JavaScript executes statements one by one, in sequence. The next statement executes after the previous statement finishes.

Example: When you perform three calculations, JavaScript completes them in order.
2. What is asynchronous programming?
Asynchronous programming allows JavaScript to start an operation that takes time and continue executing other code while waiting for that operation to complete.

Real-time example: You order a pizza. While the pizza is being prepared, you can watch TV instead of waiting at the counter.

Examples of operations that may be asynchronous include timers, network requests, and reading files.
3. What is a Promise?
A Promise is a JavaScript object that represents the eventual result of an operation that may complete successfully or fail.

For example, when you order a pizza, the order may still be in progress, may succeed, or may fail.
States of a Promise
1. Pending: The operation has not completed yet.
2. Fulfilled: The operation completed successfully.
3. Rejected: The operation failed.
Important Promise methods
Method	Purpose
resolve()	Fulfills a Promise with a result.
reject()	Rejects a Promise with a reason.
.then()	Handles a fulfilled Promise.
.catch()	Handles a rejected Promise.
.finally()	Executes after the Promise settles, whether fulfilled or rejected.

4. What is async?
The async keyword is used before a function declaration to make the function return a Promise.

Important points:
- An async function always returns a Promise.
- If the function returns a normal value, JavaScript fulfills the returned Promise with that value.
- If an error is thrown inside the function, its returned Promise is rejected.
Example:
async function greet() {
    return "Hello Students";
}


Here, "Hello Students" is returned through a fulfilled Promise.
5. What is await?
The await keyword is used to wait for a Promise to settle and obtain its fulfilled value.

Important points:
- await is commonly used inside an async function. It can also be used at the top level of JavaScript modules.
- When the Promise is pending, await suspends the current async function.
- When the Promise is fulfilled, execution continues with the fulfilled value.
- If the Promise is rejected, await throws the rejection reason, which can be handled using try...catch.
- await does not block the entire JavaScript program.
6. Difference between Promise, async and await
Concept	Meaning
Promise	Represents the eventual result of an operation.
async	Makes a function return a Promise.
await	Waits for a Promise's result within the current async function.

These concepts work together to make asynchronous JavaScript easier to understand and write.
7. How do they work together?
Consider the pizza-ordering example:
- Promise: Represents the pizza order that is still being prepared.
- async: Marks the function that handles the ordering process.
- await: Waits for the pizza-order Promise to fulfill before continuing to the next step.

The sequence is:
Start ordering pizza
Promise is pending
Pizza is being prepared
await waits for the result
Pizza is ready
The next statement executes


8. Why should students learn these concepts before Playwright?
Playwright uses asynchronous operations for many browser actions. 
For example, navigating to a website takes time.

When u understand Promises and await, then u understand why code is written like this:
await page.goto("https://example.com");


The page.goto() operation returns a Promise, and await waits for the navigation operation to fulfill before the next statement executes.

Final revision:
- A Promise represents a future result.
- async makes a function return a Promise.
- await waits for the Promise's result.
- Together, they help us write asynchronous code in a clear, readable way.

*/