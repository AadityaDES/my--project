// ============================================================
// 1. DEFAULT CONSTRUCTOR
// ============================================================

/*
Definition:
A constructor that takes no parameters is commonly called a
no-argument constructor.

It executes automatically when an object is created using new.

Important:
A JavaScript class can contain only one constructor method.
Defining two constructor methods in the same class causes a SyntaxError.
*/

class Student {

    // Default / no-argument constructor
    constructor() {
        console.log("Student object created");
    }

    /*
    We cannot define another constructor in the same class.

    constructor() {
        console.log("Test object created");
    }
    */
}

// Creating objects invokes the constructor automatically
const s1 = new Student();
const s2 = new Student();

/*
Output:
Student object created
Student object created
*/


// ============================================================
// 2. PARAMETERIZED CONSTRUCTOR
// ============================================================

/*
Definition:
A parameterized constructor accepts parameters to initialize
an object's properties with specific values.
*/

class Student1 {

    // Constructor accepts username and rollNo
    constructor(username, rollNo) {
        this.username = username;
        this.rollNo = rollNo;
    }

    // Method to display student details
    displayStudent() {
        console.log("Username:", this.username);
        console.log("Roll No:", this.rollNo);
        console.log("-".repeat(30));
    }
}

// Creating objects with different values
const s11 = new Student1("Rohit", 101);
const s22 = new Student1("Amit", 102);

// Calling methods to display student details
s11.displayStudent();
s22.displayStudent();

/*
Output:
Username: Rohit
Roll No: 101
------------------------------
Username: Amit
Roll No: 102
------------------------------
*/


// ============================================================
// 3. STATIC METHOD
// ============================================================

/*
Definition:
A static method belongs to the class itself, not to individual
objects.

It is declared using the static keyword and is generally called
using the class name.

Syntax:
static methodName() {
    // Code
}

Calling syntax:
ClassName.methodName();

A static method is not normally called directly through an instance.
*/

class Student2 {

    // Static method belongs to the Student2 class
    static collegeName() {
        console.log("ABC Engineering College");
    }

    // Instance method belongs to individual student objects
    display() {
        console.log("Student details");
    }
}

// Calling the static method using the class name
Student2.collegeName();

// Creating an object
const s3 = new Student2();

// Calling the instance method using the object
s3.display();

/*
Output:
ABC Engineering College
Student details
*/


// ============================================================
// 4. STATIC METHOD WITH A CONSTRUCTOR
// ============================================================

class Student3 {

    // Constructor initializes object properties
    constructor(username, rollNo) {
        this.username = username;
        this.rollNo = rollNo;
    }

    // Static method belongs to the class
    static collegeName() {
        console.log("ABC Engineering College");
    }

    // Instance method accesses the current object's properties
    displayStudent() {
        console.log("Username:", this.username);
        console.log("Roll No:", this.rollNo);
    }
}

// Calling the static method without creating an object
Student3.collegeName();

// Creating a student object
const s4 = new Student3("Rohit", 101);

// Calling the instance method
s4.displayStudent();

/*
Output:
ABC Engineering College
Username: Rohit
Roll No: 101
*/


// ============================================================
// 5. QUICK REVISION
// ============================================================

/*
CLASS:
A blueprint used to create objects.

OBJECT:
An instance of a class.

CONSTRUCTOR:
Initializes an object and executes automatically when new is used.

DEFAULT CONSTRUCTOR:
A constructor that takes no arguments.

PARAMETERIZED CONSTRUCTOR:
A constructor that accepts parameters to initialize properties.

INSTANCE METHOD:
A method called through an object.

STATIC METHOD:
A method called through the class name.

Property: 
Stores information about an object.

Method: 
Defines an action an object can perform.

this: 
Refers to the current object in the relevant method context.

Static method: 
Belongs to the class itself and is called using the class name.
*/