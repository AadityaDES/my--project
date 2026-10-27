const process = require("node:process");

console.log("* * * * *");
console.log("* * * * *");
console.log("* * * * *");
console.log("* * * * *");
console.log("* * * * *");

console.log();


for (let i = 1; i <= 3; i++) { //1 ++ //2 //3 - true 4 <= 3 - false

    for (let j = 1; j <= 3; j++) { //false false
        process.stdout.write("*" + " ");
    }
    console.log();//line change
}

// =====================================================
// Example 2 - Nested For Loop
// =====================================================

for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}

/*
Output

i = 1, j = 1
i = 1, j = 2
i = 1, j = 3
i = 2, j = 1
...
*/

console.log("--------------------------------");

// =====================================================
// Example 3 - Square Star Pattern
// =====================================================

/*
* * * * *
* * * * *
* * * * *
* * * * *
* * * * *
*/

let row = 5;

for (let i = 1; i <= row; i++) {
    let pattern = "";
    for (let j = 1; j <= row; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

console.log("--------------------------------");

// =====================================================
// Example 4 - Right Triangle Pattern
// =====================================================

/*
*
* *
* * *
* * * *
* * * * *
*/

for (let i = 1; i <= row; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "* ";
    }
    console.log(line);
}

console.log("--------------------------------");

// Same Pattern using process.stdout.write()

for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ");
    }
    process.stdout.write("\n");
}

console.log("--------------------------------");

// =====================================================
// Example 5 - Inverted Triangle
// =====================================================

/*
* * * * *
* * * *
* * *
* *
*
*/

for (let i = row; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "* ";
    }
    console.log(line);
}

console.log("--------------------------------");

// =====================================================
// Example 6 - Number Triangle
// =====================================================

/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

for (let i = 1; i <= row; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += j + " ";
    }
    console.log(line);
}

console.log("--------------------------------");

// =====================================================
// Example 7 - Continuous Number Triangle
// =====================================================

/*
1
2 3
4 5 6
7 8 9 10
*/

let counter = 1;

for (let i = 1; i <= 4; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += counter + " ";
        counter++;
    }
    console.log(line);
}

console.log("--------------------------------");

// =====================================================
// Example 8 - Reverse Number Pattern
// =====================================================

/*
5 4 3 2 1
4 3 2 1
3 2 1
2 1
1
*/

for (let i = row; i >= 1; i--) {
    let line = "";
    for (let j = i; j >= 1; j--) {
        line += j + " ";
    }
    console.log(line);
}

console.log("--------------------------------");

// =====================================================
// Example 9 - for...of Loop
// =====================================================

let fruits = ["Apple", "Banana", "Orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

// =====================================================
// Example 10 - Character Triangle
// =====================================================

/*
A
A B
A B C
A B C D
A B C D E
*/

for (let i = 1; i <= 5; i++) {
    let line = "";

    for (let j = 1; j <= i; j++) {
        line += String.fromCharCode(64 + j) + " ";
    }

    console.log(line);
}

console.log("--------------------------------");

let arr = [10, 25, 8, 45, 32];

let largest = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}

console.log("Largest number:", largest);