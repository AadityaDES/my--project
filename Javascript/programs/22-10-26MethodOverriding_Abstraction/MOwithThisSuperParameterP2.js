// ============================================================
// METHOD OVERRIDING WITH this AND super
// ============================================================

/*
this  -> Refers to the current object.
super -> Provides access to parent class methods.
*/

// ============================================================
// EXAMPLE 1: EMPLOYEE AND MANAGER
// ============================================================

class Employee {

    displayDetails() {
        console.log("Displaying employee details");
    }
}

class Manager extends Employee {

    displayDetails() {
        console.log("Displaying manager details");
    }

    demo() {

        // Calls the current class method
        this.displayDetails();

        // Calls the parent class method
        super.displayDetails();
    }
}

const manager = new Manager();

manager.displayDetails();
console.log("-----------------");

manager.demo();

/*
OUTPUT:

Displaying manager details
-----------------
Displaying manager details
Displaying employee details

EXPLANATION:

manager.displayDetails()
    Calls the Manager implementation.

this.displayDetails()
    Calls the method on the current object.
    Since Manager overrides displayDetails(), the Manager
    implementation executes.

super.displayDetails()
    Calls the Employee implementation.
*/


// ============================================================
// EXAMPLE 2: METHOD OVERRIDING WITH INPUT PARAMETERS
// PAYMENT SYSTEM
// ============================================================

class Payment {

    pay(amount) {
        console.log(`Processing payment of ₹${amount}`);
    }
}

class CreditCardPayment extends Payment {

    pay(amount) {

        // Call the parent implementation
        super.pay(amount);

        // Add child-specific behavior
        console.log(`Paid ₹${amount} using Credit Card`);
    }
}

class UPIPayment extends Payment {

    pay(amount) {

        // Call the parent implementation
        super.pay(amount);

        // Add child-specific behavior
        console.log(`Paid ₹${amount} using UPI`);
    }
}

// ============================================================
// CREATING OBJECTS
// ============================================================

console.log("-----------------");

const p1 = new Payment();
p1.pay(3000);

console.log("-----------------");

const p2 = new CreditCardPayment();
p2.pay(2000);

console.log("-----------------");

const p3 = new UPIPayment();
p3.pay(1000);

/*
OUTPUT:

-----------------
Processing payment of ₹3000
-----------------
Processing payment of ₹2000
Paid ₹2000 using Credit Card
-----------------
Processing payment of ₹1000
Paid ₹1000 using UPI
*/

// ============================================================
// IMPORTANT POINTS
// ============================================================

/*
1. Method overriding requires inheritance in these examples.
2. The child class uses extends to inherit from Payment.
3. super.pay(amount) calls the parent implementation.
4. this.methodName() calls the method resolved on the current
   object, which may be an overridden child method.
5. The parent method and child method can both execute when
   the child explicitly calls super.methodName().
*/