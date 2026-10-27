//*         *
//**       **
//***     ***
//****   ****
//***** *****
//****   ****
//***     ***
//**       **
//*         *

// Upper half
for (let i = 1; i <= 5; i++) {
    let str = "";

    // Left stars
    for (let j = 1; j <= i; j++) {
        str = str + "*";
    }

    // Spaces
    for (let j = 1; j <= 2 * (5 - i) + 1; j++) {
        str = str + " ";
    }

    // Right stars
    for (let j = 1; j <= i; j++) {
        str = str + "*";
    }

    console.log(str);
}

// Lower half
for (let i = 4; i >= 1; i--) {
    let str = "";

    // Left stars
    for (let j = 1; j <= i; j++) {
        str = str + "*";
    }

    // Spaces
    for (let j = 1; j <= 2 * (5 - i) + 1; j++) {
        str = str + " ";
    }

    // Right stars
    for (let j = 1; j <= i; j++) {
        str = str + "*";
    }

    console.log(str);
}