 // ============================================================
// METHOD OVERRIDING IN JAVASCRIPT
// ============================================================

/*
1. DEFINITION
============================================================

Method overriding occurs when a child class provides its own
implementation of an instance method that is already defined
in its parent class.

The method name remains the same, but the implementation
in the child class changes the behavior.

PURPOSE:
1. To customize inherited behavior.
2. To provide specialized functionality in child classes.
3. To achieve runtime polymorphism.
4. To reuse existing parent class functionality while
   allowing child classes to behave differently.

IMPORTANT:
Method overriding is related to inheritance.
The child class must inherit from the parent class using extends
for the examples below.


2. BASIC SYNTAX
============================================================

class Parent {
    methodName() {
        // Parent implementation
    }
}

class Child extends Parent {
    methodName() {
        // Child implementation overrides the parent method
    }
}

const obj = new Child();
obj.methodName();

When the method is called on the child object, JavaScript
uses the child's implementation if one exists.
*/


class Payment {

    constructor(amount) {
        this.amount = amount
    }

    pay() {
        console.log(`Processing a general payment`);
    }
}

class CreditCardPayement extends Payment {


    pay() {
        console.log(`Paid ${this.amount} using credit card`);
    }

}

class UPIPayement extends Payment {

    pay() {
        console.log(`Paid ${this.amount} using UPI`);
    }
}

class CashPayment extends Payment {
    pay() {
        console.log(`Paid ${this.amount} using CASH`);
    }
}
const p1 = new Payment(10000);
p1.pay();

const p2 = new CreditCardPayement(10000);
p2.pay();

const p3 = new UPIPayement(10000);
p3.pay();

const p4 = new CashPayment(500);
p4.pay();
