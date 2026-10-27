
let ar = [1, 2, 3, 5, 6];
let missing = [];

for (let i = 1; i <= 6; i++) {
    if (!ar.includes(i)) {
        missing.push(i);
    }
}

console.log("Missing number:", missing);

let arr = [1, 2, 3, 5, 6];

let missing1 = Array.from(
    { length: 6 },
    (_, i) => i + 1
).filter(num => !arr.includes(num));

console.log("Missing number:", missing1);
