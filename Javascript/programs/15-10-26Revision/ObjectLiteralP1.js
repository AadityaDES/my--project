// ============================================================
// 1. OBJECT LITERAL
// ============================================================

/*
Definition:
An object is a collection of related information stored as
key-value pairs.

An object literal is the simplest way to create an object in JavaScript.

Syntax:

const objectName = {
    key: value,
    key1: value1
};

Keys are usually strings or Symbols. Values can be strings,
numbers, booleans, arrays, objects, functions, and more.

Accessing properties using dot notation:

objectName.keyName
*/


// Creating an object using object literal syntax

let student = {
    name: "Rohit",  // Property: name is the key, "Rohit" is the value
    age: 30,        // Property: age is the key, 30 is the value
    grade: "A"      // Property: grade is the key, "A" is the value
};

// Displaying the complete object
console.log(student);

// Accessing individual properties using dot notation
console.log("Name: " + student.name);
console.log("Age: " + student.age);
console.log("Grade: " + student.grade);

/*
Output:
{ name: 'Rohit', age: 30, grade: 'A' }
Name: Rohit
Age: 30
Grade: A
*/


// ============================================================
// 2. UPDATING AN EXISTING PROPERTY
// ============================================================

/*
Definition:
We can change the value of an existing property using
the assignment operator (=).

Syntax:

objectName.propertyName = newValue;
*/

// Updating the student's age
student.age = 32;

// Displaying the updated age
console.log("Updated age: " + student.age);

/*
Output:
Updated age: 32
*/


// ============================================================
// 3. ADDING A NEW PROPERTY
// ============================================================

/*
Definition:
We can add a new property to an existing object by assigning
a value to a property that does not already exist.

Syntax:

objectName.newProperty = value;
*/

// Adding a new subject property
student.subject = "JavaScript";

// Displaying the updated object
console.log(student);

/*
Output:
{
    name: 'Rohit',
    age: 32,
    grade: 'A',
    subject: 'JavaScript'
}
*/


// ============================================================
// 4. NESTED OBJECT
// ============================================================

/*
Definition:
An object inside another object is called a nested object.

We can access nested properties by chaining dot notation.

Example:
company.employee.department.technology
*/

let company = {

    name: "TCS",

    employee: {
        name: "Amit",

        department: {
            name: "Testing",
            technology: "Playwright"
        }
    }
};

console.log("-------------------------");

// Accessing top-level property
console.log(company.name);

// Accessing employee name
console.log(company.employee.name);

// Accessing nested department name
console.log(company.employee.department.name);

// Accessing nested department technology
console.log(company.employee.department.technology);

/*
Output:
TCS
Amit
Testing
Playwright
*/


// ============================================================
// 5. UPDATING A NESTED OBJECT PROPERTY
// ============================================================

/*
We can update a nested property by accessing its complete path.

Syntax:

objectName.objectName.propertyName = newValue;
*/

// Updating the department technology
company.employee.department.technology = "Selenium";

// Displaying the updated nested object
console.log(company);

/*
The technology value is now "Selenium".
The other properties remain unchanged.
*/


// ============================================================
// 6. DELETING A PROPERTY
// ============================================================

/*
Definition:
The delete operator removes a property from an object.

Syntax:

delete objectName.propertyName;
*/

console.log("-------------------------");

// Deleting the company's name property
delete company.name;

// Displaying the updated object
console.log(company);

/*
The name property is removed from company.
The employee property and its nested properties remain.
*/


// ============================================================
// 7. ITERATING THROUGH AN OBJECT USING FOR...IN
// ============================================================

/*
Definition:
The for...in loop iterates over enumerable property keys.

Syntax:

for (const key in objectName) {
    console.log(key, objectName[key]);
}

Important:
- key contains the property name.
- objectName[key] retrieves the property's value.
- Bracket notation is useful when the key is stored in a variable.
*/

// Recreating the student object
student = {
    name: "Rohit",
    age: 30,
    grade: "A"
};

console.log("-------------------------");

// Iterating through the student object
for (const key in student) {
    console.log(key, "=", student[key]);
}

/*
Output:
name = Rohit
age = 30
grade = A
*/


// ============================================================
// 8. OBJECT.KEYS()
// ============================================================

/*
Definition:
Object.keys() returns an array containing the object's own
enumerable string-keyed property names.

Syntax:

Object.keys(objectName);
*/

const studentKeys = Object.keys(student);

console.log(studentKeys);

/*
Output:
[ 'name', 'age', 'grade' ]
*/

// Iterating through the array of keys
for (const key of studentKeys) {
    console.log(key);
}

/*
Output:
name
age
grade
*/


// ============================================================
// 9. OBJECT.VALUES()
// ============================================================

/*
Definition:
Object.values() returns an array containing the object's own
enumerable string-keyed property values.

Syntax:

Object.values(objectName);
*/

const studentValues = Object.values(student);

console.log(studentValues);

/*
Output:
[ 'Rohit', 30, 'A' ]
*/

// Iterating through the array of values
for (const value of studentValues) {
    console.log(value);
}

/*
Output:
Rohit
30
A
*/


// ============================================================
// 10. OBJECT.ENTRIES()
// ============================================================

/*
Definition:
Object.entries() returns an array of key-value pairs.

Each pair is represented as a two-element array:

[key, value]

Syntax:

Object.entries(objectName);
*/

console.log("-------------------------");

// Displaying all key-value pairs
console.log("Entries:", Object.entries(student));

/*
Output:
Entries: [ [ 'name', 'Rohit' ], [ 'age', 30 ], [ 'grade', 'A' ] ]
*/

// Using destructuring with the for...of loop
for (const [key, value] of Object.entries(student)) {
    console.log(key, "=", value);
}

/*
Output:
name = Rohit
age = 30
grade = A
*/


// ============================================================
// 11. DIFFERENCE BETWEEN FOR...IN AND FOR...OF
// ============================================================

/*
for...in:
Iterates over enumerable property keys of an object.

for...of:
Iterates over values of iterable objects such as arrays and strings.

Object.keys(), Object.values(), and Object.entries() return arrays,
so we can use for...of to iterate over their results.
*/