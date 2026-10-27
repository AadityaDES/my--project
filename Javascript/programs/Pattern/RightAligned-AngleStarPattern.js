        //    *
		//   **
		//  ***
		// ****
		//*****
 for (let i = 1; i <= 5; i++) {
    let str = "";

    for (let j = 1; j <= 5 - i; j++) {
        str = str + " ";
    }

    for (let k = 1; k <= i; k++) {
        str = str + "*";
    }

    console.log(str);
}