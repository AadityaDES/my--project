let a = "engineering";
let repeat = "e";
let count = 0;

for (let i = 0; i < a.length; i++) {
    if (repeat === a.charAt(i)) {
        count++;
    }
}

console.log("Number of repetitive char is " + count);

let a1 = "engineering";
let repeat1 = "e";

let count1 = a.split("").filter(char => char === repeat).length;

console.log("Number of repetitive char is " + count1);