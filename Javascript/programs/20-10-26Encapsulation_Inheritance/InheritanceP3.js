// ============================================================
// INHERITANCE IN JAVASCRIPT
// ============================================================

/*
DEFINITION:

Inheritance is an OOP (Object-Oriented Programming) concept in
which one class acquires the accessible properties and methods
of another class.

In JavaScript, we use the extends keyword to establish inheritance
between a parent class and a child class.

Parent Class (Base Class):
The class whose functionality is inherited.

Child Class (Derived Class):
The class that inherits functionality from the parent class and
can also define its own properties and methods.

ADVANTAGES OF INHERITANCE:

1. Code Reusability:
   Reuse existing methods from the parent class.

2. Reduces Code Duplication:
   There is no need to write the same method again in the child
   class when it can be inherited.

3. Easy Maintenance:
   Common functionality can be maintained in the parent class.

4. Extensibility:
   The child class can add its own properties and methods.

5. Method Overriding:
   A child class can provide its own implementation of an
   inherited method.
*/


// ============================================================
// BASIC INHERITANCE EXAMPLE
// ============================================================

// Parent Class
class Parent {

    carMethod() {
        console.log("Parent car");
    }
}

// Child Class
class Child extends Parent {

    /*
    Child inherits carMethod() from Parent.

    We do not need to define carMethod() again inside Child
    unless we want to provide a different implementation.
    */

    bikeMethod() {
        console.log("Child bike");
    }
}


// ============================================================
// CREATING AN OBJECT
// ============================================================

const ch = new Child();


// Calling the child class method
ch.bikeMethod();

// Calling the inherited parent class method
ch.carMethod();


// ============================================================
// OUTPUT
// ============================================================

/*
Child bike
Parent car
*/


// ============================================================
// EXPLANATION
// ============================================================

/*
1. Parent is the parent class.
2. Child is the child class.
3. The extends keyword establishes inheritance.
4. carMethod() is defined inside Parent.
5. Child inherits carMethod() from Parent.
6. bikeMethod() is defined inside Child.
7. The object ch can call both methods.

WITHOUT INHERITANCE:
We would need to write carMethod() again inside Child to use
that functionality.

WITH INHERITANCE:
Child reuses carMethod() from Parent.

IMPORTANT:
The commented-out carMethod() inside Child is unnecessary
because the child already inherits this method from Parent.

If the child defines a method with the same name as a parent
method, the child's method overrides the parent's method.
*/