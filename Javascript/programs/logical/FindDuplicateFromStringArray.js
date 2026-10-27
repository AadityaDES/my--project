let ar = ["java", "API", "Selenium", "Testing", "java", "api", "sql", "Sql", "testing"];
let count = 0;

console.log("Duplicate strings are:");

for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
        if (ar[i].toLowerCase() === ar[j].toLowerCase()) {
            console.log(ar[i]);
            count++;
        }
    }
}

console.log("Total duplicate count is " + count);

//Using Inbuilt Method

let ar1 = ["java", "API", "Selenium", "Testing", "java", "api", "sql", "Sql", "testing"];

let lowerArray = ar.map(str => str.toLowerCase());

let duplicates = lowerArray.filter((str, index) =>
    lowerArray.indexOf(str) !== index
);

console.log("Duplicate strings are:", duplicates);
console.log("Total duplicate count is " + duplicates.length);