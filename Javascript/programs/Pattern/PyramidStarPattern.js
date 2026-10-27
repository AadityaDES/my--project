        //*
	 //  ***
	//  *****
	// *******

    for (let i = 1; i <= 4; i++) {
    let str = "";

    for (let j = 1; j <= 4 - i; j++) {
        str = str + " ";
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        str = str + "*";
    }

    console.log(str);
}