let arr = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        sum = sum + arr[i];
    }
}

console.log("Sum of odd numbers:", sum);

//Add Only Even Number

// let arr = [1, 2, 3, 4, 5, 6, 7];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         sum = sum + arr[i];
//     }
// }

// console.log("Sum of even numbers:", sum);