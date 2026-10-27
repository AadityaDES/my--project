// ============================================================
// MULTILEVEL INHERITANCE IN JAVASCRIPT
// ============================================================

/*
DEFINITION:

Multilevel inheritance is a type of inheritance in which one
class inherits from another class, and a third class inherits
from the second class.

In this example, we have four levels:

LivingBeing
     |
     v
   Animal
     |
     v
    Dog
     |
     v
    Cat

LivingBeing -> Grandparent class
Animal      -> Parent class of Dog
Dog         -> Child class of Animal and parent class of Cat
Cat         -> Child class of Dog


ADVANTAGES OF MULTILEVEL INHERITANCE:

1. Code Reusability:
   Child classes can reuse methods from multiple levels.

2. Less Code Duplication:
   Common methods do not need to be rewritten in every class.

3. Easy Maintenance:
   Common functionality can be maintained in the appropriate
   parent class.

4. Extensibility:
   Each child class can add its own methods.

IMPORTANT RULE:
Inheritance flows from parent to child, not from child to parent.
*/


// ============================================================
// GRANDPARENT CLASS
// ============================================================

class LivingBeing {

    // Common method available to all descendants
    breathe() {
        console.log("Breathing");
    }
}


// ============================================================
// PARENT CLASS
// ============================================================

class Animal extends LivingBeing {

    // Inherits breathe() from LivingBeing

    eat() {
        console.log("Eating...");
    }
}


// ============================================================
// CHILD CLASS
// ============================================================

class Dog extends Animal {

    // Inherits breathe() from LivingBeing
    // Inherits eat() from Animal

    bark() {
        console.log("Barking...");
    }
}


// ============================================================
// FURTHER CHILD CLASS
// ============================================================

class Cat extends Dog {

    // Inherits breathe() from LivingBeing
    // Inherits eat() from Animal
    // Inherits bark() from Dog

    demo() {
        console.log("Demo");
    }
}


// ============================================================
// OBJECT 1: DOG CLASS
// ============================================================

const obj = new Dog();

obj.bark();     // Dog's own method
obj.eat();      // Inherited from Animal
obj.breathe();  // Inherited from LivingBeing

console.log("-".repeat(30));


// ============================================================
// OBJECT 2: ANIMAL CLASS
// ============================================================

const ani = new Animal();

ani.breathe();  // Inherited from LivingBeing
ani.eat();      // Animal's own method

// ani.bark();  // Error: Animal cannot access Dog's method

console.log("-".repeat(30));


// ============================================================
// OBJECT 3: LIVINGBEING CLASS
// ============================================================

const liv = new LivingBeing();

liv.breathe();  // LivingBeing's own method

// liv.eat();    // Error: eat() is not defined in LivingBeing
// liv.bark();   // Error: bark() is not defined in LivingBeing

console.log("-".repeat(30));


// ============================================================
// OBJECT 4: CAT CLASS
// ============================================================

const cat = new Cat();

cat.demo();     // Cat's own method
cat.bark();     // Inherited from Dog
cat.breathe();  // Inherited from LivingBeing
cat.eat();      // Inherited from Animal


// ============================================================
// EXPECTED OUTPUT
// ============================================================

/*
Barking...
Eating...
Breathing
------------------------------
Breathing
Eating...
------------------------------
Breathing
------------------------------
Demo
Barking...
Breathing
Eating...
*/


// ============================================================
// IMPORTANT CONCEPTS
// ============================================================

/*
1. LivingBeing defines breathe().

2. Animal extends LivingBeing:
   Animal can use breathe() and its own eat() method.

3. Dog extends Animal:
   Dog can use breathe(), eat(), and its own bark() method.

4. Cat extends Dog:
   Cat can use breathe(), eat(), bark(), and its own demo() method.

5. A child class can access inherited public methods from its
   ancestor classes.

6. A parent class cannot access methods defined only in its
   child classes.

7. The Cat class adds another level to the inheritance chain,
   making this a multilevel inheritance example.

INTERVIEW POINT:
A class can be a child class at one level and a parent class at
another level. Here, Dog is a child of Animal and a parent of Cat.
*/