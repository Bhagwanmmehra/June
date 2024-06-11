// function reverseAngle(a) {
//     for (let i = 1; i <= a; i++) {
//         let str = ""
//         for (let j = 1; j <= i; j++) {
//             str = str + "love "
//         }
//         console.log(str);
//     }
//     // loop l reverse the pattern
//     for (let k = 1; k <= a - 1; k++) {
//         let str = ""
//         for (l = 1; l <= a - k; l++) {
//             str = str + "love "
//         }
//         console.log(str);
//     }
// }
// reverseAngle(13)

// second method

function reverseAngle(a) {
    let totalRows=(a*2)-1
    for (let i = 1; i <= totalRows; i++) {
        let str = ""
        for (let j = 1; j <= i; j++) {
            str = str + "love"
        }
    }
    console.log(str);
}