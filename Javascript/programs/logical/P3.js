//By using for loop
 
const s = "pune";
let rev = "";
 
for (let i = s.length - 1; i >= 0; i--) {
    rev = rev + s.at(i);
}
if (s === rev) {
    console.log("String is Palindrome");
} else {
    console.log("String is not Palindrome");
}
console.log("---------------------------------")
 
//By using inbuilt method
 
const s1 = "Nitin";
let m=s1.toLowerCase();                                                          //let l=s1.toUpperCase();;
const rev1 = m.split('').reverse().join('');
 
if (m === rev1) {
    console.log("String is Palindrome");
} else {
    console.log("String is not Palindrome");
}