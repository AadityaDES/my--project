// ============================================================
// RUNTIME POLYMORPHISM IN JAVASCRIPT
// ============================================================

/*
DEFINITION:

Runtime polymorphism means that the method implementation
to execute is determined at runtime based on the actual object.

METHOD OVERRIDING:

Method overriding occurs when a child class provides its own
implementation of a method already defined in the parent class.

IMPORTANT POINTS:
1. The method name remains the same.
2. The child class changes the method's behavior.
3. The child class inherits from the parent using extends.
4. Runtime polymorphism is demonstrated through method overriding.
*/

// ============================================================
// PARENT CLASS: ANIMAL
// ============================================================

class Animal {

    makeSound() {
        console.log("Animal makes a sound");
    }
}

// ============================================================
// CHILD CLASS 1: DOG
// ============================================================

class Dog extends Animal {

    makeSound() {
        console.log("Dog barks");
    }
}

// ============================================================
// CHILD CLASS 2: CAT
// ============================================================

class Cat extends Animal {

    makeSound() {
        console.log("Cat meows");
    }
}

// ============================================================
// CREATING OBJECTS
// ============================================================

const animal = new Animal();
animal.makeSound();

console.log("--------------------");

const dog = new Dog();
dog.makeSound();

console.log("--------------------");

const cat = new Cat();
cat.makeSound();

/*
OUTPUT:

Animal makes a sound
--------------------
Dog barks
--------------------
Cat meows
*/

// ============================================================
// RUNTIME POLYMORPHISM USING A COMMON FUNCTION
// ============================================================

function playAnimalSound(animal) {
    animal.makeSound();
}

console.log("Runtime Polymorphism:");

playAnimalSound(new Animal());
playAnimalSound(new Dog());
playAnimalSound(new Cat());

/*
OUTPUT:

Runtime Polymorphism:
Animal makes a sound
Dog barks
Cat meows

EXPLANATION:

1. playAnimalSound() accepts different objects.
2. Each object has a makeSound() method.
3. The appropriate implementation executes based on the object.
4. The same method call produces different behaviors.

INTERVIEW POINT:
JavaScript supports runtime polymorphism through method
overriding and dynamic method dispatch.
*/