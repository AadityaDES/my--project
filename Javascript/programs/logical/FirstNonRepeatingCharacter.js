//Inbuilt method->filter and reduce

let str = "aabbcde";

let result = str.split("").find(
    char => str.split("").filter(c => c === char).length === 1
);

console.log("First non-repeating character:", result);

//By Using For Loop

let str1 = "aabbcde";
let result1 = "";

for (let i = 0; i < str1.length; i++) {
    let count = 0;

    for (let j = 0; j < str1.length; j++) {
        if (str1[i] === str1[j]) {
            count++;
        }
    }

    if (count === 1) {
        result = str1[i];
        break;
    }
}

console.log("First non-repeating character:", result);
