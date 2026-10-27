
let ar = [1, 2, 3, 2, 4, 3, 5];
let unique = [];

for (let i = 0; i < ar.length; i++) {
    if (!unique.includes(ar[i])) {
        unique.push(ar[i]);
    }
}

console.log(unique);

//by using set method

let arr = [1, 2, 3, 2, 4, 3, 5];

let unique1 = [...new Set(arr)];

console.log(unique1);
