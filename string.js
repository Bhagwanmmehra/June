// STRING LITERALS

// let a="bhagwan"
// let b="nsp"
// let result=`hello my name is ${a} i am from ${b}`
// console.log(result);

// let obj ={
// name:"bhagwan",
// place:"bhopal",
// email:"bg@gmail.com",
// }

// console.log(`my name is ${obj.name} i am from ${obj.place} my email id is ${obj.email} `);

// at() method:
// const name="shobharam sir"
// console.log(name[3],name.at(0));

// length method:

// let a="bhagwan"
// let length=a.length
// console.log(length);

// let a="bhagwan"
// let string=a
// console.log(string.toUpperCase(a));
// // OR
// console.log(a.toUpperCase());

// let a="hello"
// console.log(a.toUpperCase());

// let emailId=prompt('please provide your email id')
// console.log(emailId.toLowerCase());

// TO FIND INDEX VALUE

// let detail="shubham is laughing"
// let index=detail.indexOf('1')
// console.log(index)
// console.log(detail.at(11));

// SLICE METHOD:

// let str="i am from fatehpur"
// let result=str.slice(0,5)
// console.log(result);

// let str="bhagwanmehra04@gmail.com"

// let lastindex= str.indexOf('04')
// let result=str.slice(0,lastindex)
// console.log(result);

// let address="Asother-fatehpur"
// let firstIndex=address.indexOf('f')
// console.log(firstIndex);

// let result=address.slice(firstIndex,address.indexOf(address.length))
// console.log(result);

// CONCATE METHOD"

// let firstName="bhagwan"
// let lastName="mehra"

// let result=firstName.concat(' ',lastName,' ','bia4')
// console.log(result);

// let firstName='bhagwan'
// let middleName='das'
// let lastName='mehra'

// let result=firstName.concat(' ',middleName,' ', lastName)
// console.log(result);

// OR
// let result=firstName+" "+middleName+" "+lastName
// console.log(result);

// let gmail="bhagwanmehra04@gmail.com"
// // let gmail=prompt("write you Email id here!")
// let beforAtTherateValue=gmail.slice(0,gmail.indexOf('@'))
// let halfAterAtTheRateValue=beforAtTherateValue.slice(0,beforAtTherateValue.length/2)
// console.log(halfAterAtTheRateValue);

// let domain=gmail.slice(gmail.indexOf('@')+1,gmail.length)

// let result=halfAterAtTheRateValue.concat('...@',domain)
// console.log(result);


// SPLIT METHOD:
// let str='Bhopal Madhya Pradesh'

// let result=str.split('')
// console.log(result);

// JOIN METHOD

// let arr=['a','b','c']
// let result=arr.join('+')
// console.log(result);

// SIX DIGIT GENERATOR
// example 1:
// let max=999999
// let min=100000
// let result=Math.floor(Math.random()*((max-min)+1)+min)
// console.log('password:',result)

// example2:
// let password=''
// for(let i=0;i<6;i++){
//     let num=Math.random()*10

//     let roundedNum=Math.floor(num)
//     password=password+roundedNum
// }
// console.log('your password:',password);

// INCLUEDES METHOD:

// let name="bhagwanji"

// console.log(name.includes('i'))

// let name=[ 'aa','ab','ac','ad','ba','bb','bc','bd','ca','cb','cc','cd']

// for (let i=0;i<name.length;i++){
    
//     if(name[i].includes('d')){
//         console.log(name[i])
//     }

// TRIM METHOD:
// It is used to trim the unwanted spaces left.
