// ============================================================
// ENCAPSULATION USING GETTER AND SETTER
// REAL-TIME EXAMPLE: BANK ACCOUNT
// ============================================================

class BankAccount {

    // Private data
    #balance = 10000;

    // ========================================================
    // GETTER: Read the private balance
    // ========================================================

    get getBalance() {
        return this.#balance;
    }

    // ========================================================
    // SETTER: Update the private balance with validation
    // ========================================================

    set setBalance(value) {

        if (value > 0) {
            this.#balance = value;
        } else {
            console.log("Invalid balance");
        }
    }
}

// Creating an object
const s1 = new BankAccount();

// Updating the balance using the setter
s1.setBalance = 40000;

// Reading the updated balance using the getter
console.log(s1.getBalance);

// Output:
// 40000