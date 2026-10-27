
let a = "listen";
let b = "silent";

// Convert string to character array
let a1 = a.split("");
let b1 = b.split("");

// Sort in ascending order
a1.sort();
b1.sort();

// Compare both sorted strings
let result = a1.join("") === b1.join("");

if (result) {
    console.log("String is anagram");
} else {
    console.log("String is not anagram");
}
