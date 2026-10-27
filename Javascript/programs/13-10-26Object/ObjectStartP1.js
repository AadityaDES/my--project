// ============================================================
// 1. OBJECT IN JAVASCRIPT
// ============================================================

/*
An object is a collection of properties stored as key-value pairs.

It allows us to represent a real-world entity and its related
information and behavior.

Examples:
Car, Employee, Student, User, API Response, Test Case.

A property consists of:
Key   -> Property name
Value -> Data associated with the property
*/

let car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    isElectric: false
};

console.log(car);


// ============================================================
// 2. OBJECT SYNTAX
// ============================================================

/*
Syntax:

let objectName = {
    key1: value1,
    key2: value2,
    keyN: valueN
};

Property values can be strings, numbers, booleans, arrays,
objects, functions, null, or undefined.
*/


// ============================================================
// 3. OBJECT EXAMPLE: API RESPONSE
// ============================================================

let apiResponse = {
    status: 200,
    message: "Success",
    data: {
        id: 1,
        name: "User"
    }
};

console.log(apiResponse);
console.log(apiResponse.status);      // 200
console.log(apiResponse.message);     // Success
console.log(apiResponse.data.name);   // User
console.log(apiResponse.data.id);     // 1

/*
Here, data is a nested object.

apiResponse
    |
    |-- status
    |-- message
    |
    |-- data
          |
          |-- id
          |-- name
*/


// ============================================================
// 4. OBJECT EXAMPLE: TEST CASE
// ============================================================

let testCase = {
    id: "TC001",
    name: "Login test case",
    priority: "High",
    status: "Not executed"
};

console.log(testCase);
console.log(testCase.id);
console.log(testCase.name);
console.log(testCase.priority);
console.log(testCase.status);

console.log("-".repeat(30));


// ============================================================
// 5. EMPTY OBJECT
// ============================================================

/*
An empty object contains no properties initially.
We can add properties later.
*/

let empObj = {};

console.log(empObj); // {}

console.log(Object.keys(empObj).length); // 0

// Adding a property

empObj.name = "Added user";

console.log(empObj);
// { name: "Added user" }

console.log(Object.keys(empObj).length); // 1


// ============================================================
// 6. NESTED OBJECT
// ============================================================

/*
A nested object is an object stored inside another object.
We can access its properties using chained dot notation.
*/

let employee = {
    name: "Rohit",
    department: "QA Automation",

    address: {
        city: "Pune",
        state: "MH",
        zip: "411001"
    },

    skills: {
        primary: "Playwright",
        secondary: "Selenium"
    }
};

console.log(Object.keys(employee).length); // 4

console.log(employee);

console.log(employee.name);                // Rohit
console.log(employee.department);          // QA Automation

console.log(employee.address.city);        // Pune
console.log(employee.address.state);       // MH
console.log(employee.address.zip);         // 411001

console.log(employee.skills.primary);      // Playwright
console.log(employee.skills.secondary);    // Selenium

console.log("-".repeat(30));


// ============================================================
// 7. CREATING OBJECTS
// ============================================================


// Method 1: Object Literal (Most Common)

let test = {
    name: "Raj",
    firstName: "Test"
};

console.log(test);


// Method 2: Object Constructor

let obj1 = new Object();

obj1.name = "Firefox";
obj1.version = 120;

console.log(obj1);
// { name: "Firefox", version: 120 }