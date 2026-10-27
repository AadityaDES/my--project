// ============================================================
// STUDENT MANAGEMENT SYSTEM
// ============================================================

/*
Requirements:
Each student has:
1. Name
2. Roll Number
3. Grade
4. Attendance

We use a class to create multiple student objects instead of
creating separate variables for every student's details.
*/


// ============================================================
// 1. CREATING THE STUDENT CLASS
// ============================================================

class Student {

    /*
    CONSTRUCTOR

    A constructor is a special method that executes automatically
    whenever a new Student object is created.

    It initializes the object with the values passed as arguments.
    */

    constructor(name, rollNo, grade) {

        // Initializing the student's properties
        this.name = name;
        this.rollNo = rollNo;
        this.grade = grade;

        // Every student starts with zero attendance
        this.attendance = 0;
    }


    // ========================================================
    // 2. MARK ATTENDANCE METHOD
    // ========================================================

    /*
    This method increases the student's attendance by 1
    whenever it is called.
    */

    markAttendance() {

        // Increment attendance by 1
        this.attendance++;

        // Display the updated attendance
        console.log(
            `${this.name} attendance marked. Total attendance: ${this.attendance}`
        );
    }


    // ========================================================
    // 3. DISPLAY STUDENT RESULT
    // ========================================================

    /*
    This method displays the student's name, roll number,
    and grade.
    */

    getResult() {

        console.log(
            `${this.name} (Roll No: ${this.rollNo}) - Grade: ${this.grade}`
        );
    }


    // ========================================================
    // 4. CHECK EXAM ELIGIBILITY
    // ========================================================

    /*
    This method checks whether the student is eligible
    to appear for the examination.

    If attendance is at least 1, it returns true.
    Otherwise, it returns false.
    */

    isEligibleForExam() {

        return this.attendance >= 1;
    }
}


// ============================================================
// 5. CREATING STUDENT OBJECTS
// ============================================================

// Creating three objects of the Student class

const student1 = new Student("Rahul", 101, "A");
const student2 = new Student("Priya", 102, "B+");
const student3 = new Student("Rohit", 103, "C");


// ============================================================
// 6. OPERATIONS ON STUDENT 1
// ============================================================

// Mark Rahul's attendance twice
student1.markAttendance();
student1.markAttendance();

// Display Rahul's result
student1.getResult();

// Check Rahul's exam eligibility
const isEligible1 = student1.isEligibleForExam();

console.log("Eligible for exam:", isEligible1);


console.log("----------------------");


// ============================================================
// 7. OPERATIONS ON STUDENT 2
// ============================================================

// Mark Priya's attendance once
student2.markAttendance();

// Check Priya's exam eligibility
console.log(
    "Eligible for exam:",
    student2.isEligibleForExam()
);

// Display Priya's result
student2.getResult();


console.log("----------------------");


// ============================================================
// 8. OPERATIONS ON STUDENT 3
// ============================================================

// Mark Rohit's attendance once
student3.markAttendance();

// Check Rohit's exam eligibility
console.log(
    "Eligible for exam:",
    student3.isEligibleForExam()
);

// Display Rohit's result
student3.getResult();