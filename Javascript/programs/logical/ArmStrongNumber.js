let num = 153;
let rem = 0;
let armnum = 0;

for (let i = num; i > 0; i = Math.floor(i / 10)) {
    rem = i % 10;
    armnum = armnum + (rem * rem * rem);
}

console.log(armnum);

if (num === armnum) {
    console.log("Given number is Armstrong number");
} else {
    console.log("Given number is not Armstrong number");
}