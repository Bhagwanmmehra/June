// let pizza = {
//     type: 'veg',
//     title: '4 Veg Medium Pizzas at 299'
    
// }

// for (let key in pizza)
//     {
//     console.log(pizza[key]);
    
// }



// let obj={
//     a:2,
//     b:3,
//     sum:function(){} /*a function which is wrriten in object is called method */

// }
// obj.c=3
// console.log(obj)

// how to convert a string into a number

// let num='25'
// let result=Number(num)

// console.log(typeof Number(num));
// console.log(typeof num);

// parseInt() method:

// let num='2s345'
// let result=parseInt(num)
// console.log(result); //it will give 2 because it will stop at the first non numeric value

// parseFloat()

// Math.abs() method:

// function gap(min,max){
//    let a= Math.abs(min-max)
// console.log(a);
// }
// gap(10,20)

// Math.max() & Math.min() method:

// console.log(Math.max(2,3,4,5,6,7,8));
// console.log(Math.min(2,3,4,5,6,7,8));

// https://developer.mozilla.org/en-US/docs/Web/JavaScript //



// Math.pow() method:

// let num=5
// let a=Math.pow(num,5);
// console.log(a);

// Math.round() && Math.floor() method:

// let num=14.311
// let a= Math.round(num)
// console.log(a);

// let b=Math.floor(num)
// console.log(b);

// Math.ceil() for next value & Math.trunc() for nearest value
// let num=14.311

// Math.sqrt() method:
// let num=625
// console.log(Math.sqrt(num));

// Math.random() method:

// console.log(Math.floor(Math.random()*(5)));


//Type1
// function randomNumber(n){

//     return (Math.floor(Math.random()*n)+15)+1
// }
// let result=randomNumber(15);
// console.log(result);


//type2 :Logic
// let min=10
// let max=20
// console.log((Math.floor(Math.random()*(max-min))+min)+1);


// function randomNumber(min,max){

//     return Math.floor(Math.random()*((max-min))+min+1);
// }
// console.log( randomNumber(10,15))


// Math.max() and Math.min() method:

// let a=10;
// let b=20;

// console.log(Math.max(10,20));
// console.log(Math.min(10,20));


// toFixed method:

// let a=2.23234267843
// console.log(a.toFixed(2));

// isNaN method:
// let a=76
// console.log(isNaN(a));

// isFinite method:

// let a=23
// console.log(isFinite(a));



