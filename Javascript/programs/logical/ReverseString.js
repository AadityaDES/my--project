//By Using for loop
 
let a = "bottle";
let rev = "";
 
for (let i = a.length - 1; i >= 0; i--) {
    rev = rev + a.at(i);
}
console.log(rev);
 
console.log("--------------------")
 
//By using inbuilt method
 
let b = "Aaditya";
 
let c = b.split('').reverse().join('');
 
console.log(c);
 