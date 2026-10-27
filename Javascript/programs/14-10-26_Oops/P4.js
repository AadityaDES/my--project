// ============================================================
// BANK ACCOUNT MANAGEMENT SYSTEM
// ============================================================

/*
REQUIREMENTS:

1. Deposit:
   - The amount must be greater than 0.
   - The deposited amount should be added to the current balance.

2. Withdraw:
   - The amount must be greater than 0.
   - The withdrawal amount must not exceed the available balance.

3. Check Balance:
   - Display account holder name, account number, and current balance.

4. Print Account Statement:
   - Display all credit and debit transactions.
   - Display the available balance.
*/


// ============================================================
// 1. CREATING THE BANK ACCOUNT CLASS
// ============================================================

class BankAccount {

    /*
    CONSTRUCTOR

    Executes automatically when an object is created.

    Initializes:
    - Account holder name
    - Account number
    - Initial balance
    - Transaction history
    */

    constructor(accountHolder, accountNumber, balance) {

        this.accountHolder = accountHolder;
        this.accountNumber = accountNumber;
        this.balance = balance;

        // Stores all deposit and withdrawal transactions
        this.transactions = [];
    }


    // ========================================================
    // 2. DEPOSIT METHOD
    // ========================================================

    /*
    Condition:
    The deposit amount must be greater than 0.
    */

    deposit(amount) {

        // Validate the deposit amount
        if (amount <= 0) {
            console.log("Invalid deposit amount");
            return;
        }

        // Add the deposit amount to the current balance
        this.balance += amount;

        // Store the transaction details in the transaction array
        this.transactions.push({
            type: "Credit",
            amount: amount,
            date: new Date()
        });

        // Display the transaction confirmation
        console.log(`₹${amount} deposited successfully`);
        console.log(`Current balance: ₹${this.balance}`);
    }


    // ========================================================
    // 3. WITHDRAW METHOD
    // ========================================================

    /*
    Conditions:
    - The withdrawal amount must be greater than 0.
    - The withdrawal amount must not exceed the current balance.
    */

    withdraw(amount) {

        console.log("---------------------------------------");

        // Validate the withdrawal amount
        if (amount <= 0) {
            console.log("Invalid withdrawal amount");
            return;
        }

        // Check whether sufficient balance is available
        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }

        // Deduct the withdrawal amount from the current balance
        this.balance -= amount;

        // Store the withdrawal transaction
        this.transactions.push({
            type: "Debit",
            amount: amount,
            date: new Date()
        });

        // Display the transaction confirmation
        console.log(`₹${amount} withdrawn successfully`);
        console.log(`Current balance: ₹${this.balance}`);

        console.log("---------------------------------------");
    }


    // ========================================================
    // 4. CHECK BALANCE METHOD
    // ========================================================

    /*
    Displays the account holder's details and current balance.
    */

    getBalance() {

        console.log("---------------------------------------");

        console.log(`Account Holder: ${this.accountHolder}`);
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Current Balance: ₹${this.balance}`);

        console.log("---------------------------------------");
    }


    // ========================================================
    // 5. PRINT ACCOUNT STATEMENT METHOD
    // ========================================================

    /*
    Displays:
    - Account holder details
    - Transaction history
    - Transaction type
    - Transaction amount
    - Transaction date
    - Available balance
    */

    getStatement() {

        console.log("---------------------------------------");

        console.log(`Account Holder: ${this.accountHolder}`);
        console.log(`Account Number: ${this.accountNumber}`);

        console.log("---------------------------------------");
        console.log("TRANSACTION HISTORY");
        console.log("---------------------------------------");

        // Check whether any transactions have been recorded
        if (this.transactions.length === 0) {
            console.log("No transactions available");
        }

        // Iterate through the transaction history
        for (let transaction of this.transactions) {

            console.log(
                `${transaction.type} | ₹${transaction.amount} | ${transaction.date}`
            );
        }

        // Display the final available balance
        console.log(`Available Balance: ₹${this.balance}`);

        console.log("---------------------------------------");
    }
}


// ============================================================
// 6. CREATING A BANK ACCOUNT OBJECT
// ============================================================

// Creating an object with account holder details and initial balance
const account1 = new BankAccount("Rahul Patil", 47474646464, 50000);


// ============================================================
// 7. CHECKING THE INITIAL BALANCE
// ============================================================

account1.getBalance();


// ============================================================
// 8. PERFORMING DEPOSIT TRANSACTIONS
// ============================================================

account1.deposit(10000);
account1.getBalance();


// ============================================================
// 9. PERFORMING WITHDRAWAL TRANSACTIONS
// ============================================================

account1.withdraw(3000);
account1.withdraw(3000);


// ============================================================
// 10. PERFORMING ADDITIONAL DEPOSITS
// ============================================================

account1.deposit(2000);
account1.deposit(12000);


// ============================================================
// 11. PRINTING THE ACCOUNT STATEMENT
// ============================================================

account1.getStatement();