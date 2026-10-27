// ============================================================
// ABSTRACTION IN JAVASCRIPT
// REAL-TIME EXAMPLE: ATM
// ============================================================

/*
DEFINITION:
Abstraction is an OOP concept that hides unnecessary
implementation details and exposes only essential
functionality to the user.

In simple words:
We focus on WHAT an object does rather than HOW it does it.

REAL-TIME EXAMPLE:
When using an ATM:
1. We insert a card.
2. We enter a PIN.
3. We withdraw money.

We do not need to understand all the internal processing
that takes place during a withdrawal.

WHY DO WE USE ABSTRACTION?
1. Hides unnecessary implementation details.
2. Reduces complexity for the user.
3. Makes code easier to understand and maintain.

IMPORTANT:
JavaScript does not have a built-in abstract keyword.

The following is invalid JavaScript:

abstract class Payment {
    abstract pay();
}

We can demonstrate abstraction using public methods
and hidden internal implementation.
*/

// ============================================================
// ATM CLASS
// ============================================================

class ATM {

    // Private method: internal implementation
    #processTransaction(amount) {
        console.log(`Processing transaction for ₹${amount}`);
        console.log("Transaction completed");
    }

    // Public method: functionality exposed to the user
    withdraw(amount) {
        console.log(`Withdrawing ₹${amount}`);

        // Call the private method internally
        this.#processTransaction(amount);
    }
}

// ============================================================
// CREATING AN OBJECT
// ============================================================

const atm = new ATM();

atm.withdraw(2000);

/*
OUTPUT:

Withdrawing ₹2000
Processing transaction for ₹2000
Transaction completed

EXPLANATION:
1. The user calls atm.withdraw(2000).
2. The withdraw() method is the public operation.
3. The private #processTransaction() method performs
   internal processing.
4. The user does not need to call the private method directly.
*/

// ============================================================
// ABSTRACTION VS ENCAPSULATION
// ============================================================

/*
ABSTRACTION:
- Hides implementation complexity.
- Focuses on WHAT an object does.
- Example: atm.withdraw(2000).

ENCAPSULATION:
- Bundles data and methods and controls access to internal state.
- Focuses on protecting and controlling access to data.
- Example: #processTransaction() is private and cannot be
  called directly from outside the ATM class.

IMPORTANT:
Private methods help implement encapsulation and can also
support abstraction by hiding internal implementation details.
One example can demonstrate both concepts.
*/