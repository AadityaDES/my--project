let city = "ujjain";
let city1 = "";

for (let i = 0; i < city.length; i++) {
    let t = city.charAt(i);

    if (t === 'a' || t === 'e' || t === 'i' || t === 'o' || t === 'u') {
        continue;
    }
    city1 = city1 + t;
}
console.log(city1);