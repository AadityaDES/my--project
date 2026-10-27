//    *            
//    **		   
//    ***
//    ****
//    *****
//    ****
//    ***
//    **
//    *

// Increasing pattern
for (let i = 1; i <= 5; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
        str = str + "*";
    }

    console.log(str);
}

// Decreasing pattern
for (let i = 4; i >= 1; i--) {
    let str = "";

    for (let j = 1; j <= i; j++) {
        str = str + "*";
    }

    console.log(str);
}