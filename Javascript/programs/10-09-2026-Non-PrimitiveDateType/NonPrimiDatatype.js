//Non Primitive data types
//1.Object
//2.Array
//3.Function

//Object -An object is a collection of related data stored as key and value pair
/*
//key -Property Named
//Value - Property Value
*/
//let,var,const
//Syntax
/*
let/const objectName={
    key1 : value1,
    key2: value2,
    key3 = value3    
}
    */
let employe ={
    name :"John doe",
    department : "Engineering",
    salary : 90000
}
console.log(employe);
//Access object Properties
//Dot Notation
//ObjectName.KeyName
console.log(employe.name);
console.log(employe.department);
console.log(employe.salary);

console.log();
//Bracket Notation
console.log(employe['name']);
console.log(employe['department']);
console.log(employe['salary']);

//update object property
employe.salary = 95000;
console.log(employe);
console.log();
//Add new Property
employe.city = "Pune";
console.log(employe);

//Delete Property
delete employe.department;
console.log(employe);
let student ={
    rollNo: 101,
    name:"Rahul",
    course:"Playwright",
    fees:25000,
    isPlaced :false
}
console.log(student);
console.log();
console.log(student.rollNo);
console.log(student.name);
console.log(student.course);
console.log(student.fees);
console.log(student.isPlaced);

student.lang ="javascript";
console.log(student);

let product={
    id:1001,
    name:`Seeds`,
    sku:`Test123`,
    price:50,
    units:10,
    isAvailable:true
};
//Total inverty value
let totalValue =product.price*product.units;
console.log(totalValue);

//using concatintion
console.log("Product Name :" +product.name);
console.log("Price : " +product.price);
console.log("Price : " +product.units);
console.log();
console.log(`Product Name : ${product.name}`)
console.log(`Product Name : ${product.price}`)
console.log(`Product Name : ${product.units}`)

console.log(typeof product);






 