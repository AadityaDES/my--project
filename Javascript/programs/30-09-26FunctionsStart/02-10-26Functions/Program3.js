// ============================================================
// 1. FUNCTION EXPRESSION
// ============================================================

// A function expression is a function assigned to a variable.
//
// Syntax:
//
// const variableName = function (parameters) {
//     // code
// };
//
// let variableName = function (parameters) {
//     // code
// };
//
// var variableName = function (parameters) {
//     // code
// };


// ============================================================
// EXAMPLE 1: Function Expression Using let, const and var
// ============================================================

let greet = function () {
    console.log("Using let");
};

const demo = function () {
    console.log("Using const");
};

var test = function () {
    console.log("Using var");
};

greet();
demo();
test();

console.log("-------------------------------------");


// ============================================================
// EXAMPLE 2: Function Expression with Parameters
// ============================================================

const checkBalance = function (balance) {
    console.log("Available Balance:", balance);
};

checkBalance(2000);


const addition = function (a, b) {
    console.log("Addition:", a + b);
};

addition(10, 20);

console.log("-------------------------------------");


// ============================================================
// EXAMPLE 3: Function Expression with return
// ============================================================

const getFullName = function (firstName, lastName) {

    let fullName = firstName + " " + lastName;

    return fullName;
};

console.log(getFullName("Ketan", "Jadhav"));


const calculateSalary = function (basic, hra) {

    return basic + hra;
};

let salary = calculateSalary(30000, 12000);

console.log("Salary:", salary);

console.log("-------------------------------------");


// ============================================================
// EXAMPLE 4: Using the Returned Value
// ============================================================

function addition1(a, b) {

    console.log("Addition:", a + b);

    return a + b;
}

let result = addition1(1, 2);

console.log("Returned Result:", result);

let sub = result - 1;

console.log("After Subtraction:", sub);

console.log("-------------------------------------");


// ============================================================
// 2. ARROW FUNCTION
// ============================================================

// Arrow functions were introduced in ES6 (2015).
// They use the arrow operator => instead of the function keyword.
// Syntax:
// const functionName = (parameters) => {
//     // code
// };

// ============================================================
// EXAMPLE 1: Arrow Function Without Parameters
// ============================================================

const sayHello = () => {
    console.log("Hello World");
};
sayHello();
console.log("-------------------------------------");

// ============================================================
// EXAMPLE 2: Arrow Function with One Parameter
// ============================================================

const square = (number) => {
    console.log("Square:", number * number);
};

square(5);


// ============================================================
// EXAMPLE 3: Arrow Function with return
// ============================================================

const square1 = (number) => {

    return number * number;
};

let squ = square1(2);

console.log("Square Result:", squ);

console.log("-------------------------------------");


// ============================================================
// EXAMPLE 4: Arrow Function with Multiple Parameters
// ============================================================

const addition2 = (a, b) => {
    console.log("Addition:", a + b);
};

addition2(300, 10);

console.log("-------------------------------------");


// ============================================================
// EXAMPLE 5: Employee Salary Calculation
// ============================================================

const calculateEmpSalary = (basic, hra, tra) => {

    return basic + hra + tra;
};

let empSalary = calculateEmpSalary(50000, 4000, 3000);

console.log("Employee Salary:", empSalary);

console.log("Salary with Bonus:", empSalary + 30000);

console.log("-----------Exp 6: Login Validation------------");

const login = (userName, password) => {

    if (userName === "Admin" && password === "123") {

        return "Login Successful";
    }

    return "Invalid Login";
};

console.log(login("Admin", "123"));

console.log(login("Admin", "1234"));

let loginResult = login("Admin", "1234");

console.log("--------------Exp 7: Passing a Returned Value to Another Function------------")

function displayResult(loginResult) {

    console.log("Login Status:", loginResult);

    return loginResult;
}

console.log(displayResult(loginResult));