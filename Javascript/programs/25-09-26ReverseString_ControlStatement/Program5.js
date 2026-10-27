let number1 = 123; 1 + 2 + 3 + 3
let digitSum = 0;

//Strore original number
let temp = number1; //

while (temp > 0) { //123 > 0 - true 12>0 -true. 1>0 - true false

    //Extract last digit

    let digit = temp % 10; //3 2 

    digitSum = digitSum + digit; //0 = 0+ 3 //5 = 5+1 =6

    temp = Math.floor(temp / 10); //12  //1 //0

};
console.log(`Sum of digit of ${number1} is ${digitSum}`);


//Reverse Number 
//3450 == 0543

let origanl = 345;
let reversed = 0;
let temp2 = origanl;

//345
while (temp2 > 0) { //345 > 0 - true 34>0= true true false true false

    let digit = temp2 % 10;  //5 

    reversed = reversed * 10 + digit; //5*10+4 = 54*10+3 = 543

    temp2 = Math.floor(temp2 / 10); //3/10 = 0.3
}
console.log(`Sum of digit of ${origanl} is ${reversed}`);

//5460
/*
let num = 5460;
let reverse = String(num).split('').reverse().join('');
console.log(reverse);
*/

//
