Assignment
//Q9. What will be the output of the following code? Explain why. 
    console.log(typeof null); // output : Object
    //Reason: This is a know historical bug in JavaScript.
    console.log(typeof undefined); // output : Undefined
//Reason: when you declare the variable but not assigning the value thats why its shows a undefined 
    console.log(typeof NaN); // Output : Number
 //Reason: NaN Stand for Not a Number means When the invalid outcomes come from the mathematical operation
    console.log("============================================================")
    
//Q10. What will be the output? Explain the type coercion happening here. 
    
    console.log("5" + 3); //Output: 53
   // Type coercion means converting one data type to another data type implicitilly 
   // so in this code when you decare the string with "+"" operator its converts valueinto the string only.
    console.log("5" - 3); //Output: 2
    //In coercion except "+"operator ither all behave as a mathematical Expression and it converts into the Number.
    console.log("5" * 2); //Output: 10
    // In coercion except "+"operator ither all behave as a mathematical Expression and it converts into the Number.
     console.log("hello" - 1);//Output: NaN
    //There is a invalid number is coming i.e "hello-1" because of that its coming NaN
    console.log("============================================================")

//Q11. Predict the output: 

    console.log(10 == "10"); //Output: True/ in losse equality the string "10" converted into the number and then its compare with other value 
    console.log(10 === "10"); //output : false /its a strict equality so here datatype also need to compare and in this both the data type is diff.
    console.log(0 == false); // output : True/compares only value not data type.
    console.log(0 === false); //output :False/compares values as well as data type.
    console.log("============================================================")

//Q12. What will the following code print? 

    console.log(a); //as we are not defining a so its throgh the error "a is not defined"
    console.log(typeof a); //Error

     b = null; 
    console.log(b); // Output : null
    console.log(typeof b); // output : Object
    console.log("============================================================")

//Q13. What is the output? 
    console.log(1 + "2" + 3); //output:123
    console.log(1 + 2 + "3"); //output:33
    console.log("============================================================")

//Q14. Predict the output: 
    console.log(true + true); //Output: 1+1 =2
    console.log(true + false); //Output: 1+0=1
    console.log(false + false); //Output: 0+0=0
    console.log(true + "hello");//Output: 1hello
    console.log("============================================================")

//Q15. What will be the output? 
    var x = 10; 
    var x = 20; 
    console.log(x); //output: 20

    // let y = 10; 
    // let y = 20; 
    console.log(y);  //Through the error Because Y has alreday declared with the let keyword so redeclaration is not allowed.
    console.log("============================================================")

//Q16.What is the output of the following?
    console.log(NaN == NaN); //Output: False //as this is a invalid number 
    console.log(NaN === NaN); //Output: False //as this is a invalid number 
    console.log(isNaN("hello"));// Output:True //its check the Not a number (NaN)
    console.log(isNaN("123")); //Output: False
    console.log("============================================================")

// Q18. Predict whether each value is truthy or falsy: 
    console.log(Boolean(0)); 
    console.log(Boolean("")); 
    console.log(Boolean(" "));  
    console.log(Boolean("0")); 
    console.log(Boolean([])); 
    console.log(Boolean(null)); 
    console.log(Boolean(undefined)); 
    console.log(Boolean(NaN)); 
    console.log(Boolean(-1)); 
    console.log(Boolean("false")); 
// Code	              Output	                  Reason
// Boolean(0)	      false	              0 is falsy.
// Boolean("")	       false	              Empty string is falsy.
// Boolean(" ")	       true	              Space is a character, so the string is not empty.
// Boolean("0")	       true	              "0" is a non-empty string.
// Boolean(null)	      false	              null is falsy.
// Boolean(undefined)    false                    undefined is falsy.
// Boolean(NaN)	      false	              NaN is falsy.
// Boolean(-1)	       true	             All non-zero numbers are truthy.
// Boolean([])	       true	              Empty arrays are truthy in JavaScript.
// Boolean("false")       true               "false" is a non-empty string.

//Q21. What is the output of this code? 
    function test() 
    {     
        var x = 10;   
        if (true) {         
            var x = 20;         
            console.log("Inside if:", x);     
        }     
        console.log("Outside if:", x);
    } 
    test(); 
    //Inside if: x=20
    //Inside if: x=20

  //  Q22. What is the output of this code? How does let behave differently from var? 
    function test() 
    {     
        let x = 10;   
          if (true) 
            {        
             let x = 20;        
                console.log("Inside if:", x);   
                  }     
                console.log("Outside if:", x); 

                }
    //Inside if: x=20
    //Inside if: x=10 Becasue the scope of let is Block.

    //Q23. What happens when you try to reassign a const variable? 
    const name = "Playwright"; 
    name1 = "Selenium"; 
    console.log(name1); 
    //Ans: It will through the error stating that the const cannot be reassign.

    //Q24. Can you change properties of a const object? What will be the output? 
     const person = { name: "John", age: 25 }; 
     person.age = 30; 
     console.log(person); 
     person = { name: "Jane" }; 
     console.log(person); 
     //Ans: Yes we can change the properties of Const object but we can not change the object itself 
     // for this line (person.age = 30; console.log(person);) its will allows as we are changing the value but 
     // for this lines (person = { name: "Jane" }; ) we are reassigning the value so it will through the error.

     //Q25. What is the output of the following expressions? Explain each. 
     console.log(5 % 2); // Modulus it will return the remainder so output is 1
     console.log(10 % 3); //output is 1
     console.log(2 ** 3); //it is exponential so 2*2*2=8
     console.log(10 / 0); //It is Infinity
     console.log(-10 / 0); // //It is negative Infinity
     console.log(0 / 0);// NAN it is a invalid number.

    // Q26. What is the difference between pre-increment and post-increment? Predict the output: 
       a = 5; 
    console.log(a++); //5
     console.log(a); //6
     console.log(++a); //7
     console.log(a); //7

    // Q27. What is the output of these logical operator expressions? 
     console.log(true && false); // 1 are false so the output is false
     console.log(true || false); //or operator if one is true the output is true.
     console.log(!true);  //this is False.
     console.log(0 || "hello"); // 0 falsy hai, isliye || next value "hello" return karta hai.
     console.log(""|| "default"); //"" empty string hai → falsy. Isliye "default" return hoga.
     console.log(null && "test"); //null  && mein agar pehli value falsy hai, toh wahi value return ho jaati hai.
     console.log(1 && "Playwright"); //Playwright.   truthy hai, isliye && second value check karta hai aur "Playwright" return karta hai.

    /* Most Important 
  && → Pehli falsy value return karta hai.
  || → Pehli truthy value return karta hai.
*/

// | Code | Output | Kyun? |
// |---|---|---|
// | 0 || "hello" | "hello" | Pehli value falsy hai, toh next value return |
// | 1 || "hello" | 1 | Pehli value truthy hai, toh wahi return |
// | 0 && "hello" | 0 | Pehli value falsy hai, toh wahi return |
// | 1 && "hello" | "hello" | Pehli value truthy hai, toh next value return |



   //  Q28. Write a JavaScript program to: 
    //  • Declare variables for firstName, lastName, age, city. • 
    //  Print a sentence: "My name is John Doe, I am 25 years old and I live in New York."
    // using template literals.

    let firstName = "John";
    let lastName = "Doe";
    let age = 25;
    let city = "New York";
     console.log(`My name is ${firstName} ${lastName}, I am ${age} years old and I live in ${city}`);
  //  Q29. Write a JavaScript program to swap two numbers without using a third variable.
  
  let a = 20;
  let b = 50;
    [a,b]=[b,a]
    //And
a=a+b//20+50=70
b=a-b//70-50=20
a=a-b//70-20=50
console.log("before Swap"+a + " " +b);
console.log("After Swap"+b + " " +a);

// Q30. Write a JavaScript program that takes a variable and prints: • The value • 
// The data type (using typeof) • 
// Whether it is truthy or falsy 
// Test it with the following 
inputs: 0, "", null, undefined, NaN, "hello", 42, [], false
/*
//0, "", null, undefined, NaN, "hello", 42, [], false 
/*
var test=[0, "",null, undefined, NaN, "hello", 42, [], false];
console.log(typeof test[0]);
console.log(typeof test[1]);
console.log(typeof test[2]);
console.log(typeof test[3]);
console.log(typeof test[4]);
console.log(typeof test[5]);
console.log(typeof test[6]);
console.log(typeof test[7]);
console.log(typeof test[8]);

console.log("--------------");
//for(var i=0; i<=test.length-1; i++)
for(var i=0; i<test.length; i++)

{
    console.log(test[i]);
    console.log("--------------");
    console.log(typeof test[i]);
}*/
