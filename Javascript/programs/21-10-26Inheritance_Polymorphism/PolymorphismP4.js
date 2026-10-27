// ============================================================
// POLYMORPHISM IN JAVASCRIPT
// ============================================================

/*
DEFINITION:

Polymorphism means "many forms".

It allows the same method name to behave differently
depending on the object or the arguments provided.

TYPES OF POLYMORPHISM:

1. Compile-time Polymorphism
   - Commonly achieved through method overloading in languages
     such as Java.
   - The method to execute is selected at compile time.

2. Runtime Polymorphism
   - Commonly achieved through method overriding.
   - The method implementation is selected at runtime.

IMPORTANT:
JavaScript is a dynamically typed language.
It does not support traditional compile-time method overloading
like Java. However, we can simulate similar behavior using
rest parameters or conditional logic.
*/


// ============================================================
// 1. COMPILE-TIME POLYMORPHISM: METHOD OVERLOADING
// ============================================================

/*
METHOD OVERLOADING:

Defining multiple methods with the same name but different
parameter lists is called method overloading.

Java example:

add(int a, int b)
add(int a, int b, int c)

JavaScript does not support this type of traditional overloading.
If a class defines multiple methods with the same name,
the last definition replaces the previous definitions.
*/

class Test {

    add(a) {
        console.log(a);
    }

    add(a, b) {
        console.log(a + b);
    }

    add(a, b, c) {
        console.log(a + b + c);
    }
}

const t1 = new Test();

t1.add(10, 20, 30); // Calls the last add() definition

// Output:
// 60

/*
IMPORTANT:

The last add(a, b, c) definition replaces the previous add()
definitions. JavaScript does not select a method based on
the number of arguments.

Calling t1.add(10, 20) would produce NaN because c is undefined.
*/


// ============================================================
// 2. SIMULATING OVERLOADING USING REST PARAMETERS
// ============================================================

/*
The rest parameter (...numbers) collects all arguments
into an array.

We can use a loop to process any number of arguments.
This is flexible argument handling, not traditional
compile-time method overloading.
*/

class Calculator {

    add(...numbers) {

        let sum = 0;

        for (const number of numbers) {
            sum += number;
        }

        console.log("Sum:", sum);
    }
}

const c1 = new Calculator();

c1.add(10, 20);
c1.add(10);
c1.add(10, 20, 30);

/*
Output:
Sum: 30
Sum: 10
Sum: 60
*/


// ============================================================
// 3. SIMULATING OVERLOADING USING CONDITIONAL LOGIC
// ============================================================

/*
We can check whether the third argument is provided
and perform the appropriate calculation.
*/

class Calculator1 {

    add(a, b, c) {

        if (c !== undefined) {
            return a + b + c;
        }

        return a + b;
    }
}

const c2 = new Calculator1();

console.log(c2.add(10, 20));
console.log(c2.add(10, 20, 30));

/*
Output:
30
60
*/


// ============================================================
// 4. REST PARAMETER WITH STRINGS
// ============================================================

/*
The rest parameter collects each function argument
into an array.

Each string passed as an argument remains a complete string.
*/

function display(...chars) {

    console.log(chars);
}

display("Hello", "JavaScript", "Playwright");
display("Hello", "JavaScript");
display("Hello");

/*
Output:
[ 'Hello', 'JavaScript', 'Playwright' ]
[ 'Hello', 'JavaScript' ]
[ 'Hello' ]
*/


// ============================================================
// INTERVIEW SUMMARY
// ============================================================

/*
1. Polymorphism means many forms.

2. Traditional compile-time method overloading is not supported
   in JavaScript.

3. Defining the same method multiple times in a class does not
   create overloads. The last definition replaces earlier ones.

4. Rest parameters and conditional logic can simulate flexible
   argument handling.

5. Method overriding is a common way to demonstrate runtime
   polymorphism in JavaScript.
*/