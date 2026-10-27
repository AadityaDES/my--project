let ar = [10, 5, 25, 3, 18, 40, 2];

// Largest number
let largest = Math.max(...ar);

// Smallest number
let smallest = Math.min(...ar);

console.log("Largest number:", largest);
console.log("Smallest number:", smallest);

//using loop

let arr = [10, 5, 25, 3, 18, 40, 2];

let largest1 = arr[0];                       //assume at index=0 largest no.

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest1) {
        largest1 = arr[i];
    }
}
console.log("Largest number:", largest1);
