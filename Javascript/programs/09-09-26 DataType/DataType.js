//DataTypes in Javascript
//A data types tells javascript what kind of value is stored in a variable
//Name - test/String(Raj)
//Your age a number - 30

//javascript has two types of dataType
/*1.Primitive datatypes
1.Number
2.String
3.Boolean
4.Undefined
5.Null
6.Biginy
7.Symbol

Non Primitive data types
1.Object
2.Array
3.Function
*/
//1.Number
//Integer Number
let age=40;
console.log(age);
console.log(typeof age);

//decimal (floating point)
let price = 89.10;
console.log(price);
console.log(typeof price);

// //Negative Number
let temperature= -10;
console.log(temperature);
console.log(typeof temperature);

let a = 10;
let b = 20;
let sum = a+b;
console.log("Addition :" +sum);

let a1=100;
let b1=20;
let sub=a1-b1;
console.log("Subtraction :" + sub);

// //Module (%)
let reminder =15%5;
console.log(reminder);

let itemPrice = 200;
let quantity = 3;
let discount= 50;

let subtotal =itemPrice*quantity;
let totalAfterDiscount=subtotal - discount;
let tax=totalAfterDiscount * 0.18;
let finalBill= totalAfterDiscount +tax;

console.log();

console.log("Subtotal:" + subtotal);
console.log("After discount :"+totalAfterDiscount);
console.log("GST :"+ tax);
console.log("Final Bill :" + finalBill);

console.log()
//String - A string is sequences of characters enlosed inside quotes
//it is used to stored text, //num,char,special characters, Space

//There are 3 ways to create String
let s1='Single Quotes';
let s2="Double Quotes";
let s3='Backticks';
console.log(s1);
console.log(s2);
console.log(s3);
console.log();
console.log(typeof s1);
console.log(typeof s2);
console.log(typeof s3);

//String Concatination
let firstName = "John";
let lastName = "Sharma";

let fullName="Hello" + firstName +" " +lastName;
console.log(fullName);
console.log();

let modern=`Hello ${firstName} ${lastName}`;
console.log(modern);

let name="Rahul";
let message =`Hello ${name}`;
console.log(message);

let age1=40;
let text=`I am ${age1} years old`;
console.log(text);
//Backticks use for concatination and to pass dynamic value

//Multi Line string

//here error is comes below
/*Let sentence = "Line 1
Line 2
Line 3 "
*/
//So for MultiLine String we use Backticks
let sentence =`Line 1
Line 2
Line 3 `;
console.log(sentence);

//java Array length
let s5="Test";
console.log(s5.length);//Property->return a value or character
console.log(s5.charAt(1));//Method->Perform an action

//3.Boolean
//Boolean can store only two value
//true,false
let isLoggedIn = true;
let hasDiscount = false;
let isAdult = true;
let isSubscribed =false;

console.log(isLoggedIn);
console.log(typeof isLoggedIn);
console.log(typeof isSubscribed);

let age3 = 20;
let isAdult1 =age3 >=18; //true
console.log(isAdult);

let isTeenager = age3 <=18; //false
console.log(isTeenager);

console.log();
console.log(Boolean(1)); //true
console.log(Boolean(0)); //false
console.log(Boolean("")); //false
console.log(Boolean("Hi"))//True

//4. Undefined
//Means a Variables is declared but no value has been assigned
let username;
console.log(username);
console.log(typeof username);

//const user;
//Null - null means an intentinally empty value
let selectItem =null;
console.log(typeof selectItem); //Object -Javascript known bug

//undefined and Null
//Meaning - Variables is declared but no value has been assigned
//Null - null means an intentinally empty value

//Who set -Javascript automatically /you/dev
// Ex - let x/ let x =null
// tyepeof -undefined./ Object

//==(Check Value Only),===(Check datatype and Value)

//BigInt-use when ->2^53-1
let test=123345677n;
console.log(typeof test);

//Symbol 
//Symbol create a unique value

let sym1 = Symbol("Hi");
let sym2 = Symbol("Hi");
let s22 ="Hi";
let s33 ="Hi";

console.log(typeof sym1);
console.log(sym1 == sym2);
console.log(s22 == s33);









//
