// =====================================================
// Example 11 - Continuous Character Triangle
// =====================================================

/*
A
B C
D E F
G H I J
*/

let charCode = 65;

for (let i = 1; i <= 4; i++) {
    let line = "";

    for (let j = 1; j <= i; j++) {
        line += String.fromCharCode(charCode) + " ";
        charCode++;
    }

    console.log(line);
}

console.log("--------------------------------");


// =====================================================
// Example 12 - Reverse Character Triangle
// =====================================================

/*
A B C D E
A B C D
A B C
A B
A
*/

for (let i = 5; i >= 1; i--) {
    let line = "";

    for (let j = 1; j <= i; j++) {
        line += String.fromCharCode(64 + j) + " ";
    }

    console.log(line);
}

console.log("--------------------------------");


// =====================================================
// Example 13 - Reverse Character Pattern
// =====================================================

/*
E D C B A
D C B A
C B A
B A
A
*/

for (let i = 5; i >= 1; i--) {
    let line = "";

    for (let j = i; j >= 1; j--) {
        line += String.fromCharCode(64 + j) + " ";
    }

    console.log(line);
}

console.log("--------------------------------");


// =====================================================
// Example 14 - Number Triangle
// =====================================================

/*
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
*/

let number = 1;

for (let i = 1; i <= 5; i++) {
    let line = "";

    for (let j = 1; j <= i; j++) {
        line += number + " ";
        number++;
    }

    console.log(line);
}

console.log("--------------------------------");


// =====================================================
// Example 15 - Same Number in Each Row
// =====================================================

/*
1
2 2
3 3 3
4 4 4 4
5 5 5 5 5
*/

for (let i = 1; i <= 5; i++) {
    let line = "";

    for (let j = 1; j <= i; j++) {
        line += i + " ";
    }

    console.log(line);
}

console.log("--------------------------------");


// =====================================================
// Example 16 - Reverse Number Triangle
// =====================================================

/*
5
4 4
3 3 3
2 2 2 2
1 1 1 1 1
*/

for (let i = 5; i >= 1; i--) {
    let line = "";

    for (let j = 5; j >= i; j--) {
        line += i + " ";
    }

    console.log(line);
}

console.log("--------------------------------");


// =====================================================
// Example 17 - 1 to 5 in Every Row
// =====================================================

/*
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5
*/

for (let i = 1; i <= 5; i++) {
    let line = "";

    for (let j = 1; j <= i; j++) {
        line += j + " ";
    }

    console.log(line);
}

console.log("--------------------------------");


// =====================================================
// Example 18 - 5 to 1 in Every Row
// =====================================================

/*
5
5 4
5 4 3
5 4 3 2
5 4 3 2 1
*/

for (let i = 1; i <= 5; i++) {
    let line = "";

    for (let j = 5; j >= 6 - i; j--) {
        line += j + " ";
    }

    console.log(line);
}

console.log("--------------------------------");


// =====================================================
// Example 19 - Character Square
// =====================================================

/*
A B C D E
A B C D E
A B C D E
A B C D E
A B C D E
*/

for (let i = 1; i <= 5; i++) {
    let line = "";

    for (let j = 1; j <= 5; j++) {
        line += String.fromCharCode(64 + j) + " ";
    }

    console.log(line);
}

console.log("--------------------------------");


// =====================================================
// Example 20 - Number Square
// =====================================================

/*
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
1 2 3 4 5
*/

for (let i = 1; i <= 5; i++) {
    let line = "";

    for (let j = 1; j <= 5; j++) {
        line += j + " ";
    }

    console.log(line);
}

console.log("--------------------------------");


// =====================================================
// Example 21 - Character Reverse Triangle
// =====================================================

/*
E
D C
C B A
*/

for (let i = 5; i >= 3; i--) {
    let line = "";

    for (let j = i; j >= 3; j--) {
        line += String.fromCharCode(64 + j) + " ";
    }

    console.log(line);
}

for (let i = 1; i <= 5; i++) {
    process.stdout.write("* ".repeat(i) + "\n");
}
//console.log("* ".repeat(40));
//"* "- repate (i) means repeat the string * exactly i times

console.log("Test ".repeat(2));
console.log("* ".repeat(3));