// function patter13(n){
//     for(let i=1; i<=n; i++){
//         let str=""
//         for(let j=1; j<=i; j++){
//             str+=j
//         }
//     }

//     }
//     patter13(3)

    function pattern13(n){
        for (let i=1;i<=n; i++) {
            let str=""
            for (j=1;j<=n-i;j++){
                str+=" "
            }
            console.log(str)
            for(let k=1;k<=i;k++){
                str=str+`${i} `
           }
           console.log(str)
        }  

       }
       pattern13(3)