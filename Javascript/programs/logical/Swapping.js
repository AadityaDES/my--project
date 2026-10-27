//Swapping ascending by sort method

let ar = [5, 8, 2, 8, 4, 9];
ar.sort((a, b) => a - b);
console.log(ar);

//Swapping descending by sort method

let a = [5, 8, 2, 8, 4, 9]
a.sort((a, b) => b - a);
console.log(a);

//Swappingascending by For Loop

let a1 = [5, 8, 2, 8, 4, 9];

for (let i = 0; i < a1.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
        if (a1[i] > a1[j]) {
            let temp = a1[i];
            a1[i] = a1[j];
            a1[j] = temp;
        }
    }
}

console.log(a1);

//Swapping descending by For loop


let a2 = [5, 8, 2, 8, 4, 9];

for (let i = 0; i < a2.length; i++) {
    for (let j = i + 1; j < a2.length; j++) {
        if (a2[i] < a2[j]) {
            let temp = a2[i];
            a2[i] = a2[j];
            a2[j] = temp;
        }
    }
}

console.log(a2);

