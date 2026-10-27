// ============================================================
// 1. CLASS
// ============================================================

/*
Definition:
A class is a blueprint or template used to create objects.
It defines the properties and methods that objects can have.

Syntax:

class ClassName {
    // Properties and methods
}
*/

// Syntax for defining a method:
//
// methodName() {
//     // Code
// }


// Example: Creating a class

class Student {

    // Method to display student details
    display() {
        console.log("Student details");
    }

    // Method to display student name
    showName() {
        console.log("Student Name");
    }
}

// Syntax for creating an object:
//
// let/const objectName = new ClassName();

// Creating an object of the Student class
let obj = new Student();

// Calling methods using the object
obj.display();
obj.showName();

/*
Output:
Student details
Student Name
*/


// ============================================================
// 2. OBJECT
// ============================================================

/*
Definition:
An object is an instance of a class. It can access the properties
and methods defined in the class.

Syntax:

const objectName = new ClassName();
*/

// Defining an empty class
class Classname {

    // Properties and methods can be defined here
}

// Creating an object of the Classname class
const object1 = new Classname();


// ============================================================
// 3. CONSTRUCTOR
// ============================================================

/*
Definition:
A constructor is a special method inside a class that executes
automatically when an object is created using the new keyword.

It is commonly used to initialize object properties.

Syntax:

class ClassName {

    constructor(parameters) {
        // Initialize properties
    }
}
*/


// ============================================================
// 4. CONSTRUCTOR WITHOUT PARAMETERS
// ============================================================

class Student1 {

    // Constructor executes automatically when an object is created
    constructor() {
        console.log("Hi");
    }

    // Normal method
    demo() {
        console.log("Hello");
    }
}

// Creating an object invokes the constructor automatically
const obj2 = new Student1();

// Calling the normal method
// obj2.demo();

/*
Output:
Hi

If obj2.demo() is uncommented, the output will be:
Hello
*/


// ============================================================
// 5. CONSTRUCTOR WITH PARAMETERS
// ============================================================

class Student2 {

    // Constructor accepts three parameters
    constructor(name, rollNo, result) {

        // Assigning parameter values to object properties
        this.name = name;
        this.rollNo = rollNo;
        this.result = result;
    }
}

// Creating an object and passing values to the constructor
const obj3 = new Student2("Rohit", 2);

// Accessing object properties
console.log(obj3.name);
console.log(obj3.rollNo);
console.log(obj3.result);

/*
Output:
Rohit
2
undefined

Explanation:
The result parameter was not provided while creating the object.
Therefore, this.result is undefined.
*/


// ============================================================
// 6. THIS KEYWORD
// ============================================================

/*
Definition:
In a class constructor, this refers to the newly created object.

It is commonly used to initialize the properties of that object.

In a regular class method, this generally refers to the object
that calls the method.
*/


// Example: Using this keyword

class Car {

    // Constructor receives the brand parameter
    constructor(brand) {

        // Assigning the parameter value to the object's brand property
        this.brand = brand;
    }

    // Method to display the brand
    display() {

        // Accessing the current object's brand property
        console.log(this.brand);
    }
}

// Creating an object and passing the brand name
let obj4 = new Car("Tata");

// Calling the display method
obj4.display();

/*
Output:
Tata
*/


// ============================================================
// 7. JAVASCRIPT DATE OBJECT
// ============================================================

// Creating a Date object with the current date and time
console.log(new Date());

/*
Output:
The current date and time when the program executes.

Note:
new Date() creates an object representing the current date and time.
*/

console.log(a);    
let a = 10;        //Output-Reference Error

{
// TDZ starts here for "name"
// console.log(name); // ERROR: Cannot access 'name' before initialization
let name = "Amit"; // TDZ ends here
console.log(name); // output: Amit
}