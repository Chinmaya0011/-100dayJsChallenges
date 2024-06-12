// function factorial(n){
//     if(n===1||n===0){
//       return 1;
//     }
//      return (factorial(n-1))*n
//     }
//     console.log(factorial(4))
// function position(letter){
//     let alphabet="abcdefghijklmnopqrstuvwxyz";
//     for(let i=0;i<alphabet.length;i++){
//         if(alphabet[i]===letter){
//             return `Position of alphabet: ${i+1}`;
//         }
//     }
// }
// console.log(position("h"))
// function remainder(n, m){
//     if(n===0||m===0){
//       return NaN;
//     }  
//       return n%m;
//     }
//     console.log(remainder(17,5))

// multiplicationTable = function(size) {
//   // let table=size*size;
//   let result=[];
//   for(let i=1;i<=size;i++){
//    let num=i;
//    let squ=[];
//    for(let j=1;j<=size;j++){
// squ.push(num*j)
//    }
//    result.push(squ)
//   }
// return result;

// }


// console.log(multiplicationTable(3))

// function findNextSquare(sq) {
//     let nextSq=0;
//     let result=-1;
//     for(let i=0;i<sq;i++){
//         if(i*i==sq){
// nextSq=i+1;
//         }
//      else{
//         result=-1;
//      }
//     }
//     result= nextSq*nextSq ;
//     return result;
//   }
//   console.log(findNextSquare(121))

// function findNextSquare(sq) {
// let root=Math.sqrt(sq);
// if(Number.isInteger(root)){
//     let nextSq=(root+1)*(root+1);
//     return nextSq;
// }
// else{
//     return -1;
// }
//   }
//   console.log(findNextSquare(121))

// function printArray(array){
// return array.join(",")
//   }
//   console.log(printArray(["h","o","l","a"]))
// function xor(a, b) {
//    if(a^b===1){
//     return true;
//    }
//    else{
//     return false;
//    }
//    }
//    console.log(xor(1,2))
// function getEvenNumbers(numbersArray){
//     let result=[];
//       for(let i=0;i<numbersArray.length;i++){
//         if(numbersArray[i]%2===0){
//             result.push(numbersArray[i])
//         }
//       }
//       return result;
//     }
// function removeSmallest(numbers) {
//     let newArr=[...numbers];
//   let smallestNumber=numbers[0];
//   for(let i=0;i<numbers.length;i++){
//     if(numbers[i]<smallestNumber){
//         smallestNumber=numbers[i]
//     }

//   }
// let index=numbers.indexOf(smallestNumber);
// if(index!==-1){
//   newArr.splice(index,1)
// }
// return newArr;
// }
//  console.log(removeSmallest([1,2,1,3,4,5]))

// function findMultiples(integer, limit) {
// let result=[];
// for(let i=integer;i<=limit;i+=integer){
//     result.push(i)
// }
// return result;
// }
//   console.log(findMultiples(5,25))

// var number = function(busStops){
//     let takes=0;
//     let drops=0;
// for(let i=0;i<busStops.length;i++){
// takes+=busStops[i][0];
// drops+=busStops[i][1];
// }
// console.log(takes-drops)
//   }
//   number([[10,0],[3,5],[5,8]])


// function binToDec(bin) {
//     let num=parseInt(bin)
//    let binry= num.toString(2);
//     return parseInt(binry)
//   }
//   console.log(binToDec("10"))

// function sumDigits(number) {
// let num=Math.abs(number).toString();
// let result=0
// for(let i=0;i<num.length;i++){
// result+=parseInt(num[i])
// }
// return result;
// }
// console.log(sumDigits(-12))

// var Ball = function(ballType) {
// if(ballType===null||ballType===undefined){
//     return "regular"
// }
// else{
//     return ballType;
// }
// };
// //   const chinu=new Ball()
// function printerError(s) {
//     let errors = 0;
//     let total = s.length;
//     let validChars = "abcdefghijklm";
    
//     for (let i = 0; i < s.length; i++) {
//         if (!validChars.includes(s[i])) {
//             errors++;
//         }
//     }
    
//     return `${errors}/${total}`;
// }

// console.log(printerError("chinmaya")); // Output should be "5/8"

// function reverseList(list) {
//     let arr=[];
//       for(let i=list.length-1;i>=0;i--){
//         arr.push(list[i])
//       }
//       return arr;
//     }
//     console.log(reverseList([1,2,3,4]))

// let date=new Date();
// console.log(date.getTime())

// let chinu="Chinmaya";
// let Chinu="Chinmaya";

// function outerFunction() {
//     let outerVariable = 'I am from outerFunction';
  
//     function innerFunction() {
//       console.log(outerVariable);
//     }
  
//     return innerFunction;
//   }
  
//  outerFunction();

//  let a='';
//  console.log(a)

//  let c=null;
//  console.log(typeof c)
// let num="10";
// let num1=+num;
// console.log(num+num1)

// let num=7;
// console.log(typeof (num+""))
// let a;
// let b=null;
// if(a){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// console.log(parseInt("-123"))
// console.log("11"+1)
// console.log(10+"10")
// let a=10-"6"
// console.log(typeof a)
// console.log(false-true)
// console.log("chinu"/2)
// console.log("5"===5);
// console.log("20"+10+10)


// let age=17;

// switch(true){
//     case (age<18):
//         console.log("drive cycle");
//         break;
//         case (age>=18):
//             console.log("yo drive bike")
//         break;
//         default:
//             console.log("enter a number")

// }

//while loop;

// let i=0;

// while(i<10){
//     console.log(i);
//     i++;
// }
// let i=1;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=10)
    // for(let i=0;i<5;i++){
    //     let pattern="*"
    //  for(j=1;j<=i;j++){
    //   pattern=pattern+" "+"*"
    //  }
    //    console.log(pattern)
    // }

//     for(let i=1;i<=5;i++){
//         let pattern="";
//         for(let j=1;j<=i;j++){
// pattern+=" "+"*";
//         }
//         console.log(pattern)
//     }
// let star=5;
// for(let i=1;i<=star;i++){
// let space="";
// for(let j=1;j<=(star-i);j++){
//     space+=" "
// }
// let str=""
// for(let k=1;k<=i;k++){
// str+="*"
// }
// console.log(space+str)
// }

// for(let i=1;i<=5;i++){
//     let space="";

//     for(let j=1;j<=(5-i);j++){
//         space+=" ";
      
//     }
//     let star="";
//     for(let k=1;k<=i;k++){
//         star+="*"
//     }

//     for(let l=2;l<=i;l++){
//        star+="*"
//     }
//     console.log(space+star)
// }
// let count=1
// for(let i=1;i<=4;i++){
//     let num=''
//     for(let j=1;j<=i;j++){
//      num+=count;
//    count++
//     }
//     console.log(num)
      
// }
// let count = 1;
// for (let i = 1; i <= 4; i++) {
//     let num = Array.from({ length: i }, () => count++).reduce((acc, curr) => acc + curr, '');
//     console.log(num);
// }

// let chinu="chinmayakumarmishra"
// for(let id of chinu){
//     console.log(item)
// }
// let number=[1,2,4,5,6];
// number.forEach(number=>{
//     console.log(number*2)
// })
// number.map(number=>{
//     console.log(number+1)
// })
// let a=[1,2,3,4,5];
// let arr=a.map(element=>element*5);
// let arr2=arr.findIndex(element=> element>=10);
// console.log(arr2)

// let str="chinmaya kumar mishra";
// function capital(str){
//     let str1=str.split(" ");
//     let result=" "
// for(let i=0;i<str1.length;i++){
//    let word=str1[i];
//   let lower =word.substring(0,1).toUpperCase()+word.substring(1,str1[i].length);
//  result+=lower+" "
// }
// return result;
// }
// console.log(capital(str))
// let result=str.match(/kumar/g);
// console.log(result.length)
// let result1=str.slice(8,11);
// console.log(result1)
// let result=str.at(-4);
// console.log(result)

let str="chinmaya kumar mishra";
// console.log(str.slice(1))
// console.log(str.charAt(0))
// function camelCase(str){
// let str1=str.split(" ")
// let result=""
// for(let i=0;i<str1.length;i++){
// let word=str1[i];
// result+=word.at(0).toUpperCase()+word.slice(1)+" ";
// }
// console.log(result)
// }
// camelCase(str)

// for(let char=97;char<=122;char++){
//     console.log(String.fromCharCode(char))
// }


let num=parseInt((Math.random()*100).toFixed());
console.log(typeof num)