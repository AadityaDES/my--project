// ============================================================
// OOPS IN JAVASCRIPT
// ============================================================

/*
OOPS stands for Object-Oriented Programming System.

CLASS:
A class is a blueprint or template used to create objects.
It defines the properties and methods that objects can have.

OBJECT:
An object is an instance of a class. It represents an entity
that has properties and methods.

CONSTRUCTOR:
A constructor is a special method used to initialize an object's
properties. It executes automatically when an object is created
using the new keyword.

PROPERTY:
A property represents information or data about an object.

METHOD:
A method is a function defined inside a class that describes
an action an object can perform.
*/


// ============================================================
// 1. CREATING A STUDENT CLASS
// ============================================================

/*
Student properties:
1. Name
2. Roll Number
3. Branch
*/

class StudentInformation {

    // Constructor initializes the properties of each student
    constructor(name, rollNo, branch) {

        // Assigning parameter values to the current object's properties
        this.name = name;
        this.rollNo = rollNo;
        this.branch = branch;
    }

    // Method to display student details
    displayDetails() {

        console.log("Name: " + this.name);
        console.log("Roll No: " + this.rollNo);
        console.log("Branch: " + this.branch);
    }
}


// ============================================================
// 2. CREATING STUDENT OBJECTS
// ============================================================

// Creating the first student object
const student1 = new StudentInformation("Rohit", 102, "IT");

// Calling the method for the first student
student1.displayDetails();

console.log("-------------------------");

// Creating the second student object
const student2 = new StudentInformation("Virat", 103, "CS");

// Calling the method for the second student
student2.displayDetails();

/*
OUTPUT:

Name: Rohit
Roll No: 102
Branch: IT
-------------------------
Name: Virat
Roll No: 103
Branch: CS
*/


// ============================================================
// 3. UNDERSTANDING THE THIS KEYWORD
// ============================================================

/*
Definition:
In a class constructor, this refers to the newly created object.
In a regular class method, this generally refers to the object
that calls the method.

For student1:

this.name = name;
this.rollNo = rollNo;
this.branch = branch;

Values assigned:
this.name = "Rohit"
this.rollNo = 102
this.branch = "IT"

For student2:

this.name = "Virat"
this.rollNo = 103
this.branch = "CS"

IMPORTANT DIFFERENCE:

name:
A parameter that receives the value passed to the constructor.

this.name:
A property belonging to the current object.

Assignment:
this.name = name;

The assignment operator (=) assigns the parameter's value
to the current object's name property.
*/


// ============================================================
// 4. DIFFERENCE BETWEEN CONSTRUCTOR AND METHOD
// ============================================================

/*
CONSTRUCTOR:

1. Initializes an object.
2. Executes automatically when an object is created using new.
3. Commonly assigns initial values to properties.
4. Its special name in a JavaScript class is constructor.

METHOD:

1. Performs an operation or action.
2. Executes when it is called.
3. Can read or modify object properties.
4. Can return a value.
*/


// ============================================================
// 5. EXAMPLE OF A METHOD THAT RETURNS A VALUE
// ============================================================

class Student {

    // Method that returns the number 100
    display() {
        return 100;
    }
}

// Creating an object
const s1 = new Student();

// Calling the display() method and storing its return value
const result = s1.display();

// Displaying the returned value
console.log(result);

/*
OUTPUT:
100

IMPORTANT:
No constructor is explicitly defined in this class.
JavaScript provides a default constructor automatically.
The argument "Rahul" is not used because the class has no
custom constructor to receive or store it.
*/


// ============================================================
// 6. CLASS, OBJECT, PROPERTY, METHOD, AND CONSTRUCTOR
// ============================================================

/*
CLASS:
Blueprint used to create objects.

OBJECT:
An instance created from a class.

PROPERTY:
What an object has.
Examples: name, age, rollNo.

METHOD:
What an object can do.
Examples: displayDetails(), calculateSalary().

CONSTRUCTOR:
Initializes an object when it is created.
*/


// ============================================================
// 7. REAL-WORLD EXAMPLE
// ============================================================

class Employee {

    // Initialize employee properties
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    // Method to display employee details
    displayDetails() {
        console.log("Employee Name: " + this.name);
        console.log("Salary: " + this.salary);
    }

    // Method to increase salary
    increaseSalary(amount) {
        this.salary = this.salary + amount;
    }
}

// Creating an employee object
const employee1 = new Employee("Rahul", 50000);

// Displaying initial details
employee1.displayDetails();

console.log("-------------------------");

// Increasing salary by 5000
employee1.increaseSalary(5000);

// Displaying updated details
employee1.displayDetails();

/*
OUTPUT:

Employee Name: Rahul
Salary: 50000
-------------------------
Employee Name: Rahul
Salary: 55000
*/