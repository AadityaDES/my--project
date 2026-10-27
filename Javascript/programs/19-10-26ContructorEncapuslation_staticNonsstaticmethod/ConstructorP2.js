// ============================================================
// WHAT IS A CONSTRUCTOR?
// ============================================================

/*
Definition:

A constructor is a special method inside a class.

1. It executes automatically when an object is created using new.
2. It is mainly used to initialize object properties.
3. In a class constructor, this refers to the newly created object.
4. A class can have only one constructor method.
5. If no constructor is defined, JavaScript provides a default constructor.
*/


// ============================================================
// 1. EXAMPLE WITHOUT A CONSTRUCTOR
// ============================================================

/*
In this example, username and rollNo are passed directly to the
displayStudent() method every time it is called.

The values are not automatically stored as object properties.
*/

class Student {

    // Method that accepts student details as parameters
    displayStudent(username, rollNo) {

        console.log("Username:", username);
        console.log("Roll No:", rollNo);
        console.log("-".repeat(30));
    }
}

// Creating an object of the Student class
const s1 = new Student();

// Passing student details to the method
s1.displayStudent("Rohit", 101);
s1.displayStudent("Amit", 102);

/*
Output:

Username: Rohit
Roll No: 101
------------------------------
Username: Amit
Roll No: 102
------------------------------
*/

console.log();


// ============================================================
// 2. EXAMPLE WITH A CONSTRUCTOR
// ============================================================

/*
In this example, the constructor initializes the student properties
when each object is created.

The values are stored in the object and can be accessed by
other methods using this.
*/

class Student1 {

    // Constructor executes automatically during object creation
    constructor(username, rollNo) {

        // Store values in the current object's properties
        this.username = username;
        this.rollNo = rollNo;
    }

    // Method to display the stored student details
    displayStudent() {

        console.log("Username:", this.username);
        console.log("Roll No:", this.rollNo);
        console.log("-".repeat(30));
    }
}

// Creating objects and passing values to their constructors
const s11 = new Student1("Rohit", 101);
const s22 = new Student1("Amit", 102);

// Calling methods without passing the details again
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
// 3. CONSTRUCTOR WITH MULTIPLE METHODS
// ============================================================

/*
A constructor initializes the object.

Once the properties are initialized, multiple methods can use
those properties to perform different actions.
*/

class Student2 {

    // Initialize student properties
    constructor(username, rollNo) {
        this.username = username;
        this.rollNo = rollNo;
    }

    // Method to display student details
    displayStudent() {
        console.log("Username:", this.username);
        console.log("Roll No:", this.rollNo);
    }

    // Method representing a student studying
    study() {
        console.log(this.username, "is studying");
    }

    // Method representing a student attending an exam
    attendExam() {
        console.log(this.username, "is attending the exam");
    }
}

// Creating a student object
const s33 = new Student2("Rohit", 101);

// Calling different methods using the same object
s33.displayStudent();
s33.study();
s33.attendExam();

/*
Output:

Username: Rohit
Roll No: 101
Rohit is studying
Rohit is attending the exam
*/