//5)Write a program that takes a number and checks whether it is positive, negative, or zero.

let num=-3
if(num>0){
console.log("Number is Postive ")
} 
else if(num<0){
console.log("Number is negative")
}
else{
    console.log("Number is zero")
}

//6)Write a program to check if a person is eligible to vote (age >= 18).
let age=20;
if(age>=18){
    console.log("Eligible for Vote")
}
else{
    console.log("Not Eligible for Vote")
}
//7)Write a program that takes marks (0–100) and prints the grade.
let marks=0
if(marks >=90 && marks <=100){
console.log("Grade A")
} else if(marks>=85){
console.log("Grade B")
}else if(marks>=70){
    console.log("Grade C")
}else if(marks>=60){
    console.log("Grade D")
}else if(marks>=0){
console.log("fail")
}
else{
    console.log("Invalid Marks")
}
//8)Predict the Output
let x = 10;

if (x > 5) {
    console.log("Greater");
} else if (x > 8) {   
    console.log("Much Greater");
} else {
    console.log("Small");
}
// Important: In an if...else if statement, once a condition is true, the remaining conditions are not checked.
// Even though x > 8 is also true, JavaScript does not reach that condition.

//9)Write a Program to check if a year is a Leap Year or not.
let year = 2024;

if (year % 400 === 0) {
    console.log("Leap Year");
} else if (year % 100 === 0) {
    console.log("Not a Leap Year");
} else if (year % 4 === 0) {
    console.log("Leap Year");
} else {
    console.log("Not a Leap Year");
}
//Q10. Write a program using switch...case that takes a day number (1–7) and prints the day name.
let day = 19;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid day number");
}
//Q11. What will be the output? Explain why.
let fruit = "banana";

switch (fruit) {
    case "Apple":
        console.log("Apple selected");

    case "banana":
        console.log("Banana selected");

    case "mango":
        console.log("Mango selected");
        break;

    default:
        console.log("Unknown fruit");
}
//Q12. Write a program using switch...case to create a simple calculator.
let num1 = 20;
let num2 = 10;
let operator = "+";

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;

    case "-":
        console.log(num1 - num2);
        break;

    case "*":
        console.log(num1 * num2);
        break;

    case "/":
        if (num2 !== 0) {
            console.log(num1 / num2);
        } else {
            console.log("Cannot divide by zero");
        }
        break;

    default:
        console.log("Invalid operator");
}
//Q13. Rewrite the following if...else using a ternary operator.
//  age = 20;

// if (age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }

 age = 20;

age >= 18 ? console.log("Adult") : console.log("Minor");

//Q14. What is the output of this nested ternary?
 num = 0;

let result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";

console.log(result);
//Q15. Write a program to print numbers from 1 to 20 using a for loop.
for (let i = 1; i <= 20; i++) {
    console.log(i);
}
//Q16. Write a program to print all even numbers from 1 to 50.
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
//Q17. Write a program to find the sum of all numbers from 1 to 100 using a for loop.
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}

console.log("Sum =", sum);
//Q18. Write a program to print the multiplication table of a given number (e.g., 7).
 num = 7;

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}
//Q19. Write a program to find the factorial of a given number using a for loop.
 num = 5             //5*4*3*2*1=120
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
}

console.log("Factorial =", factorial);
//Q20. Write a program to reverse a number using a loop.
 num = 12345;
let reverse = 0;

while (num > 0) {
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

console.log("Reverse =", reverse);
//Q21. Write a program using a while loop to print numbers from 10 down to 1.
let i = 10;

while (i >= 1) {
    console.log(i);
    i--;
}
console.log("---Q22. Write a program using a while loop to find the sum of digits of a number.--")
 let numee1= 1234;
let sum1 = 0;

let str = String(numee1);
let k = 0;

while (k < str.length) {
    sum1 += Number(str[k]);
    k++;
}
console.log("Sum of digits =", sum1);

 console.log("Q23: Palindrome Check using While Loop");
 
let num3 = 121;

let str1 = String(num3);
let reverse1 = "";

let l = str1.length - 1;

while (l >= 0) {
    reverse1 = reverse1 + str1[l];
    l--;
}
if (str1 === reverse1) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome");
}
//By Using for Loop
// let num = 121;
// let string=String(num);
// revString="";

// for(let i=string.length-1; i>=0; i--){
//     revString+=string[i]   //Add each character to revString in reverse order
// }
// if(revString == string){
//     console.log("Palindrome") 
// }
// else{
//     console.log("Not a Palindrome")
// }

//Q24. Write a program to print the following star pattern using nested loops
// *
// * *
// * * *
// * * * *
// * * * * *
for (let i = 1; i <= 5; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}
//Q25. Write a program to print a number triangle.
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
for (let i = 1; i <= 5; i++) {
 let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += j + " ";
    }

    console.log(pattern);
}
console.log("---------Q26. Write a program to print an inverted star pattern.--------")
// * * * * *
// * * * *
// * * *
// * *
// *

for(let i=5; i>=1; i--){
    let pattern=""
    for(let j=1; j<=i; j++){
        pattern+="* "
    }
    console.log(pattern)
}

console.log("Q27: Break Example");

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}
console.log("Loop ended");

console.log("Q28: Continue Example");

for (let i = 1; i <= 10; i++) {

    if (i % 3 === 0) {
        continue;
    }

    console.log(i);
}

console.log("Loop ended");

console.log("Q29: Print numbers from 1 to 5");

let j = 1;

while (j <= 5) {

    console.log(j);

    j++;
}

console.log("Loop ended");

console.log("Q30: Prime Number Check");

let nume1 = 2;
let isPrime = true;

// Numbers less than or equal to 1 are not prime
if (nume1 <= 1) {

    isPrime = false;

} else {

    for (let i = 2; i < nume1; i++) {

        if (nume1 % i === 0) {

            isPrime = false;
            break;
        }
    }
}

if (isPrime) {

    console.log(nume1 + " is a Prime number");

} else {

    console.log(nume1 + " is Not a Prime number");
}
//reverse string
 str = "Hello";
let reversed = str.split("").reverse().join("");//split method convert string to array
console.log(reversed);

//reverse string using loop
  str = "Hello";                 // Original string
let rev = "";                    // Empty string to store reversed string

for (let i = str.length - 1; i >= 0; i--) {    // Start from the last index and move towards index 0

    rev += str[i];             // Add each character to rev
}
console.log(rev);              // Output: olleH