        //*****
		// ****
		//  ***
		//   **
		//    *

        for (let i = 5; i >= 1; i--) {
    let str = "";

    for (let j = 5; j > i; j--) {
        str = str + " ";
    }

    for (let k = 1; k <= i; k++) {
        str = str + "*";
    }

    console.log(str);
}