//By using Filter Method
 
let ar =[1, 2, 0, 3, 0, 4, 5, 0, 6, 7, 0];
 
let zeros = ar.filter(num => num === 0);
let nonZeros = ar.filter(num => num !== 0);
 
let ar1 = [...zeros, ...nonZeros];
 
console.log(ar1.join(" "));
 
console.log("----------------------------------------")
 
//By using for loop

let arr =[1, 2, 0, 3, 0, 4, 5, 0, 6, 7, 0];
let index = 0;
 
 ar2 = new Array(ar.length).fill(0);                     //Creating the new array with all  zero values[0,0,0,0,0,0,0,0,0,0,0]
// Count zeros
 for (let i = 0; i <= ar.length - 1; i++) {
    if (arr[i] === 0) {                                   //kiti zeros ahe te check karte
        index++;                                                //4 zeros bhetle
    }
}
// Place non-zero elements
for (let i = 0; i <= ar.length - 1; i++) {  
    if (arr[i] !== 0) {
        ar2[index] = arr[i];
        index++;
    }
}
console.log(ar2.join(" "));