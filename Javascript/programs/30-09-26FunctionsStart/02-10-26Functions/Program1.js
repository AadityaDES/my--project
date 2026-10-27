// 1. LOCAL SCOPE - let
// ============================================================

// A variable declared inside a function is locally scoped.
// It can be accessed only inside that function and its inner scopes.

function blockScopeFunction() {

    let localVar = "I am a local variable";

    console.log(localVar);
}

blockScopeFunction();

// console.log(localVar);
// ReferenceError: localVar is not defined


// ============================================================
// 2. FUNCTION SCOPE - var

// A variable declared using var inside a function
// is function-scoped.
//
// It can be accessed anywhere inside that function,
// but not outside the function.

function functionScopeFunction1() {

    var functionScopedVar = "I am a function-scoped variable";

    console.log(functionScopedVar);
}

functionScopeFunction1();

// console.log(functionScopedVar);
// ReferenceError: functionScopedVar is not defined


console.log("------------------------3. GLOBAL SCOPE---------------------------------")
// A global variable is declared outside a function.
// It can be accessed inside functions and outside them,
// subject to the applicable scope rules.


let globalVar = "I am Global";

function outerFunction() {

    // Function-scoped variable
    let funVar = "I am Function scope";

    if (true) {

        // var is function-scoped, NOT block-scoped
        var leakVar = "I am accessible outside the block";

        // let is block-scoped
        let blockLet = "I stay inside the block";

        // const is also block-scoped
        const blockConst = "I also stay inside the block";

        console.log(globalVar);
        console.log(funVar);
        console.log(leakVar);
        console.log(blockLet);
        console.log(blockConst);
    }

    // Global variable is accessible here
    console.log(globalVar);

    // Function-scoped var is accessible here
    console.log(leakVar);

    // These variables are not accessible here:
    // console.log(blockLet);
    // ReferenceError: blockLet is not defined

    // console.log(blockConst);
    // ReferenceError: blockConst is not defined
}


// Global variable is accessible outside the function
console.log(globalVar);

// console.log(leakVar);
// ReferenceError: leakVar is not defined

outerFunction();