// ============================================================
// STATIC AND NON-STATIC METHODS IN JAVASCRIPT
// ============================================================

/*
STATIC METHOD:

A static method belongs to the class itself, not to its instances.

- Declared using the static keyword.
- Called using the class name.
- Does not require object creation.

NON-STATIC (INSTANCE) METHOD:

An instance method belongs to an object created from the class.

- Declared without the static keyword.
- Called using an object reference.
- Requires an object to call it directly.
*/


// ============================================================
// 1. CREATING A CLASS WITH STATIC AND INSTANCE METHODS
// ============================================================

class Student {

    // Static method belongs to the class
    static collegeName() {
        console.log("ABC Engineering College");
    }

    // Instance method belongs to individual objects
    display() {
        console.log("Student Details");
    }
}


// ============================================================
// 2. CALLING A STATIC METHOD
// ============================================================

// Syntax:
// ClassName.methodName();

// Calling the static method using the class name
Student.collegeName();

/*
Output:
ABC Engineering College
*/


// ============================================================
// 3. CALLING AN INSTANCE METHOD
// ============================================================

// Creating an object
const s1 = new Student();

// Calling the instance method using the object
s1.display();

/*
Output:
Student Details
*/


// ============================================================
// 4. CAN WE CALL A STATIC METHOD USING AN OBJECT?
// ============================================================

// This will cause a TypeError because display() is not static.
// Student.display();

// This will also cause a TypeError because collegeName() is static.
// It is not available as an instance method on s1.
//
// s1.collegeName();

/*
To call the static method, use:
Student.collegeName();

To call the instance method, use:
s1.display();
*/


// ============================================================
// 5. DIFFERENCE BETWEEN STATIC AND INSTANCE METHODS
// ============================================================

/*
STATIC METHOD:
1. Declared using the static keyword.
2. Called using the class name.
3. Does not require an object to be created.
4. Commonly used for class-level operations.

INSTANCE METHOD:
1. Declared without the static keyword.
2. Called using an object reference.
3. Requires an object for direct invocation.
4. Can access instance properties using this.
*/


// ============================================================
// 6. REAL-WORLD EXAMPLE
// ============================================================

class Employee {

    constructor(name) {
        this.name = name;
    }

    // Static method: information related to the company
    static companyName() {
        console.log("Company: ABC Technologies");
    }

    // Instance method: information about a particular employee
    displayName() {
        console.log("Employee Name:", this.name);
    }
}

// Calling the static method without creating an object
Employee.companyName();

// Creating an employee object
const emp1 = new Employee("Rahul");

// Calling the instance method
emp1.displayName();

/*
Output:
Company: ABC Technologies
Employee Name: Rahul
*/