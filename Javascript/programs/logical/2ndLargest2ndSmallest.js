
let a = [10, 25, 5, 40, 30];
let largest = a[0];
let secondLargest = a[0];

// Find largest number
for (let i = 0; i < a.length; i++) {
    if (a[i] > largest) {
        largest = a[i];
    }
}

// Find second largest number
for (let i = 0; i < a.length; i++) {
    if (a[i] > secondLargest && a[i] != largest) {
        secondLargest = a[i];
    }
}

console.log("Largest number:", largest);
console.log("Second largest number:", secondLargest);


// let a = [10, 25, 5, 40, 30];
// let smallest = a[0];
// let secondSmallest = a[0];

// // Find smallest number
// for (let i = 0; i < a.length; i++) {
//     if (a[i] < smallest) {
//         smallest = a[i];
//     }
// }

// // Find second smallest number
// secondSmallest = largest = a[0];

// for (let i = 0; i < a.length; i++) {
//     if (a[i] > smallest && (secondSmallest == smallest || a[i] < secondSmallest)) {
//         secondSmallest = a[i];
//     }
// }

// console.log("Smallest number:", smallest);
// console.log("Second smallest number:", secondSmallest);
