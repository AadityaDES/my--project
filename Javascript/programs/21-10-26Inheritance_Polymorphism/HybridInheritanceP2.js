// ============================================================
// HYBRID INHERITANCE IN JAVASCRIPT
// ============================================================

/*
Definition:
Hybrid inheritance is a combination of two or more types
of inheritance.

In this example:
1. Hierarchical inheritance: Animal -> Dog and Animal -> Cat
2. Multilevel inheritance: Animal -> Dog -> Puppy
*/

// ============================================================
// PARENT CLASS
// ============================================================

class Animal {
    eat() {
        console.log("Animal is eating");
    }
}

// ============================================================
// CHILD CLASS 1: DOG (Single Inheritance)
// ============================================================

class Dog extends Animal {

    bark() {
        console.log("Dog is barking");
    }
}

// ============================================================
// CHILD CLASS 2: CAT (Hierarchical Inheritance)
// ============================================================

class Cat extends Animal {

    meow() {
        console.log("Cat is meowing");
    }
}

// ============================================================
// CHILD CLASS 3: PUPPY (Multilevel Inheritance)
// ============================================================

class Puppy extends Dog {

    play() {
        console.log("Puppy is playing");
    }
}

// ============================================================
// OBJECT 1: DOG
// ============================================================

const dog = new Dog();

dog.eat();  // Inherited from Animal
dog.bark(); // Dog's own method

console.log("-".repeat(30));

// ============================================================
// OBJECT 2: CAT
// ============================================================

const cat = new Cat();

cat.eat();  // Inherited from Animal
cat.meow(); // Cat's own method

console.log("-".repeat(30));

// ============================================================
// OBJECT 3: PUPPY
// ============================================================

const p1 = new Puppy();

p1.eat();  // Inherited from Animal through Dog
p1.bark(); // Inherited from Dog
p1.play(); // Puppy's own method

// ============================================================
// EXPECTED OUTPUT
// ============================================================

/*
Animal is eating
Dog is barking
------------------------------
Animal is eating
Cat is meowing
------------------------------
Animal is eating
Dog is barking
Puppy is playing
*/

// ============================================================
// INHERITANCE STRUCTURE
// ============================================================

/*
              Animal
              /    \
            Dog     Cat
            |
           Puppy

Hierarchical: Animal -> Dog and Animal -> Cat
Multilevel:   Animal -> Dog -> Puppy

Therefore, this example demonstrates hybrid inheritance.
*/