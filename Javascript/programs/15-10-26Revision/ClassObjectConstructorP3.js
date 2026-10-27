// ============================================================
// CLASS, OBJECT, CONSTRUCTOR, AND THIS KEYWORD
// ============================================================

/*
CLASS:
A class is a blueprint or template used to create objects.

OBJECT:
An object is an instance of a class.

CONSTRUCTOR:
A constructor is a special method that executes automatically
when an object is created using the new keyword.

PROPERTY:
A property stores information about an object, such as name or age.

METHOD:
A method is a function defined inside a class that performs an action,
such as showDetails().
*/


// ============================================================
// 1. CREATING A CLASS WITH PROPERTIES AND METHODS
// ============================================================

class StudentInformation {

    // Property: stores information about the student
    test = 10;

    // Method: returns student information
    showDetails() {
        return "This is a student";
    }

    // Method: displays the student's name
    showName() {
        console.log("Student name: Raj");
    }
}


// ============================================================
// 2. CREATING AN OBJECT
// ============================================================

/*
Syntax:

const objectName = new ClassName();

The new keyword creates an object from the class.
*/

const introduction = new StudentInformation();


// ============================================================
// 3. ACCESSING A METHOD
// ============================================================

// Calling showDetails() and displaying its returned value
console.log(introduction.showDetails());

/*
Output:
This is a student
*/


// ============================================================
// 4. ACCESSING A PROPERTY
// ============================================================

// Accessing the test property using dot notation
console.log(introduction.test);

/*
Output:
10
*/


// ============================================================
// 5. CALLING ANOTHER METHOD
// ============================================================

// Calling the showName() method
introduction.showName();

/*
Output:
Student name: Raj
*/