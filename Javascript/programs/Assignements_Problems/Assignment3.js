// ==================================================
// Q1. Remove Duplicates - Method 1: Using Set
// ==================================================

{
    let arr = [1, 2, 3, 2, 4, 3, 5, 1, 6, 5, 4, 7];

    let result = [...new Set(arr)];

    console.log("Q1 Method 1:", result);
}


// ==================================================
// Q1. Remove Duplicates - Method 2: Using filter()
// ==================================================

{
    let arr = [1, 2, 3, 2, 4, 3, 5, 1, 6, 5, 4, 7];

    let result = arr.filter((value, index) => {
        return arr.indexOf(value) === index;
    });

    console.log("Q1 Method 2:", result);
}


// ==================================================
// Q1. Remove Duplicates - Method 3: Using for loop
// ==================================================

{
    let arr = [1, 2, 3, 2, 4, 3, 5, 1, 6, 5, 4, 7];

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    console.log("Q1 Method 3:", result);
}


// ==================================================
// Q2. Find Second Largest Number
// ==================================================

{
    let arr = [45, 89, 23, 89, 56, 12, 78, 34];

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }

    console.log("Q2:", secondLargest);
}


// ==================================================
// Q3. Reverse an Array Without reverse()
// ==================================================

{
    let arr = [1, 2, 3, 4, 5];
    let result = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    console.log("Q3:", result);
}


// ==================================================
// Q4. Find Missing Number
// ==================================================

let Num = [1, 2, 3, 5, 6, 7, 8]
let n = 8
let ExpectedSum= n*(n+1)/2
let ActualSum = 0;

for(i=0; i<Num.length; i++){
    ActualSum+=Num[i];
    
}
let FinalNumebr = ExpectedSum-ActualSum
console.log(FinalNumebr);


// ==================================================
// Q5. Find Duplicate Elements
// ==================================================

{
    let arr = [1, 2, 3, 2, 4, 5, 3, 6, 1, 7, 5];

    let duplicates = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) !== i && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }

    console.log("Q5:", duplicates);
}


// ==================================================
// Q6. Merge Two Sorted Arrays Without sort()
// ==================================================

{
    let arr1 = [1, 3, 5, 7, 9];
    let arr2 = [2, 4, 6, 8, 10];

    let result = [];
    let i = 0;
    let j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    while (i < arr1.length) {
        result.push(arr1[i]);
        i++;
    }

    while (j < arr2.length) {
        result.push(arr2[j]);
        j++;
    }

    console.log("Q6:", result);
}


// ==================================================
// Q7. Find Common Elements, Only arr1 and Only arr2
// ==================================================

{
    let arr1 = [1, 2, 3, 4, 5, 6];
    let arr2 = [4, 5, 6, 7, 8, 9];

    let common = [];
    let onlyArr1 = [];
    let onlyArr2 = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            common.push(arr1[i]);
        } else {
            onlyArr1.push(arr1[i]);
        }
    }

    for (let i = 0; i < arr2.length; i++) {
        if (!arr1.includes(arr2[i])) {
            onlyArr2.push(arr2[i]);
        }
    }

    console.log("Q7 Common:", common);
    console.log("Q7 Only arr1:", onlyArr1);
    console.log("Q7 Only arr2:", onlyArr2);
}


// ==================================================
// Q8. Flatten Nested Array Using Recursion
// ==================================================

{
    let arr = [1, [2, 3], [4, [5, 6]], [[7, 8, [9]]]];

    let result = [];

    function flatten(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                flatten(arr[i]);
            } else {
                result.push(arr[i]);
            }
        }
    }

    flatten(arr);

    console.log("Q8:", result);
}


// ==================================================
// Q9. Two Sum Problem - Target 9
// ==================================================

{
    let arr = [2, 7, 11, 15, 3, 6];
    let target = 9;

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                console.log("Q9 Indices:", i, j);
            }
        }
    }
}


// ==================================================
// Q10. Move All Zeros to End - In Place
// ==================================================

{
    let arr = [0, 1, 0, 3, 12, 0, 5, 0];

    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[index] = arr[i];
            index++;
        }
    }

    while (index < arr.length) {
        arr[index] = 0;
        index++;
    }

    console.log("Q10:", arr);
}


// ==================================================
// Q11. Rotate Array Right by 3 Positions
// ==================================================

{
    let arr = [1, 2, 3, 4, 5, 6, 7];

    for (let i = 0; i < 3; i++) {
        let last = arr[arr.length - 1];

        for (let j = arr.length - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }

        arr[0] = last;
    }

    console.log("Q11 Right Rotation:", arr);
}


// ==================================================
// Q11. Rotate Array Left by 2 Positions
// ==================================================

{
    let arr = [1, 2, 3, 4, 5, 6, 7];

    for (let i = 0; i < 2; i++) {
        let first = arr[0];

        for (let j = 0; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1];
        }

        arr[arr.length - 1] = first;
    }

    console.log("Q11 Left Rotation:", arr);
}


// ==================================================
// Q12. Maximum Sum Subarray
// ==================================================

{
    let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

    let currentSum = arr[0];
    let maxSum = arr[0];

    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > currentSum + arr[i]) {
            currentSum = arr[i];
            tempStart = i;
        } else {
            currentSum = currentSum + arr[i];
        }

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }
    }

    console.log("Q12 Maximum Sum:", maxSum);
    console.log("Q12 Subarray:", arr.slice(start, end + 1));
}


// ==================================================
// Q13. Count Frequency and Find Most Frequent Element
// ==================================================

{
    let arr = ["apple", "banana", "apple", "orange", "banana", "apple", "grape"];

    let frequency = {};

    for (let i = 0; i < arr.length; i++) {
        if (frequency[arr[i]]) {
            frequency[arr[i]]++;
        } else {
            frequency[arr[i]] = 1;
        }
    }

    let mostFrequent = arr[0];

    for (let item in frequency) {
        if (frequency[item] > frequency[mostFrequent]) {
            mostFrequent = item;
        }
    }

    console.log("Q13 Frequency:", frequency);
    console.log("Q13 Most Frequent:", mostFrequent);
}


// ==================================================
// Q14. Array Palindrome - Example 1
// ==================================================

{
    let arr = [1, 2, 3, 2, 1];

    let isPalindrome = true;

    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    console.log("Q14 Example 1:", isPalindrome);
}


// ==================================================
// Q14. Array Palindrome - Example 2
// ==================================================

{
    let arr = [1, 2, 3, 4, 5];

    let isPalindrome = true;

    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            isPalindrome = false;
            break;
        }
    }

    console.log("Q14 Example 2:", isPalindrome);
}


// ==================================================
// Q15. Sort Array Without sort() - Bubble Sort
// ==================================================

{
    let arr = [64, 34, 25, 12, 22, 11, 90];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    console.log("Q15:", arr);
}


// ==================================================
// Q16. slice() Output Question
// ==================================================

{
    let arr = [1, 2, 3, 4, 5];

    let result = arr.slice(1, 4);

    console.log("Q16 Result:", result);
    console.log("Q16 Original Array:", arr);
}


// ==================================================
// Q17. splice() Output Question
// ==================================================

{
    let arr = [1, 2, 3, 4, 5];

    let removed = arr.splice(2, 1, 10, 20);

    console.log("Q17 Removed:", removed);
    console.log("Q17 Array:", arr);
}


// ==================================================
// Q18. sort() Output Question
// ==================================================

{
    let nums = [10, 5, 8, 1, 3];

    console.log("Q18:", nums.sort());
}


// ==================================================
// Q19. Compare Two Arrays
// ==================================================

{
    let a = [1, 2, 3];
    let b = [1, 2, 3];

    console.log("Q19 Strict Equality:", a === b);
    console.log("Q19 Loose Equality:", a == b);
}


// ==================================================
// Q20. Array Destructuring Output Question
// ==================================================

{
    let arr = [1, 2, 3, 4, 5];

    let [x, , y, ...rest] = arr;

    console.log("Q20 x:", x);
    console.log("Q20 y:", y);
    console.log("Q20 rest:", rest);
}

//One Line Challenges 
// ==================================================
// Q31. Find Sum of All Numbers
// ==================================================

{
    let arr = [10, 20, 30, 40, 50];

    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }

    console.log("Q31:", sum);
}


// ==================================================
// Q32. Find Maximum Value
// ==================================================

{
    let arr = [5, 3, 8, 1, 9, 2];

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    console.log("Q32:", max);
}


// ==================================================
// Q33. Remove All Falsy Values
// ==================================================

{
    let arr = [0, 1, "", null, 2, undefined, 3, false, NaN];

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }

    console.log("Q33:", result);
}


// ==================================================
// Q34. Get Unique Values
// ==================================================

{
    let arr = [1, 1, 2, 2, 3, 3, 4, 4];

    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    console.log("Q34:", result);
}


// ==================================================
// Q35. Create an Array from 1 to 20
// ==================================================

{
    let arr = [];

    for (let i = 1; i <= 20; i++) {
        arr.push(i);
    }

    console.log("Q35:", arr);
}