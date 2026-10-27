// ============================================================
// GETTER AND SETTER METHODS IN JAVASCRIPT
// ============================================================

/*
1. GETTER METHOD (get)
============================================================

Definition:
A getter is a special method used to read or retrieve the value
of a property from an object.

Purpose of a Getter:
1. To read private data in a controlled way.
2. To provide read access to a property.
3. To perform calculations before returning a value.
4. To return a value without exposing the internal implementation.

Syntax:

get propertyName() {
    return value;
}

Important Points:
1. A getter is declared using the get keyword.
2. A getter does not accept parameters.
3. A getter is accessed like a property, without parentheses.
4. A getter typically returns a value.
5. A getter can access private fields declared inside the class.

Example:
console.log(emp1.salary);

When we access emp1.salary, JavaScript automatically calls
the getter method.


2. SETTER METHOD (set)
============================================================

Definition:
A setter is a special method used to update or assign a value
to a property of an object.

Purpose of a Setter:
1. To update private data in a controlled way.
2. To validate a value before updating it.
3. To prevent invalid data from being assigned.
4. To control how a property changes.

Syntax:

set propertyName(newValue) {
    // Update or validate the value
}

Important Points:
1. A setter is declared using the set keyword.
2. A setter accepts exactly one parameter.
3. A setter is accessed using assignment syntax, without
   parentheses.
4. A setter can validate the incoming value before updating data.
5. A setter's return value is ignored.
6. A setter can update private fields declared inside the class.

Example:
emp1.salary = 60000;

When we assign a value to emp1.salary, JavaScript automatically
calls the setter method and passes 60000 as newSalary.


3. ENCAPSULATION USING GETTER AND SETTER
============================================================

Encapsulation is the process of combining data and methods into
a single unit, such as a class, and controlling access to that data.

In this example:
- Data: name and #salary
- Getter: get salary()
- Setter: set salary(newSalary)
- Single unit: Employee class

The #salary field is private, so it cannot be accessed directly
from outside the class.

The getter provides controlled read access, and the setter
provides controlled update access with validation.

Note:
A getter or setter alone does not make data private.
The private field #salary provides data hiding.
*/


// ============================================================
// EMPLOYEE CLASS
// ============================================================

class Employee {

    // Private data
    #salary;

    constructor(name, salary) {

        this.name = name;
        this.#salary = salary;
    }

    // Getter: Read the private salary
    get salary() {
        return this.#salary;
    }

    // Setter: Update the private salary with validation
    set salary(newSalary) {

        if (newSalary > 0) {
            this.#salary = newSalary;
        } else {
            console.log("Salary must be greater than zero");
        }
    }
}


// ============================================================
// CREATING AN OBJECT
// ============================================================

const emp1 = new Employee("Rohit", 50000);


// ============================================================
// READING DATA USING GETTER
// ============================================================

console.log("Employee Name:", emp1.name);
console.log("Employee Salary:", emp1.salary);

/*
Output:
Employee Name: Rohit
Employee Salary: 50000
*/


// ============================================================
// UPDATING DATA USING SETTER
// ============================================================

emp1.salary = 60000;

console.log("Updated Salary:", emp1.salary);

/*
Output:
Updated Salary: 60000
*/


// ============================================================
// VALIDATING DATA USING SETTER
// ============================================================

emp1.salary = 0;

/*
Output:
Salary must be greater than zero

The salary remains 60000 because the setter does not update
the private field when the supplied value is invalid.
*/

console.log("Final Salary:", emp1.salary);

/*
Output:
Final Salary: 60000
*/


// ============================================================
// IMPORTANT POINTS
// ============================================================

/*
1. get -> Used to read a value.
2. set -> Used to update a value with validation or additional logic.
3. #salary -> Private field; cannot be accessed directly outside
   the Employee class.
4. emp1.salary -> Calls the getter.
5. emp1.salary = 60000 -> Calls the setter.
6. Getters and setters are accessed like properties, not ordinary
   methods; do not use parentheses.
7. The setter prevents invalid salary values from being stored.
8. Encapsulation combines data and methods inside a class and
   controls access to private data.
*/