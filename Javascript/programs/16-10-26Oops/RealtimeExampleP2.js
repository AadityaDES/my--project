// ============================================================
// BANK ACCOUNT MANAGEMENT SYSTEM
// ============================================================

/*
REQUIREMENTS:

Each bank account should contain:
1. Account holder name
2. Account number
3. Initial balance
4. Transaction history

Operations:
1. Deposit money
2. Withdraw money
3. Check current balance
4. Display transaction statement
*/


// ============================================================
// 1. CREATING THE BANK ACCOUNT CLASS
// ============================================================

class BankAccount {

    /*
    CONSTRUCTOR:

    The constructor executes automatically when an object
    is created using the new keyword.

    It initializes the account details and transaction history.
    */

    constructor(accountHolder, accountNumber, balance) {

        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;

        // Array to store all successful transactions
        this.transaction = [];

        // Display the initial account balance
        console.log("Account Holder:", this.accountHolder);
        console.log("Account Number:", this.accountNumber);
        console.log("Initial Balance: ₹" + this.balance);
        console.log("-".repeat(30));
    }


    // ========================================================
    // 2. DEPOSIT METHOD
    // ========================================================

    /*
    Condition:
    The deposit amount must be greater than zero.
    */

    deposit(amount) {

        // Validate the deposit amount
        if (amount <= 0) {
            console.log("Invalid deposit amount");
            console.log("-".repeat(30));
            return;
        }

        // Add the amount to the current balance
        this.balance += amount;

        // Record the successful deposit
        this.transaction.push({
            type: "Credit",
            amount: amount,
            date: new Date()
        });

        // Display transaction details
        console.log(`₹${amount} deposited successfully`);
        console.log(`Current balance: ₹${this.balance}`);
        console.log("-".repeat(30));
    }


    // ========================================================
    // 3. WITHDRAW METHOD
    // ========================================================

    /*
    Conditions:
    1. Withdrawal amount must be greater than zero.
    2. Withdrawal amount must not exceed the available balance.
    */

    withdraw(amount) {

        // Validate the withdrawal amount first
        if (amount <= 0) {
            console.log("Invalid withdrawal amount");
            console.log("-".repeat(30));
            return;
        }

        // Check whether sufficient balance is available
        if (amount > this.balance) {
            console.log("Insufficient balance");
            console.log("-".repeat(30));
            return;
        }

        // Deduct the withdrawal amount
        this.balance -= amount;

        // Record the successful withdrawal
        this.transaction.push({
            type: "Debit",
            amount: amount,
            date: new Date()
        });

        // Display transaction details
        console.log(`₹${amount} withdrawn successfully`);
        console.log(`Current balance: ₹${this.balance}`);
        console.log("-".repeat(30));
    }


    // ========================================================
    // 4. CHECK BALANCE METHOD
    // ========================================================

    /*
    Displays the current balance and account details.
    */

    getBalance() {

        console.log("Account Holder:", this.accountHolder);
        console.log("Account Number:", this.accountNumber);
        console.log(`Current Balance: ₹${this.balance}`);
        console.log("-".repeat(30));
    }


    // ========================================================
    // 5. GET ACCOUNT STATEMENT
    // ========================================================

    /*
    Displays all successful credit and debit transactions.
    Each transaction includes its type, amount, and date.
    */

    getStatement() {

        console.log("ACCOUNT STATEMENT");
        console.log("Account Holder:", this.accountHolder);
        console.log("Account Number:", this.accountNumber);
        console.log("-".repeat(30));

        // Check whether any transactions exist
        if (this.transaction.length === 0) {
            console.log("No transactions available");
        }

        // Iterate through the transaction array
        for (const trans of this.transaction) {

            console.log(
                `${trans.type} | ₹${trans.amount} | ${trans.date}`
            );
        }

        console.log("-".repeat(30));
        console.log(`Available Balance: ₹${this.balance}`);
        console.log("-".repeat(30));
    }
}


// ============================================================
// 6. CREATING THE FIRST BANK ACCOUNT
// ============================================================

const account1 = new BankAccount(
    "Rohit Sharma",
    4847473733,
    10000
);

// Performing withdrawal transactions
account1.withdraw(1000);
account1.withdraw(10000);

// Performing deposit transactions
account1.deposit(20000);
account1.deposit(30000);

// Additional withdrawal transactions
account1.withdraw(4000);
account1.withdraw(0);

// Displaying the account statement
console.log();
account1.getStatement();

// Displaying the current balance
account1.getBalance();


console.log("==============================");


// ============================================================
// 7. CREATING THE SECOND BANK ACCOUNT
// ============================================================

const account2 = new BankAccount(
    "Virat Kohli",
    7474664,
    20000
);

// Performing withdrawal transactions
account2.withdraw(1000);
account2.withdraw(10000);

// Performing deposit transactions
account2.deposit(20000);
account2.deposit(30000);

// Additional withdrawal transactions
account2.withdraw(4000);
account2.withdraw(0);

// Displaying the account statement
console.log();
account2.getStatement();

// Displaying the current balance
account2.getBalance();