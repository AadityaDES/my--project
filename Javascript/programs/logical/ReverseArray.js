
let ar = [1, 2, 3, 4, 5];
let rev = [];

for (let i = ar.length - 1; i >= 0; i--) {
    rev.push(ar[i]);
}
console.log(rev);

//using reverse method


let arr = [1, 2, 3, 4, 5];

let rev1 = [...arr].reverse();

console.log(rev1);

