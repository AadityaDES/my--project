// ============================================================
// Return Type / return Statement
// ============================================================

// The return statement sends a value back to the place
// where the function was called.

// If a function does not have a return statement,
// JavaScript automatically returns undefined.

/*
Syntax:

function functionName(parameters) {
    return value;
}
*/


// ============================================================
// Example 1: Return a Value
// ============================================================

function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

let result = add(30, 40);

console.log("Addition:", result);


/*
Complete Flow:

add(10, 20)

a = 10
b = 20

return 10 + 20
return 30

console.log(30)


add(30, 40)

a = 30
b = 40

return 30 + 40
return 70

result = 70

Output:
Addition: 70
*/


// ============================================================
// Example 2: Function Without return
// ============================================================

function add1(a, b) {
    console.log(a + b);
}

let result1 = add1(10, 20);

console.log(result1);


/*
Complete Flow:

add1(10, 20)

a = 10
b = 20

console.log(10 + 20)
Output:
30

There is no return statement.

JavaScript automatically returns:

undefined

Therefore:

result1 = undefined

Output:
30
undefined
*/


// ============================================================
// Example 3: Return an Object
// ============================================================

function getUser() {

    return {
        name: "Rohit",
        age: 30,
        role: "QA"
    };
}

let user = getUser();

console.log(user);
console.log(user.name);
console.log(user.age);


/*
Complete Flow:

getUser()
    ↓
return Object
    ↓
user receives the object

user = {
    name: "Rohit",
    age: 30,
    role: "QA"
}

user.name -> "Rohit"
user.age  -> 30
user.role -> "QA"
*/


// ============================================================
// Example 4: Return an Array
// ============================================================

function getColors() {

    return ["Red", "Green", "Blue"];
}

let colors = getColors();

console.log(colors);


/*
Complete Flow:

getColors()
    ↓
return ["Red", "Green", "Blue"]
    ↓
colors receives the array

colors = ["Red", "Green", "Blue"]
*/


// ============================================================
// Example 5: Return Different Values Using Conditions
// ============================================================

function checkNumber(num) {

    if (num > 0) {
        return "Positive";
    }

    if (num < 0) {
        return "Negative";
    }

    return "Zero";
}

let no = checkNumber(10);

console.log(no + " Test");

console.log(checkNumber(10));
console.log(checkNumber(-4));
console.log(checkNumber(0));


/*
Complete Flow:

checkNumber(10)

10 > 0 -> true
return "Positive"

Output:
Positive


checkNumber(-4)

-4 > 0 -> false
-4 < 0 -> true
return "Negative"

Output:
Negative


checkNumber(0)

0 > 0 -> false
0 < 0 -> false
return "Zero"

Output:
Zero
*/


// ============================================================
// Example 6: Return Boolean
// ============================================================

function isEven(number) {

    return number % 2 === 0;
}

let result2 = isEven(19);

console.log(result2);


/*
Complete Flow:

isEven(19)

19 % 2
= 1

1 === 0
-> false

return false

result2 = false

Output:
false


isEven(20)

20 % 2
= 0

0 === 0
-> true

return true
*/


// ============================================================
// Important Points
// ============================================================

// 1. return sends a value back from a function.

// 2. return can return:
//    - Number
//    - String
//    - Boolean
//    - Array
//    - Object
//    - Other values

// 3. A function without return returns undefined.

// 4. After return executes, the function stops immediately.

// Example:

function test() {

    console.log("Before return");

    return 100;

    console.log("After return"); // Never executes
}

console.log(test());


// 5. The returned value can be stored in a variable.

let value = add(10, 20);


// 6. The returned value can be directly passed to console.log.

console.log(add(50, 60));


// 7. The returned value can be used in another calculation.

let total = add(10, 20) + 50;

console.log(total);


// 8. In automation testing, return is commonly used to
//    return data from reusable functions.


// ============================================================
// return vs console.log
// ============================================================

function calculate(a, b) {
    return a + b;
}

let answer = calculate(10, 20);

console.log(answer);


/*
return:
    Sends the value back to the caller.

console.log:
    Only displays the value on the console.

return is useful when the returned value needs to be
stored, reused, compared, or passed to another function.
*/