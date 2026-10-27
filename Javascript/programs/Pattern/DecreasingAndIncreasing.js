    //  *****
	//  ****
	//  ***
	//  **
   //   *
   //   **
   //   ***
   //   ****
   //   *****

   // Decreasing pattern
for (let i = 5; i >= 1; i--) {
    let str = "";

    for (let j = 1; j <= i; j++) {
        str = str + "*";
    }

    console.log(str);
}

// Increasing pattern
for (let i = 2; i <= 5; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
        str = str + "*";
    }

    console.log(str);
}