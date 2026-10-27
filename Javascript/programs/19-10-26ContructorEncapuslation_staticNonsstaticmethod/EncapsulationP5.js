/*
1. What is OOPs?
OOPs stands for Object-Oriented Programming. It is a programming approach in which code is organized around classes and objects.

The four main pillars of OOPs are:
1. Encapsulation
2. Inheritance
3. Polymorphism
4. Abstraction

*/

// ============================================================
// ENCAPSULATION IN JAVASCRIPT
// ============================================================

/*
Encapsulation:
Wrapping data and methods into a single class and controlling
access to sensitive data.

In this example:
- #balance is a private field.
- #pin is a private field.
- deposit(), withdraw(), and getBalance() are public methods.
*/

/*

3. Encapsulation

Encapsulation is the process of combining data and methods into a single unit, such as a class, and 
controlling access to that data.

It helps protect sensitive information from direct access or unauthorized modification.

Real-world example: An ATM machine allows users to deposit money, withdraw money, and check their 
balance without directly modifying the bank's internal account balance.

Important concepts
- Public properties and methods can be accessed through the object.
- Private fields use the # prefix.
- Private fields can only be accessed from within the declaring class.
- Public methods provide controlled access to private data.
- Getters read values, while setters can validate and update values.

*/
class BankAccount {

    // Private fields: cannot be accessed directly outside the class
    #balance;
    #pin;

    constructor(holderName, initialBalance, pin) {
        this.holderName = holderName;
        this.#balance = initialBalance;
        this.#pin = pin;
    }

    // Public method to check the balance after PIN validation
    getBalance(pin) {
        if (pin !== this.#pin) {
            return "Invalid PIN";
        }

        return this.#balance;
    }

    // Public method to deposit money
    deposit(amount) {
        if (amount <= 0) {
            console.log("Invalid amount");
            return;
        }

        this.#balance += amount;

        console.log(`Deposited: ₹${amount}`);
        console.log(`Available Balance: ₹${this.#balance}`);
    }

    // Public method to withdraw money
    withdraw(amount, pin) {
        if (pin !== this.#pin) {
            console.log("Invalid PIN");
            return;
        }

        if (amount <= 0) {
            console.log("Invalid withdrawal amount");
            return;
        }

        if (amount > this.#balance) {
            console.log("Insufficient balance");
            return;
        }

        this.#balance -= amount;

        console.log(`Withdrawn: ₹${amount}`);
        console.log(`Available Balance: ₹${this.#balance}`);
    }
}


// ============================================================
// CREATING AN OBJECT
// ============================================================

const account1 = new BankAccount("Amit", 40000, 4567);

// Accessing the balance through a public method
console.log(account1.getBalance(4567));

// Depositing money
account1.deposit(4000);

// Withdrawing money using the correct PIN
account1.withdraw(2000, 4567);

// Direct access to private fields is not allowed
// console.log(account1.#balance); // SyntaxError
// console.log(account1.#pin);     // SyntaxError