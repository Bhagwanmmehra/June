function reversePyramid(n){
for(let i=1;i<=n;i++){
    let str=""
for(let j=1;j<i; j++){
str=str+" "
}
console.log(str);


for (let k=1;k<=n-i+1;k++){ 
str=str+"* "

}
console.log(str);
}

}
reversePyramid(4)