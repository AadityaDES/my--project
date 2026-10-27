let a = 10;
let b = 20;

//out a=20, b=10;

console.log("Before Swap : a=",a ,"b =",b);
let temp =1;
a=b;
b=temp;
console.log("Before Swap : a =",a,"b =",b);

//Method -Destructing
let x = 10, y=20;
[x,y]=[y,x];
console.log("After Swap : x=",x,"y =",y);

//Calculate Salary
const basicSalary = 50000;
const hra =basicSalary*0.40;
const pf = basicSalary*0.12;
const da = basicSalary*0.20;

const grossSalary =basicSalary + hra +da;
const netSalary = grossSalary - pf;

console.log("Basic : "+basicSalary);
console.log("HRA :"+hra);
console.log("DA :"+da);
console.log("PF : "+pf);
console.log("GrossSalary :"+ hra);
console.log("Net Salary :" + netSalary);

//Calculate Age
const birthYear =2000;
const currentYear =2026;
const age = currentYear - birthYear;
console.log(age);

//Find area of rectangle

const length =15;
const width = 10;
const area = length * width;
console.log(area);

//Calculate Simple Interest
const principal =100000;
const rate = 8.5;
const time =3;

const simpleInt =(principal *rate*time)/100;
const totalAmount =principal + simpleInt;
console.log(totalAmount);
