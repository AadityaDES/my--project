let num = 11;
let count = 0;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        count++;
        break;
    }
}

if (count === 0) {
    console.log("Number is prime number");
} else {
    console.log("Number is not prime number");
}