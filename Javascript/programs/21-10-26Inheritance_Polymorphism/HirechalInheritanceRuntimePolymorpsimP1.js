// ============================================================
// HIERARCHICAL INHERITANCE + METHOD OVERRIDING
// REAL-TIME EXAMPLE: PAYMENT SYSTEM
// ============================================================

/*
HIERARCHICAL INHERITANCE:

One parent class has multiple child classes.

              Payment
             /   |    \
 CreditCardPayment UPIpayment CashPayment

METHOD OVERRIDING:
Each child class defines its own pay() method,
which overrides the inherited pay() method from Payment.

RUNTIME POLYMORPHISM:
The same method name, pay(), performs different actions
depending on the object.
*/

// ============================================================
// PARENT CLASS
// ============================================================

class Payment {

    constructor(amount) {
        this.amount = amount;
    }

    showAmount() {
        console.log("Payment Amount: ₹" + this.amount);
    }

    pay() {
        console.log("Processing payment...");
    }
}

// ============================================================
// CHILD CLASS 1: CREDIT CARD PAYMENT
// ============================================================

class CreditCardPayment extends Payment {

    pay() {
        console.log(`Paid ₹${this.amount} using Credit Card`);
    }
}

// ============================================================
// CHILD CLASS 2: UPI PAYMENT
// ============================================================

class UPIPayment extends Payment {

    pay() {
        console.log(`Paid ₹${this.amount} using UPI`);
    }
}

// ============================================================
// CHILD CLASS 3: CASH PAYMENT
// ============================================================

class CashPayment extends Payment {

    pay() {
        console.log(`Paid ₹${this.amount} using Cash`);
    }
}

// ============================================================
// OBJECT 1: CREDIT CARD PAYMENT
// ============================================================

const c1 = new CreditCardPayment(30000);

c1.showAmount();
c1.pay();

console.log("-".repeat(30));

// ============================================================
// OBJECT 2: UPI PAYMENT
// ============================================================

const c2 = new UPIPayment(20000);

c2.showAmount();
c2.pay();

console.log("-".repeat(30));

// ============================================================
// OBJECT 3: CASH PAYMENT
// ============================================================

const c3 = new CashPayment(10000);

c3.showAmount();
c3.pay();

/*
EXPECTED OUTPUT:

Payment Amount: ₹30000
Paid ₹30000 using Credit Card
------------------------------
Payment Amount: ₹20000
Paid ₹20000 using UPI
------------------------------
Payment Amount: ₹10000
Paid ₹10000 using Cash
*/

// ============================================================
// DEMONSTRATING RUNTIME POLYMORPHISM
// ============================================================

function processPayment(payment) {
    payment.showAmount();
    payment.pay();
}

console.log("RUNTIME POLYMORPHISM");

processPayment(c1);
processPayment(c2);
processPayment(c3);

/*
EXPLANATION:

1. Payment is the parent class.
2. CreditCardPayment, UPIPayment, and CashPayment are child classes.
3. All child classes inherit showAmount() from Payment.
4. Each child class overrides the pay() method.
5. processPayment() accepts different payment objects.
6. When payment.pay() executes, the appropriate child method runs.

IMPORTANT:
- Hierarchical inheritance describes the class structure.
- Method overriding describes redefining an inherited method.
- Runtime polymorphism describes how the appropriate implementation
  is selected for different objects.
*/