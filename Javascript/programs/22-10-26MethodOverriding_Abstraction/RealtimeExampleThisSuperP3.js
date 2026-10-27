// ============================================================
// EXAMPLE 1: this AND super IN JAVASCRIPT
// REAL-TIME EXAMPLE: EMPLOYEE SALARY
// ============================================================

/*
this:
Refers to the current object in this example.
It is used to access object properties and methods.

super:
Allows a child class to call a parent class method.
*/

// PARENT CLASS

class Employee {

    constructor(name, basicSalary) {
        this.name = name;
        this.basicSalary = basicSalary;
    }

    calculateSalary(bonus) {
        console.log("Employee Name:", this.name);
        console.log("Basic Salary:", this.basicSalary);
        console.log("Bonus:", bonus);
    }
}

// CHILD CLASS

class Manager extends Employee {

    calculateSalary(bonus) {

        // Call the parent class method
        super.calculateSalary(bonus);

        // Access the current object's property using this
        const totalSalary = this.basicSalary + bonus;

        console.log("Total Salary:", totalSalary);
    }
}

// Create an object
const m1 = new Manager("Amit", 50000);

// Pass the bonus as an input parameter
m1.calculateSalary(10000);

/*
OUTPUT:

Employee Name: Amit
Basic Salary: 50000
Bonus: 10000
Total Salary: 60000
*/

console.log("-------------------------------");


// ============================================================
// EXAMPLE 2: CALLING ONE METHOD INSIDE ANOTHER METHOD
// ============================================================

class Employee1 {

    displayName() {
        console.log("Employee Name: Rahul");
    }

    displaySalary() {
        this.displayName();
        console.log("Salary: 50000");
    }

    displayDetails() {
        this.displayName();
        this.displaySalary();

        console.log("Employee details displayed");
    }
}

// Create an object
const emp = new Employee1();

emp.displayDetails();

/*
OUTPUT:

Employee Name: Rahul
Employee Name: Rahul
Salary: 50000
Employee details displayed

EXPLANATION:

1. emp.displayDetails() calls displayDetails().
2. displayDetails() calls displayName().
3. It then calls displaySalary().
4. displaySalary() also calls displayName().
5. Therefore, displayName() executes twice.

IMPORTANT:
Calling displaySalary() does not automatically prevent
displayName() from executing again if displaySalary() calls it.
*/