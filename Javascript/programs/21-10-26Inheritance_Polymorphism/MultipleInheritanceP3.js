// ============================================================
// MULTIPLE INHERITANCE IN JAVASCRIPT
// REAL-TIME EXAMPLE: SMART HOME SYSTEM
// ============================================================

/*
DEFINITION:

Multiple inheritance is an OOP concept in which one child class
inherits functionality from two or more parent classes.

IMPORTANT:
JavaScript does not support extending multiple classes directly.

Incorrect:
class SmartHome extends SecuritySystem, EntertainmentSystem {}

Alternative:
Use mixins with Object.assign() to combine object methods.

In this example:
1. SecuritySystem provides security functionality.
2. EntertainmentSystem provides entertainment functionality.
3. SmartHome combines both functionalities.
*/

// ============================================================
// SOURCE 1: SECURITY SYSTEM
// ============================================================

const SecuritySystem = {

    lockDoors() {
        console.log("All doors are locked");
    },

    activateAlarm() {
        console.log("Security alarm activated");
    },

    checkSecurity() {
        console.log("Security system is working");
    },

    adjustSound() {
        console.log("Security system sound adjusted");
    }
};

// ============================================================
// SOURCE 2: ENTERTAINMENT SYSTEM
// ============================================================

const EntertainmentSystem = {

    playMusic() {
        console.log("Playing music");
    },

    watchMovie() {
        console.log("Playing a movie");
    },

    adjustSound() {
        console.log("Entertainment volume adjusted");
    }
};

// ============================================================
// CHILD CLASS: SMART HOME
// ============================================================

class SmartHome {

    turnOnLight() {
        console.log("Smart home lights turned on");
    }

    displayStatus() {
        console.log("Smart home is running");
    }
}

// ============================================================
// COMBINING MULTIPLE OBJECTS USING Object.assign()
// ============================================================

Object.assign(
    SmartHome.prototype,
    SecuritySystem,
    EntertainmentSystem
);

/*
Explanation:

Object.assign(target, source1, source2)

1. SmartHome.prototype is the target.
2. SecuritySystem is the first source object.
3. EntertainmentSystem is the second source object.
4. Methods from both objects are copied onto SmartHome.prototype.

IMPORTANT:
Both source objects contain adjustSound().
Since EntertainmentSystem is assigned last, its adjustSound()
overwrites the one from SecuritySystem.
*/

// ============================================================
// CREATING SMART HOME OBJECT
// ============================================================

const home = new SmartHome();

// Security functionality
home.lockDoors();
home.activateAlarm();
home.checkSecurity();

console.log("-".repeat(30));

// Entertainment functionality
home.playMusic();
home.watchMovie();
home.adjustSound();

console.log("-".repeat(30));

// SmartHome's own functionality
home.turnOnLight();
home.displayStatus();

// ============================================================
// EXPECTED OUTPUT
// ============================================================

/*
All doors are locked
Security alarm activated
Security system is working
------------------------------
Playing music
Playing a movie
Entertainment volume adjusted
------------------------------
Smart home lights turned on
Smart home is running
*/

// ============================================================
// IMPORTANT INTERVIEW POINTS
// ============================================================

/*
1. JavaScript supports only one class in an extends clause.

2. Object.assign() copies enumerable own properties from source
   objects to the target object.

3. Methods from source objects become available on SmartHome
   instances because they are copied to SmartHome.prototype.

4. If multiple source objects have the same property name,
   the last source object overwrites earlier values.

5. This technique is commonly called using mixins.
   It provides a way to combine functionality, but it is not
   native multiple class inheritance.
*/