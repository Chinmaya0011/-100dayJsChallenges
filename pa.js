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
console.log("5"===5);
console.log("20"+10+10)







