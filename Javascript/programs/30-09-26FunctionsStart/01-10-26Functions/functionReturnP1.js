// ============================================================
// RETURN VALUE
// ============================================================

// In JavaScript, the return statement is used to send a value
// back from a function to the place where the function was called.
//
// A function can return:
// 1. String
// 2. Number
// 3. Boolean
// 4. Array
// 5. Object
// 6. Another Function
//
// JavaScript does not require us to explicitly declare the
// return type of a function.


// ============================================================
// 1. Return a String
// ============================================================

function functionName() {

    console.log("Hi Good Morning");

    return "Hi Good Evening";
}

functionName();

let value = functionName();

console.log(value);
console.log(value + " Raj");


console.log("------------------2.Return a Number-------------")

function addition(a, b) {

    let add = a + b;

    console.log("Addition:", add);

    return add;
}

let addi = addition(10, 20);

console.log("Returned Value:", addi);
console.log("After Multiplication:", addi * 5);

console.log("-----------------------3. Return an Object-------------------------")

function calculate(a, b) {

    return {
        sum: a + b,
        div: a / b,
        mul: a * b,
        sub: a - b
    };
}

let output = calculate(30, 10);

console.log(output);

console.log("Sum:", output.sum);
console.log("Division:", output.div);
console.log("Multiplication:", output.mul);
console.log("Subtraction:", output.sub);

console.log("------- 4. Function Returning Another Function---------------")

function outer() {

    return function () {

        console.log("I am Inner Function");

    };
}

let testFunction = outer();

testFunction();

console.log("---------------5. Return Boolean - Login Validation-----------------")

function login(username, password) {

    if (username === "Admin" && password === "admin123") {

        return true;
    }

    return false;
}

let loginStatus = login("admin", "admin123");

console.log("Login Status:", loginStatus);

loginStatus = login("Admin", "admin123");

console.log("Login Status:", loginStatus);

console.log("-----------6. Return Value from Array Processing-----------------")

function findSmallest(numbers) {

    let smallest = numbers[0];

    for (let i = 1; i < numbers.length; i++) {

        if (numbers[i] < smallest) {

            smallest = numbers[i];
        }
    }

    return smallest;
}

let result = findSmallest([10, 30, 3, 5, 6, 1]);

console.log("Smallest Number:", result);


// We can use the returned value again

console.log("Smallest Number + 1:", result + 1);