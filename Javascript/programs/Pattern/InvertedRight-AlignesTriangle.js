//    * * * *
//     * * *
//      * * 
//       *	

for (let i = 4; i >= 1; i--) {
    let str = "";

    for (let j = 4; j > i; j--) {
        str = str + " ";
    }

    for (let k = 1; k <= i; k++) {
        str = str + "* ";
    }

    console.log(str);
}