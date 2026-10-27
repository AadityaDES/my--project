// ============================================================
// CLASS, OBJECT, CONSTRUCTOR, PROPERTIES, METHODS, AND THIS
// ============================================================

/*
1. CLASS

Definition:
A class is a blueprint or template used to create objects.
It defines the properties and methods that objects can have.

General Syntax:
*/

class ClassName {

    // Properties

    // Constructor
    constructor(param1, param2) {
        this.param1 = param1;
        this.param2 = param2;
    }

    // Method without parameters
    methodName1() {
        // Code
    }

    // Method with parameters
    methodName2(param1, param2) {
        // Code
    }
}

/*
2. OBJECT CREATION

Definition:
An object is an instance of a class.

Syntax:

const objectName = new ClassName();

We can use let or var also, but const is preferred when the
variable will not be reassigned.
*/


// ============================================================
// 3. REAL-WORLD EXAMPLE: CAR
// ============================================================

/*
Class:
Car

Real-world examples of cars:
Tata, Suzuki, Kia

Properties:
brand, model, color

Methods:
start(), stop(), displayDetails()
*/

class Car {

    // Constructor initializes object properties
    constructor(brand, model, color) {
        this.brand = brand;
        this.model = model;
        this.color = color;
    }

    // Method without parameters
    start() {
        console.log(this.brand + " car started");
    }

    // Method to display car details
    displayDetails() {
        console.log("Brand:", this.brand);
        console.log("Model:", this.model);
        console.log("Color:", this.color);
    }

    // Method with a parameter
    stop(message) {
        console.log(this.brand + " car stopped: " + message);
    }
}

// Creating objects of the Car class
const car1 = new Car("Tata", "Nexon", "Black");
const car2 = new Car("Kia", "Seltos", "White");

// Calling methods using objects
car1.displayDetails();
car1.start();
car1.stop("Traffic signal");

console.log("------------------");

car2.displayDetails();
car2.start();

/*
Output:

Brand: Tata
Model: Nexon
Color: Black
Tata car started
Tata car stopped: Traffic signal
------------------
Brand: Kia
Model: Seltos
Color: White
Kia car started
*/


// ============================================================
// 4. CONSTRUCTOR
// ============================================================

/*
Definition:
A constructor is a special method inside a class that executes
automatically when an object is created using the new keyword.

It is commonly used to initialize object properties.

Example:
constructor(brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
}
*/


// ============================================================
// 5. THIS KEYWORD
// ============================================================

/*
Definition:
In a class constructor, this refers to the newly created object.
In a regular class method, this generally refers to the object
that calls the method.

Example:
this.brand = brand;

Here:
- brand is the constructor parameter.
- this.brand is the object's property.
- this refers to the current object.

Note:
super is a different keyword. It is used in a derived class to
call the parent class constructor or access parent class methods.
*/


// ============================================================
// 6. METHOD
// ============================================================

/*
Definition:
A method is a function defined inside a class.

Examples:
start() { }
stop() { }
displayDetails() { }

Methods can:
- Perform an operation.
- Display information.
- Accept parameters.
- Access object properties using this.
*/