let a = "a  d  t y  a ";
let space = " ";
let count = 0;

for (let i = 0; i < a.length; i++) {
    if (space === a.charAt(i)) {
        count++;
    }
}

console.log("Number of white spaces are " + count);

//using inbuilt method

let a1 = "a  d  t y  a ";

let count1 = a.split("").filter(char => char === " ").length;

console.log("Number of white spaces are " + count1);