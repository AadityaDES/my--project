// ============================================================
// 1. ACCESSING OBJECT PROPERTIES
// ============================================================

/*
We can access object properties in two ways:

1. Dot notation       -> object.property
2. Bracket notation  -> object["property"]
*/

let product = {
    name: "Laptop",
    price: 10000,
    inStock: true
};

// Method 1: Dot notation

console.log(product.name);     // Laptop
console.log(product.price);    // 10000
console.log(product.inStock);  // true

// Method 2: Bracket notation

console.log(product["name"]);     // Laptop
console.log(product["price"]);    // 10000
console.log(product["inStock"]);  // true

console.log("-".repeat(40));


// ============================================================
// 2. DOT NOTATION VS BRACKET NOTATION
// ============================================================

/*
Dot notation:
- Uses the property name directly.
- Example: product.name

Bracket notation:
- Uses the property name inside square brackets.
- Supports dynamic property names.
- Supports property names containing spaces or special characters.
*/

let employee = {
    name: "Rahul",
    "full name": "Rahul Sharma",
    salary: 50000
};

console.log(employee.name);          // Rahul
console.log(employee["full name"]);  // Rahul Sharma

// Dynamic property access

let key = "salary";

console.log(employee[key]);   // 50000
console.log(employee.key);    // undefined

/*
employee[key] accesses the property named "salary".
employee.key looks for a property literally named "key".
*/


// ============================================================
// 3. ADDING NEW PROPERTIES
// ============================================================

/*
We can add new properties using dot notation
or bracket notation.
*/

let testResult = {
    name: "Login Test"
};

// Adding a property using dot notation

testResult.status = "Pass";

console.log(testResult);
// { name: "Login Test", status: "Pass" }

// Adding a property using bracket notation

testResult["Duration"] = 3.5;

console.log(testResult);
// { name: "Login Test", status: "Pass", Duration: 3.5 }


// Adding a property dynamically

let propertyName = "browser";

testResult[propertyName] = "Chrome";

console.log(testResult);

console.log("-".repeat(40));


// ============================================================
// 4. UPDATING EXISTING PROPERTIES
// ============================================================

/*
Assigning a new value to an existing property updates it.
*/

let setting = {
    theme: "dark",
    fontSize: 15,
    language: "english"
};

console.log("Before updating:", setting);

// Updating using dot notation

setting.language = "Hindi";

// Updating using bracket notation

setting["theme"] = "light";

console.log("After updating:", setting);

/*
Output:
{
    theme: "light",
    fontSize: 15,
    language: "Hindi"
}
*/


// ============================================================
// 5. DELETING OBJECT PROPERTIES
// ============================================================

/*
The delete operator removes a property from an object.
It does not delete the entire object variable.
*/

let temp = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};

console.log("Original object:", temp);

// Delete using dot-style property access

delete temp.c;

console.log("After deleting c:", temp);
// { a: 1, b: 2, d: 4 }

// Delete using bracket notation

delete temp["d"];

console.log("After deleting d:", temp);
// { a: 1, b: 2 }


// ============================================================
// 6. ITERATING THROUGH OBJECT PROPERTIES
// ============================================================

/*
Iteration means accessing object properties one by one.
*/


// Method 1: for...in

let student = {
    name: "Ketan",
    age: 30,
    grade: "A",
    city: "Pune"
};

for (let key in student) {
    console.log(`${key} = ${student[key]}`);
}

/*
Output:
name = Ketan
age = 30
grade = A
city = Pune
*/

/*
key stores the current property name.
student[key] retrieves the value of that property.
*/


// ============================================================
// 7. Object.keys()
// ============================================================

/*
Object.keys() returns an array of an object's own
enumerable string-keyed property names.
*/

let keys = Object.keys(student);

console.log(keys);
// ["name", "age", "grade", "city"]

console.log(keys.length); // 4

// Reading each key

for (let key of Object.keys(student)) {
    console.log(key);
}


// ============================================================
// 8. Object.values()
// ============================================================

/*
Object.values() returns an array containing the values
of an object's own enumerable string-keyed properties.
*/

let values = Object.values(student);

console.log(values);
// ["Ketan", 30, "A", "Pune"]

// Reading each value

for (let value of Object.values(student)) {
    console.log(value);
}


// ============================================================
// 9. Object.entries()
// ============================================================

/*
Object.entries() returns an array of [key, value] pairs.
Each pair is itself an array containing two elements.
*/

let entries = Object.entries(student);

console.log(entries);

/*
Output:
[
    ["name", "Ketan"],
    ["age", 30],
    ["grade", "A"],
    ["city", "Pune"]
]
*/


// ============================================================
// 10. ITERATING USING Object.entries()
// ============================================================

/*
Array destructuring extracts the key and value
from each entry.
*/

for (let [key, value] of Object.entries(student)) {
    console.log(`${key} : ${value}`);
}

/*
Output:
name : Ketan
age : 30
grade : A
city : Pune
*/