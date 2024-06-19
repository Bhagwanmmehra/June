
// function printStar(n) {
//     for (i = 1; i <= n; i++) {
//         let str = ""
//         for (j = i; j <= n; j++) {
//             str += "x"
//         }
//         let space = n
//         for (k = 1; k <= space; k++) {
//             str +="0"
//         }
//         space=space-2
//     }
// }
function printStar(n) {
    // first pattern
    let space1 = n
    for (let i = 1; i <= n - 1; i++) {
        let str = ""
        for (let j = 1; j <= i; j++) {
            str += "x"
        }

    }
    for (let k = 1; k <= space1; k++) {
        str += "0"
    }
    space1 = space1 - 2
    for (let l = 1; l <= i; l++) {
        str += "x"
    }
    console.log(str);

    let str2 = ''
    for (let m = 1; m <= (n * 2) - 1; m++) {
        str2 += 'x'
    }
    console.log(str2);

    let space2 = 1
    for (let o = 1; o <= n - 1; o++) {
        let str3 = ''
        for (p = 1; p <= n - o; p++) {
            str3 += "x"
        }
        for (let q = 1; q <= space2; q++) {
            str3 += "0"

        }
        space2 = space2 + 2
        for (r = 1; r < n - o; r++) {
            str3 += "x"
        }
        console.log(str3);
    }


}
printStar(3)