// JavaScript Type Conversion

// Definition:
// Type Conversion is the process of converting one data type
// into another data type.
// JavaScript is a Dynamically Typed Language.
// We do not need to declare the data type of a variable.
// JavaScript determines the data type based on the value
// assigned to the variable.

// ============================================================
// Types of Type Conversion

// JavaScript has two main types of type conversion:
// 1. Implicit Conversion (Automatic)
// 2. Explicit Conversion (Manual)

// 1. Implicit Conversion
// ============================================================

// Definition:
// JavaScript automatically converts one data type into
// another data type when required.

// The conversion is performed automatically by JavaScript.

// Dynamic Typing Example
// ============================================================
//let const var
let x =50; //Number
console.log(typeof x);
x="50";
console.log(typeof x);
x=true;
console.log(typeof x);

//Java vs javascript
//int x1 = 60; //int 
//x = () "60";
//Javascript automatically converts one data type into another whenever required
// ============================================================
// 2. String Conversion with + Operator
// ============================================================

// Rule:
// If one operand of the + operator is a string,
// JavaScript converts the other operand to a string
// and performs string concatenation.
console.log("5" + 2); //52
console.log("5"+2+1)//521
console.log(5+2+"1"); //71

let a="5";
let b ="2";
let c =a +b;
console.log(typeof c);
console.log("===============Arithematic==============")
//2. Arithematic Conversion
// Arithmetic operators other than + generally convert
// values to numbers automatically.

console.log("10"+2); //102
console.log("10" -2); //8
console.log("10"/2); //5
console.log("10"%3); //1

console.log("10"+true); 
console.log('10' - false);
console.log('10' - null);
console.log("Test"-10); //Nan - not a number

//3. Boolean conversion
//Any value user in boolean context is automatically converted into to true or false value

console.log("==========Boolean=============");
//false value
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

console.log("====================");
//Truthy Value

console.log(Boolean(2));
console.log(Boolean(-5));
console.log(Boolean("Hi"));
console.log(Boolean({1:10, 2: 20}));//Object(store data in key value pair)
console.log(Boolean([10,20]));//Array

console.log("==================");
//null in numeric operation
//Null convert to 0
console.log(null +10);

//Loose Equality
//compare only value javascript perform auto type convertion

console.log("=========Loose Equality===========");
console.log("5"== 5);
console.log(0== false);
console.log(""== false);
console.log(null == 0);
//when comparing null with ==:
//Null is equal only to undefined not to 0, false,"", or any, other
console.log(null == undefined);
console.log(null == false);
console.log("=============");
//Strict equality
//compare both value and data type . No automatic type conversion

console.log("5" === 5); //
console.log(0===false);
console.log(""===false);
console.log(null===undefined);











