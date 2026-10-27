// ============================================================
// STATIC METHOD OVERRIDING IN JAVASCRIPT
// ============================================================

/*
Definition:
A child class can define a static method with the same name
as a static method in the parent class.

Static methods are called using the class name.
*/

// ============================================================
// PARENT CLASS
// ============================================================

class Employee {

    static companyPolicy() {
        console.log("General company policy");
    }
}

// ============================================================
// CHILD CLASS
// ============================================================

class Manager extends Employee {

    static companyPolicy() {
        console.log("Manager's company policy");
    }
}

// Calling static methods

Employee.companyPolicy();
Manager.companyPolicy();

/*
OUTPUT:

General company policy
Manager's company policy
*/

// ============================================================
// STATIC METHOD OVERRIDING USING super
// ============================================================

class TeamLeader extends Employee {

    static companyPolicy() {

        // Call the parent static method
        super.companyPolicy();

        // Add child-specific behavior
        console.log("Additional team leader policy");
    }
}

console.log("------------------------------");

TeamLeader.companyPolicy();

/*
OUTPUT:

------------------------------
General company policy
Additional team leader policy
*/

// ============================================================
// IMPORTANT POINTS
// ============================================================

/*
1. Use the static keyword to declare a static method.
2. Call static methods using the class name.
3. A child class can define a static method with the same name.
4. super.companyPolicy() calls the parent static method.
5. Static methods belong to the class, not to its instances.
*/