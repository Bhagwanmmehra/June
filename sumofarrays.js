

// for (i=0;i<arr.length;i++){
//    for( j=0; j<arr[i].length; j++) {
//     sum=sum+arr[i][j]
//    }
// }
// console.log(sum);


function sumOfArray(arr){
   let sum=0
   for (i=0;i<arr.length;i++){
      for( j=0; j<arr[i].length; j++) {
         if((i==0 &&j==0)||(i==1&& j==1)||(i==arr.length-1) && (j==arr.length-1)){
      sum=sum+arr[i][j]
   }
   }
   }
console.log(sum);
}
let arr=[[1,2,3],[4,5,6],[7,8,9]]

sumOfArray(arr)
