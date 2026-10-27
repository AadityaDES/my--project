// ============================================================
// 3. HIERARCHICAL INHERITANCE IN JAVASCRIPT
// ============================================================

/*
DEFINITION:

Hierarchical inheritance is a type of inheritance in which
multiple child classes inherit from the same parent class.

STRUCTURE:

                 Animal
                /   |   \
               /    |    \
             Cat   Dog   Test

In this example:
- Animal is the parent class.
- Cat, Dog, and Test are child classes.
- All three child classes inherit the eat() method from Animal.
- Each child class has its own specific method.

ADVANTAGES OF HIERARCHICAL INHERITANCE:

1. Code Reusability:
   All child classes can reuse the eat() method from Animal.

2. Reduces Code Duplication:
   We do not need to write the eat() method separately in
   Cat, Dog, and Test.

3. Easy Maintenance:
   Common functionality can be maintained in the parent class.

4. Extensibility:
   Each child class can define its own additional methods.

5. Clear Structure:
   Common behavior is defined in the parent class, while
   specialized behavior is defined in individual child classes.

IMPORTANT:
Inheritance flows from parent to child.
A child class cannot automatically access methods defined only
inside another sibling class.
*/


// ============================================================
// PARENT CLASS: ANIMAL
// ============================================================

class Animal {

    // Common method inherited by all child classes
    eat() {
        console.log("Eating");
    }
}


// ============================================================
// CHILD CLASS 1: CAT
// ============================================================

class Cat extends Animal {

    // Inherits eat() from Animal

    // Cat-specific method
    meow() {
        console.log("Meowing");
    }
}


// ============================================================
// CHILD CLASS 2: DOG
// ============================================================

class Dog extends Animal {

    // Inherits eat() from Animal

    // Dog-specific method
    bark() {
        console.log("Barking");
    }
}


// ============================================================
// CHILD CLASS 3: TEST
// ============================================================

class Test extends Animal {

    // Inherits eat() from Animal

    // Test-specific method
    testing() {
        console.log("Testing");
    }
}


// ============================================================
// OBJECT 1: CAT CLASS
// ============================================================

const c1 = new Cat();

// Calling the Cat class method
c1.meow();

// Calling the inherited Animal class method
c1.eat();

/*
OUTPUT:
Meowing
Eating
*/


// ============================================================
// OBJECT 2: DOG CLASS
// ============================================================

const c2 = new Dog();

// Calling the inherited Animal class method
c2.eat();

// Calling the Dog class method
c2.bark();

/*
OUTPUT:
Eating
Barking
*/


// ============================================================
// OBJECT 3: TEST CLASS
// ============================================================

const c3 = new Test();

// Calling the inherited Animal class method
c3.eat();

// Calling the Test class method
c3.testing();

/*
OUTPUT:
Eating
Testing
*/


// ============================================================
// COMPLETE OUTPUT
// ============================================================

/*
Meowing
Eating
Eating
Barking
Eating
Testing
*/


// ============================================================
// IMPORTANT CONCEPTS
// ============================================================

/*
1. Animal is the parent class.

2. Cat, Dog, and Test extend Animal.

3. All three child classes can call eat() because they inherit
   it from Animal.

4. Cat has its own meow() method.

5. Dog has its own bark() method.

6. Test has its own testing() method.

7. A Cat object cannot call bark() because bark() belongs to Dog.

Example:
c1.bark(); // TypeError: c1.bark is not a function

8. A Dog object cannot call meow() because meow() belongs to Cat.

Example:
c2.meow(); // TypeError: c2.meow is not a function

9. The parent class provides common functionality, and each child
   class provides its own specialized functionality.

INTERVIEW POINT:
Hierarchical inheritance means one parent class is extended by
multiple child classes.
*/