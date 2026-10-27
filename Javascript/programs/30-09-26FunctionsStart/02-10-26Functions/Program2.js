
// REAL-TIME EXAMPLE: BANK WITHDRAWAL
// GLOBAL SCOPE, FUNCTION SCOPE, BLOCK SCOPE AND RETURN
// ============================================================

// Global Scope
let accountBalance = 5000;
const BANK_NAME = "HDFC Bank";

// WITHDRAW FUNCTION
// ============================================================
function withdraw(amount) {

    // Function Scope
    let transactionId = "TXN" + Date.now();


    // ========================================================
    // 1. CHECK INSUFFICIENT BALANCE
    // ========================================================

    if (amount > accountBalance) { // 12000 > 5000 -> true

        // Block Scope
        const errorMsg = "Insufficient Balance";

        console.log(errorMsg);

        return errorMsg;
    }


    // ========================================================
    // 2. CHECK VALID AMOUNT
    // ========================================================

    if (amount > 0) {

        // Block Scope
        let newBalance = accountBalance - amount;

        accountBalance = newBalance;

        console.log("Transaction ID:", transactionId);

        return `${BANK_NAME}: ₹${amount} Debited. Remaining Balance: ₹${newBalance}`;
    }


    // ========================================================
    // 3. INVALID AMOUNT
    // ========================================================

    return "Invalid Amount";
}


// ============================================================
// FUNCTION CALL
// ============================================================

let result = withdraw(12000);

console.log(result);

console.log("Current Account Balance:", accountBalance);