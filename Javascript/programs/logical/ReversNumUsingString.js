let num = 1234;

// 1. Convert number into string
let numString = num.toString();

let revNumString = "";

// 2. Reverse the string
for (let i = numString.length - 1; i >= 0; i--) {
    revNumString = revNumString + numString.charAt(i);
}

// 3. Convert string into number
let revNum = parseInt(revNumString);

console.log(revNum);

let num1 = 1234;

let revNum1 = parseInt(num.toString().split("").reverse().join(""));

console.log(revNum1);