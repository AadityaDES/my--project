n=16
factorial=1;
for(let i=1; i<=n; i++){
    factorial=factorial*i;
}
console.log(`${factorial}`)
console.log("========Number is even or odd==========");

let num=6;
if(num%2===0){
    console.log("number is even number")
}
else{
    console.log("number is odd number")
}
console.log("========Covert String to Number==========");

let i = "1234";

let nume = Number(i);

console.log(nume);
console.log(typeof nume);
