// ============================================================
// BLOCK SCOPE AND FUNCTION SCOPE

// A block is any code written inside curly braces { }.
//
// Examples of blocks:
// if { }
// for { }
// while { }
// function { }

// ============================================================
// 1. BLOCK SCOPE - let

// Variables declared using let are block-scoped.
//
// They can be accessed only inside the block
// where they are declared.

if (true) {

    let name = "Akshay";

    console.log(name);
}

// console.log(name);

// Error:
// ReferenceError: name is not defined

// ============================================================
// 2. BLOCK SCOPE - const
// Variables declared using const are also block-scoped.
//
// They can be accessed only inside the block
// where they are declared.

if (true) {

    const PI = 3.14;

    console.log(PI);
}

// console.log(PI);

// Error:
// ReferenceError: PI is not defined


// ============================================================
// 3. var is NOT Block Scoped

// Variables declared using var are NOT block-scoped.
//
// var can be accessed outside the block.

if (true) {

    var str = "JavaScript";

    console.log(str);
}

console.log(str);


// Output:
// JavaScript
// JavaScript


// ============================================================
// FUNCTION SCOPE
// ============================================================

// Variables declared using var are function-scoped.
//
// They can be accessed anywhere inside the function
// where they are declared.

function employee() {

    var company = "Google";

    console.log(company);
}

employee();

// console.log(company);

// Error:
// ReferenceError: company is not defined
//
// Because company is available only inside employee().


// ============================================================
// 4. var Inside a Block Within a Function
// ============================================================

function test() {

    if (true) {

        var city = "Pune";

        console.log(city);
    }

    // var is function-scoped,
    // so city can still be accessed here.

    console.log(city);
}

test();


// Output:
// Pune
// Pune


// ============================================================
// 5. let Inside a Block Within a Function
// ============================================================

function testBlock() {

    if (true) {

        let city = "Pune";

        console.log(city);
    }

    // let is block-scoped,
    // so city cannot be accessed here.

    // console.log(city);

    // Error:
    // ReferenceError: city is not defined
}

testBlock();


// ============================================================
// QUICK SUMMARY
// ============================================================

// let
// → Block scoped
//
// const
// → Block scoped
//
// var
// → Function scoped
//