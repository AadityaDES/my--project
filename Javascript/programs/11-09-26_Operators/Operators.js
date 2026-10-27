
// 1. What is an Operator? 
// An operator is a symbol or keyword that tells JavaScript
// to perform a specific operation on one or more values.

// Operators are used to perform:
// 1. Mathematical operations
// 2. Comparison operations
// 3. Logical operations
// 4. Assignment operations
// 5. Other operations

// Example:
// a + b
//
// a and b → Operands
// +       → Operator
// a + b   → Expression
// ============================================================
// 2. Arithmetic Operators
// ============================================================
// Arithmetic operators are used to perform mathematical calculations.
//
// +   → Addition
// -   → Subtraction
// *   → Multiplication
// /   → Division
// %   → Modulus / Remainder
// **  → Exponentiation

// ============================================================
console.log("3. Addition (+)")
// ============================================================
let a = 17;
let b = 5;
console.log(a + b);
// Output:
// 22

// ============================================================
console.log("4. Subtraction (-)")
// ============================================================
console.log(a - b);
// Output:
// 12

// ============================================================
console.log("5. Multiplication (+)")
// ============================================================
console.log(a * b);
// Output:
// 85
// ============================================================
console.log("6. Division (/)")
// ============================================================
console.log(a / b);
// Output:
// 3.4
// 7. Modulus / Remainder (%)
// The modulus operator returns the remainder after division.
//
// Example:
// 17 % 5
//
// 17 → Dividend
// 5  → Divisor
// 2  → Remainder
console.log(a % b);
// Output:
// 2

// ============================================================
console.log("Exponention");

// 8. Exponentiation (**)
// Exponentiation is used to calculate the power of a number.
// Syntax:
// base ** exponent
// Example:
// 3 ** 4
// Means:
// 3 × 3 × 3 × 3 = 81
console.log(3 ** 4);
// Output:
// 81

// ============================================================
console.log(" 9. Real-Time Example - Bill Calculation")
// ============================================================
let itemPrice = 250;
let quantity = 5;
let discount = 30;
let taxRate = 0.12;

let subtotal = itemPrice * quantity;
let afterDiscount = subtotal - discount;
let taxAmount = afterDiscount * taxRate;
let finalBill = afterDiscount + taxAmount;
console.log("Subtotal: " + subtotal);
console.log("After Discount: " + afterDiscount);
console.log("Tax Amount: " + taxAmount);
console.log("Final Bill: " + finalBill);

// ============================================================
// 10. Increment and Decrement Operators

// ++ → Increment the value by 1
// -- → Decrement the value by 1
// Two forms:
// 1. Prefix
// 2. Postfix

// ============================================================
console.log("===========11)prefix Increment============");
// Prefix:
// First change the value
// Then use the updated value

let count = 5;
console.log(++count);
// Output:
// 6
console.log(count);//(alreay value is 6 so print 6)
// Output:
// 6

// ============================================================
console.log("=======12)postfix Increment=======")
// ============================================================
// Postfix:
// First use the current value
// Then change the value
count = 5;
console.log(count++);
// Output:
// 5
console.log(count);
// Output:
// 6

// ============================================================
console.log("=========prefix Decrement============")
// ============================================================
// Prefix:
// First decrease the value
// Then use the updated value
count = 5;
console.log(--count);
// Output:
// 4
console.log(count);
// Output:
// 4

// ============================================================
console.log("=========postfix Decrement============")
// ============================================================
// Postfix:
// First use the current value
// Then decrease the value

count = 5;
console.log(count--);
// Output:
// 5
console.log(count);
// Output:
// 4

// ============================================================
// 15. Prefix vs Postfix
// ============================================================
/*
Prefix:
++count
--count
First change the value
Then use the value
Postfix:
count++
count--
First use the current value
Then change the value
*/

// ============================================================
// 16. Assignment Operators
// ============================================================
// Assignment operators are used to assign or update values.
//
// =    → Assign
// +=   → Add and assign
// -=   → Subtract and assign
// *=   → Multiply and assign
// /=   → Divide and assign
// %=   → Modulus and assign
// **=  → Exponentiation and assign

// ============================================================
console.log("=========17)assignement(=) Operators=============")
// ============================================================
// = is used to assign a value to a variable.
let score = 100;
console.log(score);
// Output:
// 100
//
// score = 100
// Means: Store 100 inside score.
//
// = does NOT mean comparison.
// Comparison is performed using == or ===.

// ============================================================
// 18. Addition Assignment (+=)
// ============================================================
console.log("=========addition assignment=============")

score += 50;
// Same as:
// score = score + 50
console.log(score);
// Output:
// 150
// ============================================================
console.log("===========19. Subtraction Assignment (-=)==============")

score -= 20;
// Same as:
// score = score - 20
console.log(score);//because now value of score is 150
// Output:
// 130

console.log("===========// 20. Multiplication Assignment=====")
// ============================================================
score *= 2;
// Same as:
// score = score * 2
console.log(score);//alerady value is 130
// Output:
// 260

console.log("=========21)Division Operators===========")
// ============================================================
score /= 4;
// Same as:
// score = score / 4
console.log(score);
// Output:
// 65

 console.log("=========22. Modulus Assignment (%=)")
// ============================================================
score %= 10;
// Same as:
// score = score % 10
console.log(score);
// Output:
// 5

console.log("23. Comparison Operators")
// ============================================================
// Comparison operators are used to compare two values.
// The result of a comparison is always a Boolean:
// true or false
// ==   → Loose equality   ->It Checks only Value
// ===  → Strict equality   ->It Checks Value + DataType
// !=   → Loose not equal   ->Checks Values are not Equal
// !==  → Strict not equal  ->Checks Value/DataType are not Equal
// <    → Less than
// >    → Greater than
// <=   → Less than or equal to
// >=   → Greater than or equal to

console.log("24. =============Loose Equality (==)========================")
// ============================================================
// == compares values and may perform type conversion.
let a1 = 10;
let b1 = "10";
let c1 = 20;
console.log(a1 == b1);
// Output:
// true
//
// 10 → Number
// "10" → String
//
// == converts the values before comparison.
console.log(a1 == 10);
// Output:
// true
console.log(a1 == c1);
// Output:
// false

console.log("=========25. Strict Equality (===)=======")
// ============================================================
// === compares both:
// 1. Value
// 2. Data type
//
// No automatic type conversion is performed.
console.log(a1 === b1);
// Output:
// false
//
// a1 → Number
// b1 → String
//
// Values are the same, but data types are different.
console.log(a1 === 10);
// Output:
// true

console.log("=============26. Greater Than (>)===============")
// ============================================================
console.log(a1 > c1);
// Output:
// false

console.log("================27. Less Than (<)============")
// ============================================================
console.log(a1 < c1);
// Output:
// true

console.log("=========28. Greater Than or Equal To (>=)==========")
// ============================================================
console.log(a1 >= 10);
// Output:
// true
console.log(a1 >= 9);
// Output:
// true

console.log("=========== 29. Less Than or Equal To (<=)============")
// ============================================================
console.log(a1 <= 11);
// Output:
// true
console.log(a1 <= 10);
// Output:
// true

console.log("========30. Loose Equality - Type Conversion Examples=========")
// ============================================================
// == can perform type conversion before comparison.
console.log(0 == false);
// Output:
// true
console.log(0 == true);
// Output:
// false
console.log(1 == false);
// Output:
// false
console.log("" == false);
// Output:
// true
console.log("1" == true);
// Output:
// true

console.log("31. Strict Equality - No Type Conversion");
// ============================================================
console.log(0 === false);
// Output:
// false
console.log("" === false);
// Output:
// false
console.log(1 === true);
// Output:
// false
console.log("1" === 1);
// Output:
// false
console.log(1 === 1);
// Output:
// true

console.log("32)Not Equal (!=)")
// != checks whether two values are not equal.
// It may perform type conversion.
console.log(1 != 1);
// Output:
// false
console.log(1 != 5);
// Output:
// true

console.log("// 33. Strict Not Equal (!==")
// ============================================================
// !== checks whether values or data types are different.
// It does not perform automatic type conversion.
console.log("1" !== 3);
// Output:
// true
console.log(3 !== 3);
// Output:
// false

// ============================================================
// 34. == vs ===
// ============================================================
/*
== → Loose Equality
- Compares values
- Can perform type conversion
- Example: 10 == "10" → true
=== → Strict Equality
- Compares values and data types
- Does not perform type conversion
- Example: 10 === "10" → false
*/

// ============================================================
// 35. != vs !==
// ============================================================
/*
!= → Loose Not Equal
- Compares values
- Can perform type conversion
!== → Strict Not Equal
- Compares value and data type
- Does not perform type conversion
*/

// ============================================================
// 36. Important Rule for Automation Test Engineers
// ============================================================
// Prefer === instead of == for most comparisons.
//
// Prefer !== instead of !=.
//
// Strict comparison checks both value and data type.
// This helps avoid unexpected type conversions.
//
// Example:
// let actual = "100";
// let expected = 100;
//
// actual === expected
// Result → false
//
// This helps identify data type mismatches in test data,
// API responses, and application values.

//Important point
/*
true =1
false=0,"";
*/