// ============================================================
// TYPES OF INHERITANCE IN JAVASCRIPT
// ============================================================

/*
INHERITANCE:
Inheritance is an OOP concept in which a child class acquires
accessible properties and methods from a parent class.

In JavaScript, we use the extends keyword to establish inheritance.


TYPES OF INHERITANCE:

1. SINGLE INHERITANCE
   One parent class -> One child class

   Minimum classes required: 2

   Example:
   Parent -> Child


2. MULTILEVEL INHERITANCE
   A class inherits from another class, and a third class inherits
   from the second class.

   Structure:
   Grandparent -> Parent -> Child

   Minimum classes required: 3


3. MULTIPLE INHERITANCE
   One child class inherits directly from two or more parent classes.

   Structure:
   Parent1 + Parent2 -> Child

   JavaScript does not support multiple class inheritance directly
   using extends. Similar functionality can be achieved using
   mixins or composition.


4. HIERARCHICAL INHERITANCE
   One parent class -> Multiple child classes

   Example:
            Parent
           /      \
        Child1    Child2


5. HYBRID INHERITANCE
   A combination of two or more inheritance patterns.

   Example:
   A design combining hierarchical and multilevel inheritance.

   JavaScript can implement such patterns using supported class
   inheritance along with techniques such as mixins or composition.
*/


// ============================================================
// 1. SINGLE INHERITANCE
// ============================================================

/*
DEFINITION:
Single inheritance occurs when one child class inherits from
one parent class.

Structure:

       Parent1
          |
          v
       Child1


TERMINOLOGY:

Parent Class:
Also called a base class or superclass.

Child Class:
Also called a derived class or subclass.
*/


// ------------------------------------------------------------
// PARENT CLASS
// ------------------------------------------------------------

class Parent1 {

    home() {
        console.log("Parent home - 2BHK");
    }

    car() {
        console.log("Parent car - Honda");
    }
}


// ------------------------------------------------------------
// CHILD CLASS
// ------------------------------------------------------------

class Child1 extends Parent1 {

    // Inherits home() and car() from Parent1

    bike() {
        console.log("Child Bike - FZ");
    }
}


// ============================================================
// CREATING A CHILD CLASS OBJECT
// ============================================================

const obj = new Child1();

// Calling the child class method
obj.bike();

// Calling inherited parent class methods
obj.home();
obj.car();

/*
OUTPUT:

Child Bike - FZ
Parent home - 2BHK
Parent car - Honda
*/


// ============================================================
// CREATING A PARENT CLASS OBJECT
// ============================================================

const obj1 = new Parent1();

// Parent objects can call their own methods.
obj1.home();
obj1.car();

/*
OUTPUT:

Parent home - 2BHK
Parent car - Honda

IMPORTANT:

obj1.bike(); // TypeError: obj1.bike is not a function

Reason:
obj1 is an object of Parent1. The bike() method is defined
only inside Child1.

Inheritance flows from parent to child, not from child to parent.
*/


// ============================================================
// ADVANTAGES OF SINGLE INHERITANCE
// ============================================================

/*
1. Code Reusability:
   Child1 reuses home() and car() from Parent1.

2. Less Code Duplication:
   We do not need to rewrite the same methods inside Child1.

3. Easy Maintenance:
   Common functionality can be maintained in Parent1.

4. Extensibility:
   Child1 can add its own method, such as bike().

5. Clear Structure:
   Common parent functionality and child-specific functionality
   are separated into different classes.
*/


// ============================================================
// QUICK REVISION
// ============================================================

/*
Parent1:
- home()
- car()

Child1:
- bike()
- Inherits home() and car() from Parent1

obj = new Child1():
- Can call bike()
- Can call home()
- Can call car()

obj1 = new Parent1():
- Can call home()
- Can call car()
- Cannot call bike()

KEYWORD:
extends -> Establishes inheritance between classes.
*/