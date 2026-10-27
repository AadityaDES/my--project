// ============================================================
// 2D ARRAY / MULTIDIMENSIONAL ARRAY
// ============================================================

// A 2D array is an array that contains other arrays.
//
// It is commonly used to represent:
// 1. Tables
// 2. Matrices
// 3. Excel-like data
// 4. Rows and columns
// 5. Test data


// ============================================================
// 1. BASIC 2D ARRAY
// ============================================================

let table = [
    ["Name", "Age", "City"],
    ["Raj", 20, "Pune"],
    ["Rohit", 40, "Mumbai"],
    ["Rahul", 30, "Delhi"],
    ["Amit", 35, "Nashik"]
];

console.log(table);


// ============================================================
// 2. ACCESSING ROW
// ============================================================

// table[0] → First row
// table[1] → Second row
// table[2] → Third row

console.log(table[0]);
console.log(table[1]);
console.log(table[2]);


// ============================================================
// 3. ACCESSING ELEMENT FROM 2D ARRAY
// ============================================================

// Syntax:
//
// array[row][column]


console.log(table[0][0]); // Name
console.log(table[1][2]); // Pune
console.log(table[2][2]); // Mumbai
console.log(table[3][1]); // 30


// Complete Flow:
//
// table[1][2]
//
// First [1] → Select row 1
// Second [2] → Select column 2
//
// Result → Pune


// ============================================================
// 4. ROW AND COLUMN INDEX
// ============================================================

/*

             Column
          0       1       2

Row 0   Name    Age     City
Row 1   Raj     20      Pune
Row 2   Rohit   40      Mumbai
Row 3   Rahul   30      Delhi
Row 4   Amit    35      Nashik

*/


// ============================================================
// 5. LENGTH OF 2D ARRAY
// ============================================================

// table.length → Number of rows

console.log("Rows:", table.length);


// table[0].length → Number of columns in row 0

console.log("Columns:", table[0].length);


// Example:
//
// table.length
// → 5 rows
//
// table[0].length
// → 3 columns


// ============================================================
// 6. MATRIX
// ============================================================

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];

console.log(matrix);


// Number of rows

console.log("Rows:", matrix.length);


// Number of columns

console.log("Columns:", matrix[0].length);


// ============================================================
// 7. ACCESS MATRIX ELEMENTS
// ============================================================

console.log(matrix[0][0]); // 1
console.log(matrix[0][1]); // 2
console.log(matrix[0][2]); // 3

console.log(matrix[1][0]); // 4
console.log(matrix[1][1]); // 5
console.log(matrix[1][2]); // 6

console.log(matrix[3][2]); // 12


// ============================================================
// 8. PRINT MATRIX USING NESTED LOOPS
// ============================================================

// Outer loop → Rows
// Inner loop → Columns

for (let row = 0; row < matrix.length; row++) {

    let rowData = "";

    for (let col = 0; col < matrix[row].length; col++) {

        rowData = rowData + matrix[row][col] + " ";
    }

    console.log(rowData);
}


// Output:
//
// 1 2 3
// 4 5 6
// 7 8 9
// 10 11 12


// ============================================================
// COMPLETE FLOW OF NESTED LOOP
// ============================================================

/*

row = 0
    col = 0 → matrix[0][0] → 1
    col = 1 → matrix[0][1] → 2
    col = 2 → matrix[0][2] → 3

row = 1
    col = 0 → matrix[1][0] → 4
    col = 1 → matrix[1][1] → 5
    col = 2 → matrix[1][2] → 6

row = 2
    col = 0 → matrix[2][0] → 7
    col = 1 → matrix[2][1] → 8
    col = 2 → matrix[2][2] → 9

row = 3
    col = 0 → matrix[3][0] → 10
    col = 1 → matrix[3][1] → 11
    col = 2 → matrix[3][2] → 12

*/


// ============================================================
// 9. UPDATE VALUE IN 2D ARRAY
// ============================================================

matrix[1][1] = 50;

console.log(matrix);


// Original:
//
// [4, 5, 6]
//
// After:
//
// [4, 50, 6]


// ============================================================
// 10. ADD A NEW ROW
// ============================================================

matrix.push([13, 14, 15]);

console.log(matrix);


// ============================================================
// 11. REAL-TIME TEST DATA EXAMPLE
// ============================================================

// 2D arrays can be useful for representing test data.

let loginData = [
    ["Username", "Password", "Expected Result"],
    ["admin", "admin123", "Login Successful"],
    ["user1", "user123", "Login Successful"],
    ["wrong", "wrong123", "Invalid Credentials"]
];

console.log(loginData);


// Access test data

console.log(loginData[1][0]); // admin
console.log(loginData[1][1]); // admin123
console.log(loginData[1][2]); // Login Successful


// ============================================================
// IMPORTANT POINTS
// ============================================================

/*

1. A 2D array is an array containing other arrays.

2. 2D arrays are commonly used for:
   - Tables
   - Matrices
   - Excel-like data
   - Test data

3. First index represents the ROW.

4. Second index represents the COLUMN.

5. Syntax:

   array[row][column]


6. array.length gives the number of rows.

7. array[row].length gives the number of
   columns in that row.

8. Nested loops are commonly used to traverse
   a 2D array.

9. Outer loop → Rows

10. Inner loop → Columns

11. A 2D array can contain different data types.

12. Rows do not necessarily have to contain
    the same number of elements.
*/