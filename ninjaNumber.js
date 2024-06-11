function ninjaNumber(n){
let count=1
for (let i=1;i<=n;i++)
    {
let str=""
for( let j=1; j<=(n-i);j++){
    str=str+" "
}
for(let k=1;k<=i;k++){
str=str+count
count=(count%9)+1
}
console.log(str);
}

}
ninjaNumber(5)