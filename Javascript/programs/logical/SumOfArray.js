
let ar = [10, 20, 30, 40, 50];
let sum = 0;

for (let i = 0; i < ar.length; i++) {
    sum = sum + ar[i];
}
console.log("Sum:", sum);

//using reduce method


let arr = [10, 20, 30, 40, 50];

let sum1 = arr.reduce((total, num) => total + num, 0);

console.log("Sum:", sum1);
