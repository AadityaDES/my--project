// ============================================================
// 1. READING A STRING USING for LOOP
// ============================================================

const process = require("node:process");

let str = "Hello"; // Index: 0 1 2 3 4

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

console.log("-".repeat(30));


// ============================================================
// 2. READING A STRING USING while LOOP
// ============================================================

str = "Hello";

let i = 0;

while (i < str.length) {
    console.log(str[i]);
    i++;
}

console.log("-".repeat(30));


// ============================================================
// 3. READING A STRING USING do...while LOOP
// ============================================================

str = "Hello";
i = 0;

do {
    console.log(str[i]);
    i++;
} while (i < str.length);

console.log("-".repeat(30));


// ============================================================
// 4. READING A STRING USING for...of LOOP
// ============================================================

// for...of directly returns each character.

str = "Hello";

for (let char of str) {
    console.log(char);
}

console.log("-".repeat(30));


// ============================================================
// 5. READING A STRING USING for...in LOOP
// ============================================================

// for...in returns the enumerable index keys as strings.

str = "Hello";

for (let index in str) {
    console.log("Index:", index, "Character:", str[index]);
}

console.log("-".repeat(30));


// ============================================================
// 6. REVERSING A COMPLETE STRING
// ============================================================

let lang = "JavaScript";

for (let i = lang.length - 1; i >= 0; i--) {
    process.stdout.write(lang[i]);
}

console.log();
console.log("-".repeat(30));


// ============================================================
// 7. REVERSING EACH WORD USING split()
// ============================================================

let str2 = "JavaScript Playwright Testing";

let words = str2.split(" ");
let result = "";

for (let i = 0; i < words.length; i++) {

    let reverseWord = "";

    for (let j = words[i].length - 1; j >= 0; j--) {
        reverseWord = reverseWord + words[i][j];
    }

    result = result + reverseWord + " ";
}

console.log(result.trim());

// Output:
// tpircSavaJ thgirwyalP gnitseT

console.log("-".repeat(30));


// ============================================================
// 8. REVERSING EACH WORD WITHOUT split()
//    Using only ONE loop variable
// ============================================================

str2 = "JavaScript Playwright Testing";

let word = "";
let result1 = "";

for (let i = 0; i <= str2.length; i++) {

    if (i < str2.length && str2[i] !== " ") {
        word = str2[i] + word;
    } else {
        result1 = result1 + word + " ";
        word = "";
    }
}

console.log(result1.trim());

// Output:
// tpircSavaJ thgirwyalP gnitseT

console.log("-".repeat(30));