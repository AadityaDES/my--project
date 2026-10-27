//Explicit Type Conversion
//Explicit Type Conversion means manually converting one data type into another using built in javascript
//Functions

//Common functions.
//String()
//Number()
//Boolan()
//parseInt
//pareseFloat

//Integer.partInt(10.5); //10
//int float long double byte sort char boolean - primitive data type - Java
//A wrapper class in java is c class that convert a primitive data type into an an of object

//Non-Primitive -String,class, array ex of 
//String conversion

//convert any value into a string
//String(value);

let s1 = 123;
console.log(typeof s1);

let s2 = String(s1);
console.log(typeof s2);

s3=String(3,14);
console.log(typeof s3);

s4=String(true);
console.log(typeof s4);

//Number Conversion
//Convert a value into a number
//syntax -Number(value)

let n1 = "45";
console.log(typeof n1);

let n2 = Number(n1);
console.log(typeof n2);

let d1 = "123";
let d2 = "123";
//String Concatination
console.log(d1+d2);
//Number addition
console.log(Number(d1)+Number(d2));

//Boolean to Number 

console.log(Number(true));
console.log(Number(false));

//ParseInt
//E. 100.34

//Extract the integer value from a string
console.log(parseInt("123,44"));//123
console.log(parseInt("123PI"));
console.log(parseInt("Hi")); //Nan

//ParseFloat
//Extract the floating point alu from a string
console.log(parseFloat("3, 123"));
console.log(parseFloat("123.44PI"));

//Boolean  arithmetic
//true = 1
//false = 0

console.log(true * 2);
console.log(false * 2);
console.log(true + 5);

